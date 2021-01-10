import React from 'react'
import s from 'styled-components'

import { Title, StyledLink, ContentIndent } from './shared'
import { LIBRE_BOLD } from '../utils/font'

const ResourceWrapper = s.div`
  margin-top: 1rem;
  background: #F5F5F5;
  padding: 5rem 2rem;
  margin-bottom: 2rem;
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
`

const Resource = () => {
  //do .map later
  return (
    <>
      <Title> Resources </Title>
      <ContentIndent>
        <ResourceWrapper>
          <div className="row">
            <div className="col-2">
              <NumberCircle>1</NumberCircle>
            </div>
            <div className="col-10">
              <StyledLink
                href=""
                target="_blank"
              >
                <ResourceTitle> Philadelphia mayor issues stay-at-home order to slow spread of coronavirus </ResourceTitle>
              </StyledLink>
            </div>
          </div>
        </ResourceWrapper>
      </ContentIndent>
    </>
  )
}

export default Resource