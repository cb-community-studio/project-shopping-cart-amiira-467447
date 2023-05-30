import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
<div className="footer">
      <p className="text-center mt-6">
        <Link to="/about">About</Link>|
        <Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>|
        <Link to="/faqs"> FAQs</Link>
      </p>
      <h1 className="text-center footercopyright">All Right Reserved &copy; Amira FakeShop</h1>
    </div>
  )
}

export default footer
