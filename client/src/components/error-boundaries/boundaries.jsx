import React, { Component } from 'react'

import './error-boundary.styles.scss'

export class ErrorBoundary extends Component {
  constructor() {
    super()

    this.state = {
      isError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {isError: true}
  }

  render() {
    return this.state.isError ? (
      <div className="error-image-overlay">
        <div className="error-image-container"></div>
        <h2 className="error-image-text">Sorry, cannot fetch the page currently.</h2>
      </div>
    ) : this.props.children
  }
}

export default ErrorBoundary
