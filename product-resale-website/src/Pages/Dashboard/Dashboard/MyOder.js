import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOder = () => {
    const { user} = useContext(AuthContext);
    const {data: bookings = []} = useQuery({
        queryKey:['bookings',user?.email],
        queryFn: async()=> {
            const res = await fetch(`http://localhost:5000/bookings?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <div>
                <h2 className='text-5xl text-center font-semibold mt-9 mb-9 text-blue-400'>My Orders</h2>
            </div>
         <table className="table w-full">
    <thead>
      <tr className='text-black bg-blue-400'>
      
      <th></th>
        <th>Product</th>
        <th>Price</th>
        <th>Pay</th>
        
      </tr>
    </thead>
    <tbody className='bg-blue-500'>
      {
  bookings.map((booking, i) =><tr key={booking._id}>
            <th>{i+1}</th>
            <td>{booking.product}</td>
            <td>{booking.resalePrice}</td>
    
            <td><button className="btn btn-outline  text-black btn-sm">Pay</button></td>
           
          
          </tr>)
      }
      
    </tbody>
  </table> 
        </div>
    );
};

export default MyOder;