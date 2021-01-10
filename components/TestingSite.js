import React from 'react'
import s from 'styled-components'

import { Title, ContentIndent } from '../components/shared'


const TestingSiteWrapper = s.div`
  margin: 4rem 10rem;
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