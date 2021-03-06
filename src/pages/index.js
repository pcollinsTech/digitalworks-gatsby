import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import WhyUs from "../components/WhyUs"
import Clients from "../components/Clients";
import News from "../components/News";
// import Instagram from "../components/Instagram"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <div id="about">
      <About />
    </div >
    <div className="grey-bg" id="services">
      <Services />
    </div >
    <div className="green-bg" id="why">
      <WhyUs />
    </div>
    <div id="clients">
      <Clients />
    </div>
    
    <div id="news">
      <News />
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
