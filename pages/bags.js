import React from "react";
import { Product } from '../components';
import { client } from '../lib/client';


const bags = ({ bagdata }) => {
  return (
    <div>
      
    <div className="products-heading">
      <h2>PoshHubz Bags Collection</h2>
      <p>Premium Quality Shoes</p>
    </div>

    <div className="products-page">
    {bagdata?.map((product) => <Product key={product._id} product={product} />)}
    </div>

  </div>
  )
}

export const getServerSideProps = async () => {
  const bagquery = '*[_type == "bag"]';
  const bagdata = await client.fetch(bagquery);

  return {
    props: { bagdata }
  }
}

export default bags;
