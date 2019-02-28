import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'
import { generateMedia } from 'styled-media-query'

const media = generateMedia();

const BackgroundSection = ({ className, children }) => (
    <StaticQuery query={graphql`
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
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
           <StyledWrapper>
             <StyledSymetryWrapper>
               <BackgroundImage Tag="section"
                                className={className}
                                fluid={imageData}
                                backgroundColor={`#040e18`}
                                classId="gbi"
               >
                 {children}
               </BackgroundImage>
             </StyledSymetryWrapper>
             <StyledSymetryWrapper>
              <StyledWelcomeImage fluid={imageData} />
             </StyledSymetryWrapper>
           </StyledWrapper>
       )
     }
     }
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
  background-repeat: repeat-y;
  
  // With media-queries you sadly still have to use !important, for the moment.
  // ${media.lessThan("large")`
  //   background-size: contain !important;
  //   &:after, &:before {
  //     background-size: contain !important;
  //   }
  // `}
`

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  // This is an example how to target the pseudo-elements:  
  //.gatsby-background-image-gbi:after, .gatsby-background-image-gbi:before {
  //  background-position: top right;
  //}
`

export default StyledBackgroundSection