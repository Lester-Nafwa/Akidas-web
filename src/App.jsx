import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Navigations /nav";
// import About from "./pages/About/about";
// import Products from "./pages/Products/product";
// import Contact from "./pages/Contacts/contacts";
import Error from "./pages/error/error";

const LazyHome = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./pages/Home/home"));
    }, 2000);
  });
});

const LazyAbout = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./pages/About/about"));
    }, 2000);
  });
});

const LazyProducts = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./pages/Products/product"));
    }, 2000);
  });
});

const LazyContact = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import("./pages/Contacts/contacts"));
    }, 2000);
  });
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="pharm-details">
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
          <Route
            path="/"
            element={
              <Suspense fallback={isLoading ? <>Loading...</> : null}>
                <LazyHome />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={isLoading ? <>Loading...</> : null}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={isLoading ? <>Loading...</> : null}>
                <LazyProducts />
              </Suspense>
            }
          />
          <Route
            path="/contacts"
            element={
              <Suspense fallback={isLoading ? <>Loading...</> : null}>
                <LazyContact />
              </Suspense>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
