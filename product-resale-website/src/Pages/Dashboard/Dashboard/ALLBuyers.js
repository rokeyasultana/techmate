import { useQuery } from '@tanstack/react-query';
import React from 'react';


const ALLBuyers = () => {

const {data: buyers = []} = useQuery({
    queryKey:['buyers'],
    queryFn: async()=>{
        const res = await fetch('http://localhost:5000/buyer')
        const data = await res.json();
        return data;
    }
})
const handleDelete = (buyers) =>{
  fetch('http://localhost:5000/buyer',{
    method: "DELETE",
    headers:{
      "content-type": 'application/json'
    }
  })
  .then(res => res.json())
  .then((data)=>{
    console.log(data);
    alert('delete successfully')
  })
}




    return (
        <div>
          <div>
                <h2 className='text-5xl text-center font-semibold mt-9 mb-9 text-blue-400'>All Buyers</h2>
            </div>
               <table className="table w-full">
    <thead>
      <tr>
      
      <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
      {
      buyers.map((buyer, i) =><tr key={buyer._id}>
            <th>{i+1}</th>
            <td>{buyer.name}</td>
            <td>{buyer.email}</td>
            <td><button onClick={()=>handleDelete()} className='btn btn-xs btn-outline  btn-error'>Delete</button></td>
      
          </tr>)
      }
      
    </tbody>
  </table> 
        </div>
    );
};

export default ALLBuyers;