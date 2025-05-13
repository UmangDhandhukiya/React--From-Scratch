import React from "react";
import ReactDOM from "react-dom/client";

// pure react element

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am fullstack dev"),
//     React.createElement("h2", {}, "i am h2"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am h1"),
//     React.createElement("h2", {}, "i am h2"),
//   ]),
// ]);

// React Element using Jsx

// const heading = <h1 className="head">Hello World</h1>;

// console.log(heading); // it is same as React Element

//React functional Component

const HelloMsg1 = () => <h1>Both are same</h1>;

const HelloMsg2 = () => {
  return <h1>Hello Msg</h1>;
};

const number = 10000;

const HelloMsg3 = () => (
  <div id="head">
    <HelloMsg1 />
    <HelloMsg2 />
    <h2>{number}</h2>
    <h1>This is also simillar</h1>
  </div>
);

// const text = React.createElement("h1", { id: "heading" }, "Hello React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HelloMsg3 />);
