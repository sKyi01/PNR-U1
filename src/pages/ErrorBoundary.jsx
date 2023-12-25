// ErrorBoundary.js

import React, { Component } from 'react';
import CommonErrorPage from '../constants/CommonErrorPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can also redirect to a different route here
      return <CommonErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
