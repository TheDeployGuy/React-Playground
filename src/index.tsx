import * as React from "react";
import { render } from "react-dom";
import ErrorBoundary from "./ErrorBoundary";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React 16 Playground</h1>
      {/* This is the line that is going to cause the app to crash and cause the Error Boundary to kick in. */}
      {this.props}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  rootElement
);
