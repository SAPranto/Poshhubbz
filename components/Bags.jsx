import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Bags = ({ bag: { image, name, slug, price } }) => {
    return (
      <div>
        <Link href={`/bag/${slug.current}`}>
          <div className="bag-card">
            <img 
              src={urlFor(image && image[0])}
              alt="PoshHubz Shoe"
              width={250}
              height={250}
              className="product-image"
            />
            <p className="product-name">{name}</p>
            <p className="product-price">৳{price}</p>
          </div>
        </Link>
      </div>
    )
  }

export default Bags