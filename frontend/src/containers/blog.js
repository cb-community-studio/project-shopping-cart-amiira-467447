import React from 'react'
import Layout from "./../components/Layout/layout";
import "./blog.css"

const blog = () => {
  return (
    <Layout title={"Blog - FakeShop"}>
  <main>
  <div className="blog-post">
    <h2 className="post-title">Welcome to FakeShop</h2>
    <p className="post-meta">Posted by Admin | Date: 1 June, 2023</p>
    <div>    
    <img className="post-image" src="https://thumbs.dreamstime.com/b/fake-brand-name-colorful-shirts-sell-thai-street-market-pranburi-thailand-december-182667538.jpg" alt="Blog Post Image" />
    <img className="post-image1" src="https://verified.imgix.net/articles/en-us/news/nike-shoes-on-sale.jpg?fit=max&w=1000&q=70" alt="Blog Post Image" />
</div>
    
    <p className="post-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam enim ac massa fringilla lobortis.
      Mauris maximus euismod condimentum. In fringilla interdum lorem at consectetur. Fusce consectetur odio vitae
      lacus posuere tristique. Sed viverra turpis nec cursus fermentum. Donec cursus semper risus in iaculis.
      Integer vel felis lectus. Quisque tempus risus sed diam aliquam, sit amet volutpat quam ultricies.
    </p>
  </div>
  <div className="blog-post">
    <h2 className="post-title">Tips for Online Shopping</h2>
    <p className="post-meta">Posted by Admin | Date: 15 February, 2023</p>
    <img className="post-image" src="https://www.thestreet.com/.image/t_share/MTY4NzczNjE5MTM1MjI3MzI4/13-online-shopping-safety-tips-for-the-holidays.png" alt="Blog Post Image" />
    <p className="post-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam enim ac massa fringilla lobortis.
      Mauris maximus euismod condimentum. In fringilla interdum lorem at consectetur. Fusce consectetur odio vitae
      lacus posuere tristique. Sed viverra turpis nec cursus fermentum. Donec cursus semper risus in iaculis.
      Integer vel felis lectus. Quisque tempus risus sed diam aliquam, sit amet volutpat quam ultricies.
    </p>
  </div>
</main>

    </Layout>
  )
}

export default blog
