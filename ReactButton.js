function ReactButton() {
    const [count, setCount] = React.useState(0);

    return React.createElement(
        'button',
        {
            onClick: () => setCount(count + 1),
        },
        'Times Clicked: ',
        count
    );
}

const container = document.querySelector('#react');

const root = ReactDOM.createRoot(container);
root.render(React.createElement(ReactButton));
