import React from 'react'
import s from 'styled-components'

import { Title, ContentIndent } from '../components/shared'


const TestingSiteWrapper = s.div`
  margin: 4rem 10rem;
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

const TestingSite = () => (
  <TestingSiteWrapper>
   <Title> Testing Sites at Penn </Title>
   <ContentIndent>
     {/* stuff for map here */}
   </ContentIndent>
  </TestingSiteWrapper>
)

export default TestingSite