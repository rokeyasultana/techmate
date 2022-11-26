import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    
    const{_id,name,img} = product;
    return (
        <div className= ' mt-5  mb-5'>
        <div  class="  card w-96 hover:text-black  shadow-xl items-center">
  <figure><img style={{width:'500px',height:'300px'}}  src={img}alt="perfume" /></figure>
  <div class="card-body ">
    <h2 class="text-center text-blue-500 text-2xl font-bold">{name}</h2>
    <Link to={`/products/${_id}`} class="card-actions justify-end">
      <button 
      class="btn btn-outline  ">All products</button>
    </Link>
  </div>
</div>
   </div>
    );
};

export default Product;