import React from 'react';

const Brand = () => {
    return (
        <div>
            <h2 className='text-left text-3xl font-bold mt-20 mb-6 ml-36 mr-28'>Laptop Brands for you </h2>
           <div className='justify-center justify-items-center grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-3 ml-28 mr-28 mb-10'>
            
            <div>
<img className='border-2 drop-shadow' style={{height: '100px'}} src="https://assets.swap.com.bd/brand/c4ca4238a0b923820dcc509a6f75849b/logo/iphone_logo.png" alt="apple" />
            </div>
            <div>
<img className='border-2 drop-shadow' style={{height: '100px'}}  src="https://assets.swap.com.bd/brand/4e732ced3463d06de0ca9a15b6153677/logo/acer-logo.png" alt="acer" />
            </div>
            <div>
<img  className='border-2 drop-shadow' style={{height: '100px'}}  src="https://assets.swap.com.bd/brand/6ea9ab1baa0efb9e19094440c317e21b/logo/hp-logo.png" alt="asus" />
            </div>
            <div>
<img className='border-2 drop-shadow' style={{height: '100px'}}  src="https://assets.swap.com.bd/brand/33e75ff09dd601bbe69f351039152189/logo/Dell-Logo.png" alt="dell" />
            </div>
            <div>
<img className='border-2 drop-shadow' style={{height: '100px'}}  src="https://assets.swap.com.bd/brand/34173cb38f07f89ddbebc2ac9128303f/logo/lenovo-logo.png" alt="lenovo" />
            </div>

            <div>
<img className='border-2 drop-shadow' style={{height: '100px'}}  src="https://assets.swap.com.bd/brand/6364d3f0f495b6ab9dcf8d3b5c6e0b01/logo/microsoft-logo.png" alt="microsoft" />
            </div>
            <div>
<img  className='border-2 drop-shadow' style={{height: '100px'}} src="https://assets.swap.com.bd/brand/35f4a8d465e6e1edc05f3d8ab658c551/logo/Others%20Logo.png" alt="others" />
            </div>
            
            </div> 
        </div>
    );
};

export default Brand;