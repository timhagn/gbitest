import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import StyledBackgroundSection from '../components'

const IndexPage = () => (
  <Layout>
    <StyledBackgroundSection>
      <div
        style={{
          height: `100vh`,
          width: `100%`,
          display: `flex`,
          placeContent: `start`,
        }}
      >
        <div
          style={{
            display: `flex`,
            textAlign: `center`,
            color: `#ccc`,
            maxWidth: 960,
            margin: `auto 53% auto auto`,
            alignItems: `center`,
          }}
        >
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
            <div
              style={{
                maxWidth: `300px`,
                margin: `0 auto`,
                marginBottom: `1.45rem`,
              }}
            >
              <Image />
            </div>
            Go to <Link to="/page-2/">page 2</Link> to see an example of
            multiple stacked background images.
          </div>
        </div>
      </div>
    </StyledBackgroundSection>
  </Layout>
)

export default IndexPage
