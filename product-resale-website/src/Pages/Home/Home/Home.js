import React from 'react';
import Brand from './Brand/Brand';
import Products from './Product/Products';
import Slider from './Slider/Slider';


const Home = () => {
    return (
        <div>
      <Slider></Slider>
      <Products></Products>
      <Brand></Brand>
        </div>
    );
};

export default Home;