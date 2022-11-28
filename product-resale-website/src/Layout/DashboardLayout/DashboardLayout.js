import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Pages/Home/Home/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)

    const [isAdmin]= useAdmin(user?.email)


    return (
        <div>
                <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
<Outlet></Outlet>
    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     





<Link  className='mb-5 font-bold text-blue-500' to= '/dashboard/allUsers'>All Users</Link>

  <Link  className='mb-5 font-bold text-blue-500' to= '/dashboard/addProduct'>Add Product</Link>
{
  isAdmin && <>
<Link  className='mb-5 font-bold text-blue-500'  to='/dashboard/seller'>All Seller</Link> 
  <Link className='mb-5 font-bold text-blue-500' to='/dashboard/buyer'>All Buyers</Link>
  
  </>
}


    </ul>
  
  </div>
</div>
    </div>
        </div>
    );
};

export default DashboardLayout;