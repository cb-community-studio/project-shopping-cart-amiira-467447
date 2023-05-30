import React from "react";
import Layout from "./../components/Layout/layout";
const about = () => {
  return (
    <Layout title={"About us - FakeShop"}>
      <div class="fsl">
      <img  src="../images/FSL.PNG" alt="FakeShop LOGO"/>
      </div>
      <h1 class= "aheader">About FakeShop</h1>
      <p class ="apara">
        FakeShop is your go-to online destination for all your shopping needs.
        We offer a wide range of high-quality products at competitive prices.
        Whether you're looking for electronics, fashion, home goods, or more,
        FakeShop has got you covered. With a user-friendly interface and secure
        payment options, shopping with us is convenient and hassle-free.
        Experience the joy of seamless online shopping at FakeShop today!
      </p>
      
    </Layout>
  );
};

export default about;
