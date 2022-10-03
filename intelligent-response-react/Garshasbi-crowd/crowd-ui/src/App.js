import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./features/users/Register";
import Login from "./features/users/Login";
import Header from "./components/Header";
import FoodFact from "./features/foodFact/FoodFact";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/food_fact" element={<FoodFact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
