import React, { useEffect, useState } from 'react'
import s from 'styled-components'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import axios from 'axios'

import { Title } from './shared'
import { LIBRE_BOLD } from '../utils/font'
import { getLastElem } from '../utils'

const GraphWrapper = s.div`
  margin: 4rem 10rem;
  color: #707070;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`

const GraphTitle = s.text`
  color: #283033;
`

const GraphSubtitle = s.text`
  color: #D12D4A;
  vertical-align: middle;
  margin-top: 4rem;
  margin-left: 0;
  font-weight: 800;

  @media (max-width: 768px) {
    display: block;
  }
`

const GraphNumber = s(Title)`
  padding: 0;
  font-size: 50px;
`

const ButtonWrapper = s.div`
  .graph-button {
    :hover {
      border-color: ${({ color }) => color};
      background-color: ${({ color }) => color};
    }
  }
`

const GraphNumberBubble = s.div`
  ${LIBRE_BOLD}
  color: #D12D4A;
`

const graphData = (dates, label, color, data) => ({
  labels: dates,
  datasets: [
    {
      label,
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: color,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: color,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data
    }
  ]
})

const graphOptions = graphState => {
  if (graphState === 'RATE') {
    return {
      legend: { display: false },
      tooltips: {
        callbacks: { label: tooltipItem => `Weekly Positivity Rate: ${tooltipItem.yLabel}%` }
      }
    }
  }
  
  if (graphState === 'DAILY') {
    return {
      legend: { display: false },
      tooltips: {
        callbacks: { label: tooltipItem => `Weekly Count: ${tooltipItem.yLabel}` }
      }
    }
  }

  return {
    legend: { display: false },
    tooltips: {
      callbacks: { label: tooltipItem => `Cumulative: ${tooltipItem.yLabel}` }
    }
  }
}

const Tracker = () => {
  const [graphState, setGraphState] = useState('DAILY')

  // dates for the data
  const [dates, setDates] = useState([])

  // weekly cases
  const [weeklyCasesData, setWeeklyCasesData] = useState([])

  // cumulative cases
  const [cumulativeCasesData, setCumulativeCasesData] = useState([])
  // const [totalCases, setTotalCases] = useState(null)

  // positivity graph
  const [weeklyPositivityData, setWeeklyPositivityData] = useState([])

  // side text
  const [cumulativeCasesNumber, setCumulativeCasesNumber] = useState(null)
  const [cumulativeTestsNumber, setCumulativeTestsNumber] = useState(null)

  useEffect(async () => {
    await axios.get('/api/covid-data').then(resp => {
      const { data: {
        dates,
        cumulativeTestsNumber,
        weeklyCases,
        cumulativeCases,
        weeklyPositivity
      }} = resp

      setWeeklyCasesData(graphData(dates, 'Weekly Count', '#D12D4A', weeklyCases))
      setCumulativeCasesData(graphData(dates, 'Cumulative', 'rgba(75,192,192,1)', cumulativeCases))
      setWeeklyPositivityData(graphData(dates, 'Positivity', '#d0c541', weeklyPositivity))

      setCumulativeCasesNumber(getLastElem(cumulativeCases))
      setCumulativeTestsNumber(cumulativeTestsNumber)
    })
    // await axios.get('/api/fetch?url=https://recommender.thedp.com/covid').then(resp => {
    //   const { data: { results } } = resp
    //   const [ { Tests_Done_Cumulative, Positive_Cases_Cumulative }, _ ] = results
    //   setCumulativeCases(Positive_Cases_Cumulative[Positive_Cases_Cumulative.length - 1])
    //   setCumulativeTests(Tests_Done_Cumulative[Tests_Done_Cumulative.length - 1])
    //   setCaseData(graphData(results[0]["Dates"], 'Weekly Count', '#D12D4A', results[0]["Positive_Cases"]))
      
    //   let rate = results[0]["Positive_Cases"]
    //   rate = rate.map((num, idx) => (num/results[0]["Tests_Done"][idx] * 100).toFixed(2))
    //   setPositiveRateData(graphData(results[0]["Dates"], 'Cumulative', '#d0c541', rate))
    // })

    // await axios.get('/api/fetch?url=https://recommender.thedp.com/covidtotal').then(resp => {
    //   const { data } = resp
    //   setTotalCases(data["confirmed"][data["confirmed"].length - 1])
    //   setTotalCasesDate(data['timestamp'][data['timestamp'].length - 1])
    //   setCumulativeData(graphData(data["timestamp"], 'Positivity', 'rgba(75,192,192,1)', data["confirmed"]))
    // })
  }, [])

  return (
    <GraphWrapper>
      <div className="row">
        <div className="col-md-8" style= {{ textAlign: "center" }}>
          <GraphTitle>{graphState == 'DAILY' 
            ? 'Positive COVID-19 Cases at Penn'
            : graphState == 'CUMULATIVE'
              ? 'Confirmed/Probable COVID-19 Cases Among Penn Students'
              : 'Positivity Rates at Penn'}
          </GraphTitle>
          <Line
            data={graphState == 'DAILY' 
              ? weeklyCasesData
              : graphState == 'CUMULATIVE'
                ? cumulativeCasesData
                : weeklyPositivityData}
            options={graphOptions(graphState)}
          />
          {graphState !== 'CUMULATIVE' && (
            <p style={{ fontSize: '90%', margin: '1rem 0' }}>
              All data points represent statistics from the week ending in the specified date.
            </p>
          )}
          <div className="row justify-content-center" style={{ marginTop: '1rem' }}>
            <ButtonWrapper color="#D12D4A">
              <button
                type="button"
                className="btn btn-outline-secondary graph-button"
                onClick = {() => setGraphState('DAILY')}
                style={{ marginRight: '1rem', marginBottom: '1rem'}}
              >
                Weekly Cases
              </button>
            </ButtonWrapper>
            <ButtonWrapper color="rgba(75,192,192,1)">
              <button
                type="button"
                className="btn btn-outline-secondary graph-button"
                onClick = {() => setGraphState('CUMULATIVE')}
                style={{ marginRight: '1rem' , marginBottom: '1rem'}}
              >
                Cumulative Cases
              </button>
            </ButtonWrapper>
            <ButtonWrapper color="#d0c541">
              <button
                type="button"
                className="btn btn-outline-secondary graph-button"
                onClick = {() => setGraphState('RATE')}
              >
                Weekly Positivity Rates
              </button>
            </ButtonWrapper>
          </div>
        </div>
        <div className="col-md">
          <GraphSubtitle>CUMULATIVE CASE COUNT</GraphSubtitle>
          <div class="row">
            <div class="col-auto">
              <GraphNumber noBorder> {cumulativeCasesNumber} Cases </GraphNumber>
              <GraphNumberBubble>
                <p>({Math.round(10000 * cumulativeCasesNumber / cumulativeTestsNumber) / 100}% positivity rate with <br /> {String(cumulativeTestsNumber).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} tests administered)</p>
              </GraphNumberBubble>
            </div>
          </div>
          Reported at Houston Hall
          {/* <div style={{ marginTop: '3rem' }}>
            <GraphNumber noBorder> {totalCases} Cases </GraphNumber>
            Reported by domestic and international students as of {moment(totalCasesDate, 'YYYY-MM-DD').format('MMMM D, YYYY')}
        </div> */}
        </div>
      </div>
    </GraphWrapper>
  )
}

export default Tracker