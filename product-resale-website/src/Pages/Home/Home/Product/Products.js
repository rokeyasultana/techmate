import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
   
    
const {data:products = []} = useQuery({
    queryKey:['products'],
    queryFn: () =>
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
    
})


    
    return (
        <div>
            <div>
          <h2 className=' text-6xl  text-center  font-sans  mt-7'>Products</h2>
            <div  className='justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5  gap-4 '>
                {
                   products.map(product =><Product
                   key={product._id}
                   product={product}

                   ></Product>)
                }
            </div>
           
        </div> 
        </div>
    );
};

export default Products;