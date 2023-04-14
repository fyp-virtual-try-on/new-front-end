import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Dresses from "./pages/Dresses";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import ProductDetailsPage from "./pages/ProductDetailsPage";
function App() {
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
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/productDetailsPage" element={<ProductDetailsPage />} />

        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
