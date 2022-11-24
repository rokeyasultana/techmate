import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div   >
          <div id='blog' className=' h-80 mb-20'>
          <h2 id='blogH2' className= 'flex justify-center text-7xl text-center text-white'>Our Blog</h2>
            </div>  
           

            <div >
                <div className='justify-center justify-items-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-[-130px] bg-slate-50 ml-16 mr-16 mb-28'>
                
                <div class="card w-96 mt-5">

  <div class="card-body">
    <h2 class="text-left text-xl font-semibold"> What are the different ways to manage a state in a React application?</h2>
    <p className='text-left'>There are different ways to manage a state a React Application. Here are ways:<br></br>

    Managing state is arguably the toughest a part of any application There are 4 major kinds of state you will need to manage to your React apps: Local state Global state Serverstate URL state Local (UI) state – Local state is information we manage in a single or any other component. Global (UI) state – Global state is information we manipulate throughout a couple of components. Server state – Data that comes from an outside server that have to be incorporated with our UI country. Server state is an easy concept, however may be tough to manipulate along all of our neighborhood and worldwide UI country. URL state– Data that exists on our URLs, consisting of the pathname and question parameters.
    </p>
   
  </div>
</div>
                <div class="card w-96 mt-5">

  <div class="card-body">
    <h2 class="text-left text-xl font-semibold">How does prototypical inheritance work?</h2>
    <p className='text-left'>JavaScript prototype inheritance is mechanism that allows us to create new classes on the basis of already existing classes.<br></br>
    * To reuse the methods is used in class expressions.<br></br>
* To reuse the methods and variables.<br></br>
* Extends keyword is used in class expressions.<br></br>
* To acquire all the properties and behavior.<br></br>
* Prototype based approach to achieve inheritance.<br></br>
    
    </p>
   
  </div>
</div>
                <div class="card w-96 ">
 
  <div class="card-body">
    <h2 class="text-left text-xl font-semibold">What is a unit test? Why should we write unit tests?</h2>
    <p className='text-left'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.<br></br>
    For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.
    </p>
   
  </div>
</div>
                <div class="card w-96 ">
  
  <div class="card-body">
    <h2 class="text-left text-xl font-semibold">  React vs. Angular vs. Vue?</h2>
    <p>

    </p>
   
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Blog;