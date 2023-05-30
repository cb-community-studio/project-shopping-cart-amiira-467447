import React from "react";
import Layout from "./../components/Layout/layout";
const policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <header className="pmain">
        <h1 >Privacy Policy</h1>
        <p className="ppara">
          At FakeShop, we value your privacy and are committed to protecting
          your personal information. This privacy policy outlines how we
          collect, use, and safeguard the information you provide to us through
          our website and services. By accessing or using FakeShop, you consent
          to the practices described in this policy.
        </p>
      </header>
      <section className="psection">
        <h2 className="pheader">Information We Collect</h2>
        <p className="ppara">
          Personal Information: When you create an account or make a purchase,
          we collect your name, email address, shipping address, and payment
          details. Usage Information: We may collect information about your
          interactions with our website, such as pages visited, products viewed,
          and actions taken. Cookies: We use cookies to enhance your browsing
          experience and gather anonymous information about our website traffic.
        </p>
      </section>
      <section className="psection">
        <h2 className="pheader">Use of Information</h2>
        <p className="ppara">
          We use the collected information to process your orders, provide
          customer support, and improve our products and services. We may send
          you promotional emails or newsletters with your consent. You can opt
          out of these communications at any time.
        </p>
      </section>
      <section className="psection">
        <h2 className="pheader">Data Security</h2>
        <p className="ppara">
          We implement security measures to protect your personal information
          from unauthorized access, alteration, or disclosure. However, please
          note that no method of data transmission over the internet or
          electronic storage is 100% secure.
        </p>
      </section>
      <section className="psection">
        <h2 className="pheader">Disclosure of Information</h2>
        <p className="ppara">
          We may share your information with trusted third-party service
          providers who assist us in delivering our services. We may also
          disclose your information when required by law or to protect our
          rights, property, or safety
        </p>
      </section>

      <header className="pmain">
        <h1>Terms of Service</h1>
        <p className="ppara">
          Welcome to FakeShop! By accessing or using our website and services,
          you agree to comply with the following terms and conditions:
        </p>
      </header>
      <section className="psection">
        <h2 className="pheader">Account Registration</h2>
        <p className="ppara">
          You must be at least 18 years old to create an account and make
          purchases on FakeShop. You are responsible for maintaining the
          confidentiality of your account credentials and agree to notify us
          immediately of any unauthorized use.
        </p>
      </section>
      <section className="psection">
        <h2 className="pheader">Product Information</h2>
        <p className="ppara">
          We strive to provide accurate and up-to-date product information.
          However, we do not guarantee the accuracy, completeness, or
          reliability of any product descriptions or images.
        </p>
      </section>
      <section className="psection">
        <h2 className="pheader">Intellectual Property</h2>
        <p className="ppara">
          All content on FakeShop, including logos, text, images, and graphics,
          is the property of FakeShop and protected by copyright and other
          intellectual property laws. You may not use, reproduce, or distribute
          any content from FakeShop without our prior written permission.
        </p>
      </section>
      <section className="psection">
        <h2 className="pheader">Limitation of Liability</h2>
        <p className="ppara">
          FakeShop shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising out of your use of our
          website or services.
        </p>
      </section>
      <section className="psection">
        <h2 className="pheader">Governing Law</h2>
        <p className="ppara">
          These terms and conditions are governed by and construed in accordance
          with the laws of Malaysia. Any disputes shall be resolved in the
          courts of Malaysia. This is fake, The purpose for this for dummy
          project shopping cart. No link bank or transaction will be display
          here!
        </p>
      </section>
    </Layout>
  );
};

export default policy;
