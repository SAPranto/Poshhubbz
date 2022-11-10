import React from "react";
import { Product, Bags} from '../components';
import { client } from '../lib/client';


const bags = ({ products }) => {
  return (
    <div>
      
    <div className="products-heading">
      <h2>PoshHubz Bags Collection</h2>
      <p>Premium Quality Shoes</p>
    </div>

    <div className="products-page">
    {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

  </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "bag"]';
  const products = await client.fetch(query);

  return {
    props: { products}
  }
}

export default bags;
