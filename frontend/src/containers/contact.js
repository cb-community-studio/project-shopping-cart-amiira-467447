import React from "react";
import Layout from "./../components/Layout/layout";
import  "../containers/contact.css"


const contact = () => {
  return (
    <Layout title= "Contact us">
      <main>
  <section className="csheader">
   <img className="csimg" src="../images/customerservice.jpg" alt="FakeShop CS"/>
    <p>If you have any questions or need assistance, our customer support team is here to help.</p>
    <p>Please feel free to reach out to us via phone, email, or the contact form below:</p>
    <ul>
      <li>Phone: +03-456-7890</li>
      <li>Email: support@fakeshop.com</li>
    </ul>
  </section>
  <section>
    <h2>Contact Form</h2>
    <form className="formtext" action="#" method="POST">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required defaultValue={""} />
      <button className="btnAbt" type="submit">Submit</button>
    </form>
  </section>
</main>

    </Layout>
  );
};

export default contact;
