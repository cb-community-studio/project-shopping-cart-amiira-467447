import React from "react";
import Layout from "./../components/Layout/layout";
import { useAuth } from "../context/auth";


const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"FakeShop Big sale with best offer "}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>

         <h2>HomePage</h2>
       <div className="product-list">
         <div className="product">
           <h3>Product 1</h3>
           <p>Price: RM19.99</p>
           <button>Add to Cart</button>
         </div>
         <div className="product">
           <h3>Product 2</h3>
           <p>Price: RM14.99</p>
           <button>Add to Cart</button>
         </div>
         <div className="product">
           <h3>Product 3</h3>
           <p>Price: RM9.99</p>
          <button>Add to Cart</button>
         </div>
       </div>

    </Layout>


  );
};


export default HomePage;
