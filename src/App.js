import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/tetiana-zlyhostieva-b8b962218/"
            target="_blank"
            rel="noreferrer"
            className="website-url">
            Tetiana Zlyhostieva
          </a>{" "}
          and is open-source code{" "}
          <a
            href="https://github.com/Tanyuwik/weather-react"
            target="_blank"
            rel="noreferrer"
            className="website-url">
            on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
