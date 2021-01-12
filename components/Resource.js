import React from 'react'
import s from 'styled-components'

import { Title, StyledLink, ContentIndent } from './shared'
import { LIBRE_BOLD } from '../utils/font'

const ResourceWrapper = s.div`
  margin-top: 1rem;
  background: #F5F5F5;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
`

const ResourceIndivWrapper = s.div`
  padding-top: 1rem
`
const ResourceTitle = s.h5`
  ${LIBRE_BOLD}
  color: #464242;

  transition: 0.3s;

  :hover {
    color: #B5B4B4;
    transition: 0.3s;
  }
`

const NumberCircle = s.div`
  border-radius: 50%;
  text-align: center;
  border: 1px solid #FF0000;
  width: 3rem;
  height: 3rem;
  font-size: 2rem; 
  line-height: 3rem;
  font-weight: 100;
  color: #FF0000;

  @media screen and (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const resources = [
  {
    title:
      'Philadelphia mayor issues stay-at-home order to slow spread of coronavirus',
    link: ''
  },
  {
    title:
      'Philadelphia mayor issues stay-at-home order to slow spread of coronavirus',
    link: ''
  },
  {
    title:
      'Philadelphia mayor issues stay-at-home order to slow spread of coronavirus',
    link: ''
  },
  {
    title:
      'Philadelphia mayor issues stay-at-home order to slow spread of coronavirus',
    link: ''
  },
  {
    title:
      'Philadelphia mayor issues stay-at-home order to slow spread of coronavirus',
    link: ''
  }
]

const Resource = () => (
  <>
    <Title> Resources </Title>
    <ContentIndent>
      <ResourceWrapper>
        {resources.map(({ title, link }, idx) => (
          <ResourceIndivWrapper>
            <div className="row">
              <div className="col-2">
                <NumberCircle> {idx + 1} </NumberCircle>
              </div>
              <div className="col-10">
                <StyledLink href={link} target="_blank">
                  <ResourceTitle> {title} </ResourceTitle>
                </StyledLink>
              </div>
            </div>
          </ResourceIndivWrapper>
        ))}
      </ResourceWrapper>
    </ContentIndent>
  </>
)

export default Resource
