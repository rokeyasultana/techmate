import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [],refetch}= useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await  fetch('https://products-resale-website-server.vercel.app/users');
            const data = await res.json();
        
            return data;
        }
    }) 
    const handleMakeAdmin = id => {
       console.log(id);
    }
    return (
        <div>
         <div>
            <h2 className='text-5xl text-center font-semibold mt-9 mb-9 text-blue-400'>All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
         <button  
                
                onClick={()=> handleMakeAdmin(user._id)}
                className='btn btn-xs btn-outline  btn-success'>Make Admin</button>
               
                
                </td>
            <td><button  className='btn btn-xs btn-outline  btn-error'>Delete</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
<Toaster/>
        </div>
        </div>
    );
};

export default AllUsers;