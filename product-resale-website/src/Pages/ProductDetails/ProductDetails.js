import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Details from './Details';

const ProductDetails = () => {

const categories= useLoaderData().category;
// console.log(categories);

const [product,setProduct] = useState(null);



    return (
        <div >

      <div className='justify-center justify-items-center grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1'>
      {
            categories.map(category=>
            <Details
            key={category.id}
            category={category}
            setProduct={setProduct}
            >
            </Details>)
        }   
      </div>
      {
        product  &&
        <BookingModal
      product={product}
      setProduct={setProduct}>
        
      </BookingModal>}
    </div>

    );
};

export default ProductDetails;