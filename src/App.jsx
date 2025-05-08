
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import "../public/css/all.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home";
import Ourplans from "./Pages/Ourplans";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import AboutUs from "./Pages/AboutUs";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";



  // import { lazy, Suspense } from "react";
  // import Loader from "./assets/Loader";
  // const Products = lazy(() => import("./Pages/Products"));



function App() {
  return (


    <Router>
      {/* ////// */}
      <Header/>
      {/* ////// */}
      {/* <Suspense fallback={<Loader />}> */}
        <Routes>
          {/* // */}
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/Ourplans" element={<Ourplans/>} />
          <Route path="/ContactUS" element={<Contact/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<SignIn/>} />

          {/* <Route path="/product/:id" element={<Productid />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/ourproducts" element={<Products />} /> */}
          {/* // */}
        </Routes>
      {/* </Suspense> */}
      <Footer/>
      {/* ///// */}
    </Router>


  );
}

export default App;