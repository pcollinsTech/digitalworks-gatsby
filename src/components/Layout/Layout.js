
import React from "./node_modules/react"
import PropTypes from "prop-types"
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar"
import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div>
      <main>{children}</main>
      <footer>

      </footer>
    </div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
