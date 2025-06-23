import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.error('🚀 ~ ErrorBoundary ~ error:', error)
    return { hasError: true }
  }

  resetError = () => {
    this.setState({ hasError: false })
  }

  goToHomePage = () => {
    window.location.href = `${import.meta.env.VITE_BASE_PATH}`
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
          <p className="text-lg text-gray-600 mb-8">We apologize for the inconvenience. Please try again or go back to the home page.</p>
          <div className="flex gap-4">
            <button
              onClick={this.resetError}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Try Again
            </button>
            <button
              onClick={this.goToHomePage}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Go to Home
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
