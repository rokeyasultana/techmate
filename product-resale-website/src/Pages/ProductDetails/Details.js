import React from 'react';

const Details = ({category}) => {
 
  console.log(category);
  const {id,model,img,resalePrice,originalPrice,details,used,seller,location,postedTime} = category;
    return (
        <div>
       <div class="card w-full bg-base-100 ">
  <figure class="px-10 pt-10">
    <img style={{width:'250px'}} src={img} alt="" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{model}</h2>
    <div className="badge badge-secondary">$ {resalePrice}</div>
    <p><span className='font-bold'>Details:</span> {details}</p>
    <p>Original-price : {originalPrice} </p>
    <p>Used : {used}</p>
    <p>Seller: {seller}</p>
    <p>
      Location: {location}
    </p>
    <p>
      Posted Time: {postedTime}
    </p>
   
    <div class="card-actions">
      <button class="btn btn-outline">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;