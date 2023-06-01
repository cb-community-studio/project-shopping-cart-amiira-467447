// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/homePage";
import Register from "./containers/Auth/register"
import Login from "./containers/Auth/login"
import About from "./containers/about";
import Contact from "./containers/contact";
import Policy from "./containers/policy"
import Faqs from "./containers/faqs"
import PageNotfound from "./containers/pageNotfound";
import Blog from "./containers/blog";
import Dashboard from "./containers/user/Dashboard"
import PrivateRoute from "./components/Routes/Private.js";
import ProductCategory from "./containers/productcategory"
// import ForgotPasssword from "./components/Auth/ForgotPasssword";

import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./containers/admin/adminDashboard";
import CreateCategory from "./containers/admin/CreateCategory";
import CreateProduct from "./containers/admin/CreateProduct";
import Users from "./containers/admin/User";
// import Orders from "./pages/user/Orders";
// import Profile from "./pages/user/Profile";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        

        <Route path="/blog" element={<Blog />} />
        <Route path="/category" element={<ProductCategory />} />
        <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         {/* <Route path="/forgot-password" element={<ForgotPasssword />} /> */}

        
         <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>

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
