import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'
import { generateMedia } from 'styled-media-query'

const media = generateMedia()

/**
 * WAS: Transitory possibility for switching to WebP.
 * Should no longer be necessary from gatsby-background-image v0.2.5 onward!
 *
 * @param imageData   Default imageData (fluid / fixed) from GraphQL query.
 * @return {Object}   Switched source properties to WebP.
 *
 * @deprecated
 */
/*eslint-disable */
const switchToWebP = imageData => {
  let convertedImageData = { ...imageData }

  if (convertedImageData.src && convertedImageData.srcWebp) {
    convertedImageData.srcDefault = convertedImageData.src
    convertedImageData.src = convertedImageData.srcWebp
  }
  if (convertedImageData.srcSet && convertedImageData.srcSetWebp) {
    convertedImageData.srcSetDefault = convertedImageData.srcSet
    convertedImageData.srcSet = convertedImageData.srcSetWebp
  }

  return convertedImageData
}
/*eslint-enable */

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Extract imageData (default).
      const imageData = data.desktop.childImageSharp.fluid
      // Until v0.2.5 was published, temporary possibility to switch to WebP.
      // const imageData = switchToWebP(data.desktop.childImageSharp.fluid)
      return (
        <StyledWrapper>
          <StyledSymetryWrapper>
            <BackgroundImage
              Tag="section"
              className={className}
              // To style via external CSS see layout.css last examples:
              // className="test"
              fluid={imageData}
              backgroundColor={`#040e18`}
              // Title get's passed to both container and noscriptImg.
              title="gbitest"
              // You are able to set a classId and style by wrapper (see below):
              // classId="gbi"
              // style={{
              //   // Defaults are overwrite-able by setting one of the following:
              //   // backgroundSize: '',
              //   // backgroundPosition: '',
              //   // backgroundRepeat: '',
              // }}
              // You can "safely" (look them up beforehand ; ) add other props:
              id="gbitest"
              role="img"
              aria-label="gbitest"
            >
              {children}
            </BackgroundImage>
          </StyledSymetryWrapper>
          <StyledSymetryWrapper>
            <StyledWelcomeImage fluid={imageData} backgroundColor="#040e18" />
          </StyledSymetryWrapper>
        </StyledWrapper>
      )
    }}
  />
)

const StyledSymetryWrapper = styled.div`
  width: 50vw;
  height: 100%;
  overflow: hidden;
`

const StyledWelcomeImage = styled(Img)`
  width: 100vw;
  height: auto;
`

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  
  // These three crucial styles (if existing) are directly parsed and added to 
  // the pseudo-elements without further ado (except when overwritten).
  //background-repeat: repeat-y;
  //background-position: left center;
  //background-size: cover;
  
  // With media-queries you have to overwrite the default options (see style={{}} above).
  // ${media.lessThan('large')`
  //   background-size: cover;
  //   &:after, &:before {
  //     background-size: contain;
  //   }
  // `}
  
  // For pseudo-elements you have to overwrite the default options (see style={{}} above).
  // See: https://github.com/timhagn/gatsby-background-image/issues/20  
  //&:after, &:before {
  //   background-clip: content-box;
  //   background-size: contain;
  //}
`

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  // This is an example how to target the pseudo-elements via classId (deprecated):
  //.gatsby-background-image-gbi:after, .gatsby-background-image-gbi:before {
  //  background-clip: content-box;
  //}
`

export default StyledBackgroundSection
