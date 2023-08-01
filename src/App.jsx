import React from "react"
import "./App.css";
import Nav from "./pages/Navigations /nav"
import Home from "./pages/Home/home"
import About from "./pages/About/about"
import Products from "./pages/Products/product"
import Contact from "./pages/Contacts/contacts"

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/about":
      Component = <About />;
      break;
    case "/products":
      Component = <Products />;
      break;
    case "/contacts":
      Component = <Contact />;
      break; // Add this break statement
    default:
      break;
  }
  return (
    <div>
      <Nav />
      {Component}
    </div>
  );
}

export default App;
