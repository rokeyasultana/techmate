import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from './Details';

const ProductDetails = () => {

const categories= useLoaderData().category;
console.log(categories);



    return (
        <div className='justify-center justify-items-center grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1'>
{/* <h2>{categories.length}</h2> */}

        {
            categories.map(category=>
            <Details
            key={category.id}
            category={category}
            >


            </Details>)
        }   
    </div>
    );
};

export default ProductDetails;