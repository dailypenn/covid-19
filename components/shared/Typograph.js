import s from 'styled-components'

export const StyledLink = s.a`
  color: #000000 !important;
  text-decoration: none !important;
`

export const NavText = s.text`
  font-size: 80%;
  font-family: 'Libre Franklin', sans-serif;
  color: #283033;
`

export const HeadlineText = s.div`
  margin-top: 0.5rem;
  color: ${({ color = '#283033' }) => color};
  font-family: 'Playfair Display', serif;
  font-size: ${({ sideArticle }) => sideArticle ? '100%' : '150%'};
`

export const AbstractText = s.div`
  margin-top: 0.5rem;
  color: ${({ color = '#707070' }) => color};
  font-family: 'Georgia', serif;
`

export const TimestampText = s.div`
  margin-top: 0.5rem;
  color: ${({ color = '#696969' }) => color};
  font-family: 'Roboto', sans-serif;
`

export const Title = s.div`
  border-left: 12px solid #D12D4A;
  padding: 0rem 1rem;
  text-align: left;
  font-size: 30px;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 900;
  letter-spacing: 0px;
  color: #283033;
  opacity: 1;
`

export const LiveUpdateTitle = s.h4`
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 900;
  color: #464242;
`

export const LiveUpdateText = s.p`
  margin-top: 1rem;
  color: ${({ color = '#707070' }) => color};
  font-family: 'Georgia', serif;
  font-size: 80%;
`

export const TagText = s.div`
  margin-top: 0.5rem;
  color: ${({ color = '#B5B4B4' }) => color};
  font-family: 'Roboto', sans-serif;
  ${({ weightLight }) => weightLight ? 'font-weight: 100;' : '' }
`