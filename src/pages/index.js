import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Services from "../components/sections/services"
import Testimonials from "../components/sections/testimonials"
import Schedule from "../components/sections/schedule"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Schedule />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
