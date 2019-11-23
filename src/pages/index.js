import React from 'react'

import Layout from '../components/Layout'
import AstronautImage from '../components/AstronautImage'
import SEO from '../components/SEO'
import { Link } from 'gatsby'
import StyledBackgroundSection from '../components'
import {
  StyledContentWrapperLeft,
  StyledImageWrapper, StyledLink,
  StyledWrapper,
} from '../components/SharedStyledComponents'

const IndexPage = () => (
  <Layout>
    <StyledBackgroundSection>
      <StyledWrapper>
        <StyledContentWrapperLeft>
          <div>
            <SEO
              title="gatsby-background-image test"
              keywords={[`gatsby`, `application`, `react`]}
            />
            <h1>Hi people</h1>
            <p>
              Welcome to the <code>gatsby-background-image</code> test site.
            </p>
            <p>
              Below, you see an image rendered by{' '}
              <code>gatsby-background-image</code>
            </p>
            <p>
              To the right, the same image rendered by <code>gatsby-image</code>
            </p>
            <StyledImageWrapper>
              <AstronautImage />
            </StyledImageWrapper>
            Go to <StyledLink to="/page-2/">page 2</StyledLink> to see an example of
            <strong> multiple stacked background images</strong>.
          </div>
        </StyledContentWrapperLeft>
      </StyledWrapper>
    </StyledBackgroundSection>
  </Layout>
)

export default IndexPage
