import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("PabaOps render error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-page">
          <h1>Something went wrong</h1>
          <p>The portfolio could not finish loading. Please refresh the page or return home.</p>
          <a className="mini-btn" href="/pabaops-portfolio/#/">Return home</a>
        </main>
      );
    }

    return this.props.children;
  }
}
