import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div   >
          <div id='blog' className=' h-80 mb-20'>
          <h2 id='blogH2' className= 'flex justify-center text-7xl text-center text-white'>Our Blog</h2>
            </div>  
           

            <div >
                <div className='justify-center justify-items-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-[-130px] bg-slate-50 ml-28 mr-28 mb-28'>
                <div class="card w-96 ">
  <figure><img src="" alt="" /></figure>
  <div class="card-body">
    <h2 class="text-left text-xl font-semibold"> What are the different ways to manage a state in a React application?</h2>
    <p className='text-left'>There are different ways to manage a state a React Application. Here are ways:<br></br>

    Managing state is arguably the toughest a part of any application There are 4 major kinds of state you will need to manage to your React apps: Local state Global state Serverstate URL state Local (UI) state – Local state is information we manage in a single or any other component. Global (UI) state – Global state is information we manipulate throughout a couple of components. Server state – Data that comes from an outside server that have to be incorporated with our UI country. Server state is an easy concept, however may be tough to manipulate along all of our neighborhood and worldwide UI country. URL state– Data that exists on our URLs, consisting of the pathname and question parameters.
    </p>
   
  </div>
</div>
                <div class="card w-96 ">
  <figure><img src="" alt="" /></figure>
  <div class="card-body">
    <h2 class="text-left text-xl font-semibold">How does prototypical inheritance work?</h2>
    <p className='text-left'>JavaScript prototype inheritance is mechanism that allows us to create new classes on the basis of already existing classes.<br></br>
    *To reuse the methods is used in class expressions.
*To reuse the methods and variables.
*Extends keyword is used in class expressions.
*To acquire all the properties and behavior.
*Prototype based approach to achieve inheritance.
    
    </p>
   
  </div>
</div>
                <div class="card w-96 ">
  <figure><img src="" alt="" /></figure>
  <div class="card-body">
    <h2 class="text-left text-xl font-semibold"></h2>
    <p></p>
   
  </div>
</div>
                <div class="card w-96 ">
  <figure><img src="" alt="" /></figure>
  <div class="card-body">
    <h2 class="text-left text-xl font-semibold"> </h2>
    <p></p>
   
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Blog;