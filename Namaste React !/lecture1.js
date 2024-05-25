const head=React.createElement(
    "h1",
    {
        id:"title"
    },
    "Heading 1");

    const head2=React.createElement
    ("h2",
    {
        id:"title"
    },
    "Heading 2");
    
    const container=React.createElement(
    "div",
    {
        id:"container"
    },
    [head,head2]);

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(container);
