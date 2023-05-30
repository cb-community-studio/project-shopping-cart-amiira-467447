import React from "react";
import Layout from "./../components/Layout/layout";
const faqs = () => {
  return (
    <Layout class="faqsfullbody"  title={"FAQs FakeShop"}>
      <h1 className="nameheader">Frequently Asked Questions</h1>

      <div class="faqs">
        <h3 class="faqsheader"> 
          Q: How long does it take to process and ship orders from FakeShop?
        </h3>
        <p class="faqspara">
          A: At FakeShop, we strive to process and ship orders as quickly as
          possible. Typically, orders are processed within 1-2 business days.
          Shipping times may vary depending on the destination and shipping
          method chosen during checkout. You can track your order's progress
          through our website or contact our customer support for more
          information.
        </p>
      </div>

      <div class="faqs">
        <h3 class="faqsheader">Q: What payment methods are accepted at FakeShop?</h3>
        <p class="faqspara">
          A: FakeShop accepts a variety of payment methods to provide
          convenience and flexibility to our customers. We currently accept
          major credit cards, such as Visa, Mastercard, and American Express.
          Additionally, we also support popular online payment platforms like
          PayPal for a seamless checkout experience.
        </p>
      </div>

      <div class="faqs">
        <h3 class="faqsheader">Q: Are there any discounts or promotions available at FakeShop?</h3>
        <p class="faqspara">
          A: Absolutely! At FakeShop, we frequently offer exciting discounts and
          promotions on selected products. We encourage you to check our website
          regularly or subscribe to our newsletter to stay updated on the latest
          deals. Keep an eye out for seasonal sales, special promotions, and
          exclusive discounts to make the most of your shopping experience with
          FakeShop.
        </p>
      </div>

      <div class="faqs">
        <h3 class="faqsheader">Q: What is FakeShop's return policy?</h3>
        <p class="faqspara">
          A: We want you to be completely satisfied with your purchase from
          FakeShop. If, for any reason, you are not happy with your order, we
          offer a hassle-free return policy. Please reach out to our customer
          support within 30 days of receiving your order to initiate the return
          process. We will provide you with instructions on how to return the
          item and arrange for a refund or exchange, depending on your
          preference.
        </p>
      </div>
    </Layout>
  );
};

export default faqs;
