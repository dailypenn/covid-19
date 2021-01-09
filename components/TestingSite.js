import React from 'react'
import s from 'styled-components'

import { Title } from '../components/shared'
import { LIBRE_BOLD } from '../utils/font'


const TrackingSiteWrapper = s.div`
  margin: 4rem 10rem;
`

const TestingSite = () => (
  <TrackingSiteWrapper>
   <Title> Testing Sites at Penn </Title>
  </TrackingSiteWrapper>
)

export default TestingSite