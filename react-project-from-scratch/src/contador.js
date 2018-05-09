
let count = 0;

const addOne = () => {
     count++;
     renderContador(count)
};

const minusOne = () => {
     count--;
     renderContador(count)
};

const reset = () => {
    count = 0;
    renderContador(count)
};


const renderContador = () =>{
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>  
)

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot)
}

renderContador()