import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Tetiana Zlyhostieva and is{" "}
          <a
            href="https://github.com/Tanyuwik/weather-react"
            target="_blank"
            rel="noreferrer"
            className="website-url">
            Open-source code on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
