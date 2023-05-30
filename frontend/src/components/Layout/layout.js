// type rafce
import React from 'react'
import Footer from "./footer"
import Header from "./header"
import {Helmet} from "react-helmet"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const layout = ({children, title}, description, keywords, author) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description}/>
        <meta name='description' content={keywords}/>
        <meta name='description' content={author}/>
        <title>{title}</title>
      </Helmet>
      <Header/>
      <main style={{minHeight:"80vh"}}>
        <ToastContainer/>
        {children}</main>
      <Footer/>
    </div>
  )
}


// Check balik
layout.defaultProps = {
  title: "FakeShop - everything cheaps!",
  description: "project shopping cart 2.0",
  keywords: "shopping, fakeshop",
  author: "Sarah Amira"
}

export default layout
