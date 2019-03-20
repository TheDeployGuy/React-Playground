import * as React from "react";
import { render } from "react-dom";
import ErrorBoundary from "./ErrorBoundary";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hooks Playground</h1>
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
