import * as React from "react";
import { logError } from "./logErrorService";

interface ErrorBoundaryProps {
  hasError: boolean;
  error: string;
}
export default class ErrorBoundary extends React.Component<
  {},
  ErrorBoundaryProps
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.toString() };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logError(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <h2>App Crashed</h2>
            <p>Something has went horribly wrong.</p>
            {this.state.error}
          </div>
        </div>
      );
    }

    // If there is no error just render the children component.
    return this.props.children;
  }
}
