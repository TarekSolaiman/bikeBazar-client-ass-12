import React from "react";
import useTitle from "../../hooks/useTitle";

const Bloge = () => {
  useTitle("Blog");
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">Blog page</h1>
      <div className="w-3/4 mx-auto p-5 rounded-xl shadow-xl my-10">
        <h2 className="text-xl font-bold my-5">
          1 . What are the different ways to manage a state in a React
          application?
        </h2>
        <p className="text-md">
          Beau Carnes. React state management is a process for managing the data
          that React components need in order to render themselves.
        </p>
        <p>The Four Kinds of React State to Manage :</p>
        <ul>
          <li>Local state.</li>
          <li>Global state.</li>
          <li>Server state.</li>
          <li>URL state.</li>
        </ul>
      </div>
      <div className="w-3/4 mx-auto p-5 rounded-xl shadow-xl my-10">
        <h2 className="text-xl font-bold my-5">
          2 . How does prototypical inheritance work?
        </h2>
        <p className="text-md">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the Prototype of an object, we
          use Object. getPrototypeOf and Object
        </p>
      </div>
      <div className="w-3/4 mx-auto p-5 rounded-xl shadow-xl my-10">
        <h2 className="text-xl font-bold my-5">
          3 . What is a unit test? Why should we write unit tests?
        </h2>
        <p className="text-md">
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
      </div>
      <div className="w-3/4 mx-auto p-5 rounded-xl shadow-xl my-10">
        <h2 className="text-xl font-bold my-5">
          4 . React vs. Angular vs. Vue?
        </h2>
        <p className="font-semibold">AngularJS</p>
        <p className="text-md">
          {" "}
          was developed in 2009 by Google. The first version was Angular.JS.
          Angular is currently known as a JavaScript framework. Obviously, all
          significant Google projects have been developed with Angular.
        </p>
        <p className="font-semibold">React.js</p>
        <p className="text-md">
          Facebook released in March 2013 as a JavaScript library. Because React
          just provides one view, it is not appropriate for building an MVC
          architecture: you must solve the model and controller yourself.
          Besides this, there are only advantages and lots of advantages.
        </p>
        <p className="font-semibold">Vue.js</p>
        <p className="text-md">
          {" "}
          is a JavaScript-based progressive framework for creating single-page
          applications. It was created with scalability and incrementality in
          mind, as well as ease of integration with other view layer frameworks.
        </p>
      </div>
    </div>
  );
};

export default Bloge;
