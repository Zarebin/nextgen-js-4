import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./features/user/register/Register";
import Login from "./features/user/login/Login";
import Header from "./app/components/Header/Header";
import Dashboard from "./app/components/Dashboard/Dashboars";
import FoodFact from "./features/foodFact/FoodFact";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/food_fact" element={<FoodFact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
