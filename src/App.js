import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Dresses from "./pages/Dresses";
import ChangePassword from "./pages/ChangePassword";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import "flowbite/dist/flowbite.min.js";
import FavoriteList from "./pages/FavoriteList";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NewPassword from "./pages/NewPassword";
import PastOrders from "./pages/PastOrders";
import RegisterComplaint from "./pages/RegisterComplaint";
import Profile from "./pages/Profile";
import Privacy from "./pages/Privacy";
import Help from "./pages/Help";
import ForgetPassword from "./pages/ForgetPassword";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/profile"
          element={
            <Profile isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          }
        />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/pastOrders" element={<PastOrders />} />
        <Route path="/registerComplaint" element={<RegisterComplaint />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/favorite" element={<FavoriteList />} />
        <Route path="/productDetailsPage" element={<ProductDetailsPage />} />

        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
