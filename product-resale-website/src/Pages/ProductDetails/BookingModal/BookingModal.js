import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const BookingModal = ({product,setProduct}) => {

    const {user} = useContext(AuthContext);


console.log(product.model);

const {model,resalePrice} =product;
const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
        product: model,
        resalePrice:resalePrice,
        buyer:name,
        email,
        phone,
        location
    }
   
    fetch('https://products-resale-website-server.vercel.app/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                setProduct(null);
                toast.success('Booking confirmed');
          
            }
            else{
                toast.error(data.message);
            }
        })

}

    return (
        <>
         <input type="checkbox" id="my-booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{model}</h3>
                    <h3 className="text-lg font-bold">Price: $ {resalePrice}</h3>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                   
                       
                        <input name="name" type="text"
                       placeholder="Your Name" 
                       defaultValue={user?.displayName} disabled
                       className="input w-full input-bordered" />
                        <input name="email" type="email"
                 defaultValue={user?.email} disabled
                    placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-success w-full' type="submit" value="Submit" />
                    </form>
                </div>
                <Toaster/>
            </div>
        </>
    );
};

export default BookingModal;