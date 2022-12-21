import React from 'react';
import Brand from './Brand/Brand';
import PeopleQuery from './PeopleQuery/PeopleQuery';
import Products from './Product/Products';
import Slider from './Slider/Slider';


const Home = () => {
    return (
        <div>
      <Slider></Slider>
      <Products></Products>
      <Brand></Brand>
      <PeopleQuery></PeopleQuery>
        </div>
    );
};

export default Home;