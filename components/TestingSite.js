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
        <iframe
          src="https://flo.uri.sh/visualisation/4904482/embed"
          title="Interactive or visual content"
          frameborder="0"
          scrolling="no"
          style={{ width: '100%', height: '600px' }}
        />
        <div style={{ width: '100%', marginTop: '4px' }}>
          <a
            className="flourish-credit"
            href="https://public.flourish.studio/visualisation/4904482/?utm_source=embed&utm_campaign=visualisation/4904482"
            target="_top"
          >
            <img
              alt="Made with Flourish"
              src="https://public.flourish.studio/resources/made_with_flourish.svg"
            />
          </a>
        </div>
   </ContentIndent>
  </TestingSiteWrapper>
)

export default TestingSite