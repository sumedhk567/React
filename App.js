const parentDiv = React.createElement(
    'div',{id:'parent'},
    [
        React.createElement(
            'div', {id:'child'},
            [React.createElement(
                'h1',
                {id:'heading'},
                `Think Before doing any thing.These activity will meet your criteria ?
                These think will enhance your knowledge ? These work is releted your knowledge ?`
            ),
            React.createElement('h1',{id:'heading2'},
                `When your body say sleep, don't sleep at afternoon Do code or write explanation(information).`
            ),]),
            React.createElement(
                'div', {id:'child2'},
                React.createElement(
                    'h1',
                    {id:'heading'},
                    `Observe More and more.`
                ),
               
            )]
)

const root = ReactDOM.createRoot(document.getElementById('container-fluid'))

root.render(parentDiv)

console.log(root)