import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    // Update state with error details
    this.setState(prevState => ({
      error,
      errorInfo,
      errorCount: prevState.errorCount + 1
    }));

    // Log to error reporting service (e.g., Sentry, LogRocket)
    // This is where you'd send the error to your monitoring service
    if (window.plausible) {
      window.plausible('error', {
        props: {
          error_message: error.toString(),
          component_stack: errorInfo.componentStack?.substring(0, 200)
        }
      });
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      // Check if we're in a loop of errors
      if (this.state.errorCount > 3) {
        return (
          <div className="min-h-screen bg-cream flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-2xl font-serif font-bold text-red-600 mb-4">
                Kritischer Fehler
              </h1>
              <p className="text-gray-700 mb-6">
                Es tut uns leid, aber die Anwendung konnte nicht geladen werden.
                Bitte laden Sie die Seite neu oder kontaktieren Sie den Support.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-wine-red text-white px-4 py-2 rounded hover:bg-wine-red-dark transition-colors"
              >
                Seite neu laden
              </button>
            </div>
          </div>
        );
      }

      // Regular error UI
      return (
        <div className="min-h-screen bg-cream flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <svg
                className="w-20 h-20 text-wine-red mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                Ups! Ein Fehler ist aufgetreten
              </h1>
              <p className="text-gray-600">
                Entschuldigung, etwas ist schiefgelaufen. Der Fehler wurde protokolliert.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 bg-gray-100 rounded p-4">
                <summary className="cursor-pointer font-semibold text-gray-700">
                  Fehlerdetails (nur in Entwicklung sichtbar)
                </summary>
                <pre className="mt-2 text-xs text-red-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleReset}
                className="w-full bg-wine-red text-white px-4 py-3 rounded hover:bg-wine-red-dark transition-colors font-medium"
              >
                Erneut versuchen
              </button>

              <Link
                to="/"
                className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded hover:bg-gray-300 transition-colors font-medium text-center block"
              >
                Zur Startseite
              </Link>

              <button
                onClick={() => window.location.reload()}
                className="w-full text-gray-600 hover:text-gray-800 underline text-sm"
              >
                Seite neu laden
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Sollte das Problem weiterhin bestehen, kontaktieren Sie uns bitte über das{' '}
                <Link to="/kontakt" className="text-wine-red underline hover:text-wine-red-dark">
                  Kontaktformular
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;