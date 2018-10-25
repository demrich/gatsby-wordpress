import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#707070',
            textDecoration: 'none',
          }}
        >
          Park Energy
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
