import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ComingSoon from "../components/comingsoon"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ComingSoon />
  </Layout>
)

export default IndexPage
