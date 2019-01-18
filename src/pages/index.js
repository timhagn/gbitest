import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Link } from 'gatsby'


const IndexPage = () => (
  <Layout>
    <SEO title="gatsby-background-image test" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to the <code>gatsby-background-image</code> test site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, margin: `0 auto`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
