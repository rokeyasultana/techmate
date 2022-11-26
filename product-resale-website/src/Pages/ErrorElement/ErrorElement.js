import React from 'react';

const ErrorElement = () => {
    return (
        <div>
                  <div><h2 className='text-5xl text-center font-semibold mt-10 '>Page Not Found</h2>
           <h3 className='text-5xl text-center text-error mt-5'>404</h3></div> 
            <img  style={{width:"600px"}}  className='mt-20  rounded mx-auto d-block  'src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-Yeti-404-Page.gif" alt="" />
        </div>
    );
};

export default ErrorElement;