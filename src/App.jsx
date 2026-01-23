import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Menu from "./Menu";
import OrderSummary from "./OrderSummary"; // <--- Import ini

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-summary" element={<OrderSummary />} />{" "}
        {/* <--- Tambah Route ini */}
      </Routes>
    </Router>
  );
}

export default App;
