import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import WhyUs from "../components/WhyUs"
// import Instagram from "../components/Instagram"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <div>
      <About />
    </div>
    <div className="green-bg">
      <Services />
    </div>
    <div className="grey-bg">
      <WhyUs />
    </div>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
