import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ALLSellers = () => {

const {data: sellers = []} =useQuery({
    queryKey:['sellers'],
    queryFn: async()=>{
        const res = await fetch('https://products-resale-website-server.vercel.app/seller')
        const data = await res.json();
        
        return data;
    }
})


    return (
        <div>
           <div>
                <h2 className='text-5xl text-center font-semibold mt-9 mb-9 text-blue-400'>All Sellers</h2>
            </div>
           <table className="table w-full">
    <thead>
      <tr>
      
      <th></th>
        <th>Name</th>
       <th>Email</th> 
       <th>Verify</th> 
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
      {
        sellers.map((seller, i) =><tr key={seller._id}>
            <th>{i+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>
            <button  className='btn btn-xs btn-outline  btn-success'>Verify</button>
            </td>
            <td><button  className='btn btn-xs btn-outline  btn-error'>Delete</button></td>
          
          </tr>)
      }
      
    </tbody>
  </table> 
        </div>
    );
};

export default ALLSellers;