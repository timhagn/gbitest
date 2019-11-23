import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const GbiStacked = () => {
  const { bubbles, firefox } = useStaticQuery(
    graphql`
      query {
        bubbles: file(relativePath: { eq: "bubbles.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1280) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        firefox: file(relativePath: { eq: "firefox.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 223) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  //url(https://mdn.mozillademos.org/files/11305/firefox.png),
  // url(https://mdn.mozillademos.org/files/11307/bubbles.png),
  // linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  // Multiple Backgrounds
  const firefoxExampleFluidImageStack = [
    firefox.childImageSharp.fluid,
    bubbles.childImageSharp.fluid,
    `linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0))`,
  ]

  return (
    <StyledStackedBackgrounds
      Tag="div"
      fluid={firefoxExampleFluidImageStack}
      id="imagestack"
      role="img"
      aria-label="A GBI background stack with the firefox example"
    />

  )
}

const StyledStackedBackgrounds = styled(BackgroundImage)`
  width: 600px;
  height: 400px;
  background-color: white;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom right, left, right;
  background-size: auto;
`

export default GbiStacked
