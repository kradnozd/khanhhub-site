import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--color-bg-strong)`,
      marginBottom: `1.45rem`,
      borderBottom: `1px solid var(--color-meta)`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
        display: `flex`
      }}
    >
      <h1 style={{ margin: 0, fontSize: `1.5rem` }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`
          }}
        >
          <span className="logo">
            Khanh<em>hub</em>
          </span>
        </Link>
      </h1>
      <div style={{ flex: `1` }} />
      <span
        style={{
          float: `right`,
          color: `white`,
          textTransform: `capitalize`,
          fontWeight: `bold`,
          alignSelf: `center`
        }}
      >
        Tự tin sống chất
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
