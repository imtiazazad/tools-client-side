import React from 'react';

const Blogs = () => {
    return (
        <div className='p-10'>
            <h3 className='mt-10 text-xl'>1. How will you improve the performance of a React Application?</h3>
            <p>During the initial rendering process, React builds a DOM tree of components. So, when data changes in the DOM tree, we want React to re-render only those components that were affected by the change, skipping the other components in the tree that were not affected. However, React could end up re-rendering all components in the DOM tree, even though not all are affected. This will result in longer loading time, wasted time, and even wasted CPU resources. We need to prevent this from happening. So, this is where we will focus our optimization effort. while we’re still in development mode, we can use the “Performance” tab in the Chrome browser to visualize how React components mount, update, and unmount. For example, the image below shows Chrome’s “Performance” tab profiling and analyzing my blog in development mode.</p>

            <h3 className='mt-10 text-xl'>2. What are the different ways to manage a state in a React application?</h3>
            <p>The different ways to manage a state in a React application, the built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of: Hooks, React Context API, Apollo Link State.</p>

            <h3 className='mt-10 text-xl'>How does prototypical inheritance work?</h3>
            <p>We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>

            <h3 className='mt-10 text-xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
            <p>I could not change the update we made.</p>

            <h3>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
            <p></p>

            <h3 className='mt-10 text-xl'>What is a unit test? Why should write unit tests?</h3>
            <p>Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests. If the test relies on an external system, it is not a Unit Test. Unit Tests should be written during the design phase, prior to implementation to prevent defects from being deployed to production. They should be run every time the code is changed and provide a clear description of the feature being tested.</p>
        </div>
    );
};

export default Blogs;