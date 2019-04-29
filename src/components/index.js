import React, { forwardRef, useCallback, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'
import { generateMedia } from 'styled-media-query'
import { findDOMNode } from 'react-dom'

const media = generateMedia()

const logObservedCallback = (mutationsList, observer) => {
  if (!mutationsList) return
  mutationsList.forEach(mutation => {
    if (mutation.type === `attributes`)
    console.log(mutation)
  })
}

/**
 * In this functional component a <BackgroundImage />  is compared to an <Img />.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components from index.js / page-2.js.
 * @return {*}
 * @constructor
 */
const BackgroundSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )
  const observer = new MutationObserver(logObservedCallback)
  const measuredRef = useCallback(targetNode => {
    if (targetNode !== null) {
      const config = {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
        attributeOldValue: true,
        characterDataOldValue: true,
      }
      const node = findDOMNode(targetNode)
      observer.observe(node, config)
      return () => {
        observer.disconnect()
      }
    }
  }, []);

  // Extract imageData.
  const imageData = desktop.childImageSharp.fluid
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
          // You are able to set a classId and style by wrapper (see below or
          // https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles):
          // classId="gbi"
          // style={{
          //   // Defaults are overwrite-able by setting one of the following:
          //   // backgroundSize: '',
          //   // backgroundPosition: '',
          //   // backgroundRepeat: '',
          // }}
          // To "force" the classic fading in of every image (especially on
          // imageData change for fluid / fixed) by setting `soft` on `fadeIn`:
          fadeIn={`soft`}
          // You can "safely" (look them up beforehand ; ) add other props:
          id="gbitest"
          role="img"
          aria-label="gbitest"
        >
          {children}
        </BackgroundImage>
      </StyledSymetryWrapper>
      <StyledSymetryWrapper>
        <Img
          ref={measuredRef}
          className={`main-img`}
          id="main-img"
          fluid={imageData}
          backgroundColor="#040e18"
          objectFit="cover"
          objectPosition="50% 50%"
          style={{
            width: `100vw`,
            height: `auto`,
          }}
        />
      </StyledSymetryWrapper>
    </StyledWrapper>
  )
}

const StyledSymetryWrapper = styled.div`
  width: 50vw;
  height: 100%;
  overflow: hidden;
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
  // See: https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles 
  //&:after, &:before {
  //   background-clip: content-box;
  //   background-size: contain;
  //}
`

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;

  // This is an example how to target the pseudo-elements via classId (deprecated):
  //.gatsby-background-image-gbi:after, .gatsby-background-image-gbi:before {
  //  background-clip: content-box;
  //}
`

export default StyledBackgroundSection
