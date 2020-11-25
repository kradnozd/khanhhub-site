import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import CountDown from "./countdown"

const ComingSoon = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "soon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        textAlign: `center`
      }}
    >
      <Img
        style={{ maxWidth: `480px`, margin: `auto` }}
        fluid={data.file.childImageSharp.fluid}
      />
      <CountDown />
    </div>
  )
}

export default ComingSoon
