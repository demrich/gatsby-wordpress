import React from "react"
import PropTypes from "prop-types"
class Layout extends React.Component {
  render(){
    const { children } = this.props;

  return (
      <div>
      {children()}
      </div>
    )
  }
}

Layout.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Layout
