import React from "react";
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
