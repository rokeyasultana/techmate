import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../../contexts/AuthProvider/AuthProvider'
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
  
    const onSubmit = data => {
        // console.log(data);
        const url = ``;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
             
                reset()
            })
    };
    
    return (
        <div>
             <div>
                <h2 className='text-5xl text-center font-semibold mt-9 mb-9 text-blue-400'>Add Products</h2>
            </div>
            <div className='w-50  mt-5 mb-5 '>
        
        <div class="flex mx-auto card w-96 bg-base-100 shadow-xl ">
  <div class="card-body">
  <h2 className='text-center text-black text-3xl mb-5'>Please add a Items</h2>

    <form className='flex-auto' onSubmit={handleSubmit(onSubmit)}>
           
           <input type="text" placeholder="Product Name"  value='' {...register("email")}  class="input input-bordered  w-full max-w-xs mb-2" />

           <input type="text" placeholder="Photo url" class="input input-bordered  w-full max-w-xs mb-2" {...register("img")}  />

           <input type="text" placeholder="Category" class="input input-bordered  w-full max-w-xs mb-2"{...register("Category")} />

           <textarea type="text" class="textarea textarea-black  w-full max-w-xs mb-2" placeholder="Details" {...register("details")}/>
         
           <input type="text" placeholder="Original-Price" class="input input-bordered w-full max-w-xs mb-2"{...register("originalPrice")}/>

           <input type="text"  placeholder="Resale-Price" class="input input-bordered  w-full max-w-xs mb-2" {...register("resalePrice")} />

           <input type="text"  placeholder="Phone-Number" class="input input-bordered  w-full max-w-xs mb-2" {...register("phone")} />

           <input type="text"  placeholder="Location" class="input input-bordered  w-full max-w-xs mb-2" {...register("location")} />
           <input type="text"  placeholder="Used Time" class="input input-bordered  w-full max-w-xs mb-2" {...register("used")} />

   

           

        
           
          
       </form>
    <div class=" text-center">
      <button type="submit" class="btn btn-outline">Add Product</button>
    </div>
  </div>
</div>
   
    </div>
        </div>
    );
};

export default AddProduct;