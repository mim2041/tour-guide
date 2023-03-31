import React from 'react';
import './Answers.css'

const Answers = () => {
    return (
        <div className='answers'>
            <h2>1. Difference between State and Props</h2>
            <table>
            <tr>
                <th>State</th>
                <th>Props</th>
            </tr>
            <tr>
                <td>State is mutable and it's value can change as per requirement.</td>
                <td>Props are immutable, their content can not be changed once assigned.</td>
            </tr>
            <tr>
                <td>State is set by it's parent component.</td>
                <td>Props are set by event handlers that is the are completely managed by component itself.</td>
            </tr>
            <tr>
                <td>State is local to a component and can not be used in other component.</td>
                <td>Props allows child component to read values from parent component.</td>
            </tr>
            <tr>
                <td>State changes can be asynchronous.</td>
                <td>Props are read-only.</td>
            </tr>
            <tr>
                <td>Stateless components can not have state.</td>
                <td>Stateless compoenets can have props.</td>
            </tr>
            <tr>
                <td>State cannot make components reusable.</td>
                <td>Props make components reusable.</td>
            </tr>
            </table>

            <h2>2. How useEffect work?</h2>
            <p>In React, useEffect is a built-in hook that allows us to perform side effects in functional components. Side effects include things like fetching data, subscribing to events, or updating the DOM, which are not part of the component's primary logic, but rather external interactions with the environment.</p>

            <p>The useEffect hook takes two parameters: a callback function that defines the side effect, and an optional array of dependencies that specify when the side effect should be re-executed.</p>

            <p>The callback function passed to useEffect is executed after every render of the component, unless the array of dependencies is provided and none of the dependencies have changed between renders. If the array is empty, the effect is only executed once when the component is mounted and again when it is unmounted.</p>

            <h2>3. What else can useEffect do other than data load?</h2>
            <p>The useEffect hook in React can be used for a wide variety of purposes beyond just data loading. Here are a few examples:</p>
            <ol type='1'>
                <li>The useEffect hook is used to update the document title whenever a component mounts or updates. This is useful for displaying dynamic information in the title of the page, such as the name of the current user.</li>
                
                <li>The useEffect hook is also used to attach and detach event listeners when a component mounts and unmounts, respectively. This is useful for handling user input, such as click events.</li>

                <li>It is used to start and stop timers when a component mounts and unmounts, respectively. This is useful for implementing animations or other time-based behaviors.</li>

                <li>useEffect hook is also used to interact with external libraries or APIs, such as Google Maps or Stripe. This is useful for integrating third-party services into your application.</li>
            </ol>

            <h2>4. How does react work?</h2>
            <p>React is a JavaScript library that allows us to build user interfaces (UIs) using a declarative approach. In React, we define our UI as a tree of components, with each component encapsulating a piece of UI functionality. Each component can have its own state, which can be updated using a setState method, and can also receive data through props.</p>

            <p>When we render a React component, React builds a virtual representation of the UI called the Virtual DOM. The Virtual DOM is a lightweight copy of the actual DOM, with the same structure and properties as the actual DOM. React then compares the Virtual DOM to the previous version of the Virtual DOM to determine what changes need to be made to the actual DOM to update the UI. Once React has determined the necessary changes, it updates the actual DOM with the minimum amount of changes necessary to bring it in line with the Virtual DOM.</p>

            <p>Overall, React is a powerful tool for building complex UIs in a performant and maintainable way, and its popularity has made it a standard in modern web development.</p>
            
        </div>
    );
};

export default Answers;