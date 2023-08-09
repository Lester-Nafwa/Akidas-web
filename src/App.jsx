import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Navigations /nav";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Products from "./pages/Products/product";
import Contact from "./pages/Contacts/contacts";
import Error from "./pages/error/error";

function App() {
  return (
    <div>
      <div className="icon-prof">
        <div className="bg-head">
          <img
            src={process.env.PUBLIC_URL + "/assets/profo.png"}
            className="img-prof"
            alt=""
          />
          <hr />
          <div className="title-sub">
            <span>Pharmaceutical & Medical Supplies</span>
          </div>
        </div>
        <Nav />
      </div>
      <div className="rest-code">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
