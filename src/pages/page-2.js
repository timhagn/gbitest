import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {
  StyledContentCenterWrapper,
  StyledImageWrapper,
  StyledLink,
} from '../components/SharedStyledComponents'
import GbiStacked from '../components/GbiStacked'
import StyledFullBackground from '../components/FullBackground'

const StyledCenterWrapper = styled(StyledContentCenterWrapper)`
  max-width: 800px;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two - Multiple Stacked Background Images" />
    <StyledFullBackground>
      <StyledCenterWrapper>
        <h1>Multiple Stacked Background Images</h1>
        <p>
          The Below Example is taken from the
          <StyledLink to="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds">
            MDN Article about multiple backgrounds
          </StyledLink>
          .
        </p>
        <p> All attribution goes to them : )!</p>
        <StyledImageWrapper maxWidth={600}>
          <GbiStacked />
        </StyledImageWrapper>
        <Link to="/">Go back to the homepage</Link>
      </StyledCenterWrapper>
    </StyledFullBackground>
  </Layout>
)

export default SecondPage
