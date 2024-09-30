import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/MainPage";
import Products from "./pages/ProductsPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="*" element={<NotFound />} />{" "} */}
      </Routes>
    </div>
  );
};

export default App;
