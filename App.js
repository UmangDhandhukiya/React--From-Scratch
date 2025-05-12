const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1"),
    React.createElement("h2", {}, "i am h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1"),
    React.createElement("h2", {}, "i am h2"),
  ]),
]);

// const text = React.createElement("h1", { id: "heading" }, "Hello React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
