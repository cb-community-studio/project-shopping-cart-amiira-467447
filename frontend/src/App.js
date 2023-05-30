// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/homePage";
import Register from "./containers/Auth/register"
import About from "./containers/about";
import Contact from "./containers/contact";
import Policy from "./containers/policy"
import Faqs from "./containers/faqs"
import PageNotfound from "./containers/pageNotfound";
import Blog from "./containers/blog"
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/*" element={<PageNotfound />} />
      </Routes>
    </>
  );
}

export default App;
