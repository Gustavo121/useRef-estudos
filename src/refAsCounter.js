import { useRef } from 'react';

export default function RefAsCounter() {
    const counterRef = useRef(0);

    function increaseCounter() {
        counterRef.current = counterRef.current + 1;
    }

    function showCounter() {     
        alert('O botão foi clicado: ' + counterRef.current + ' vezes.');
    }

    

    return (
        <div>
            <h1>useRef como uma alternativa ao useState</h1>
            <button onClick={increaseCounter}>Clicar</button>
            &nbsp;
            <button onClick={showCounter}>Mostrar quantas vezes o botão foi clicado</button>
        </div>
    );
}



/*
Exemplo com useState

import { useState } from 'react';

export default function RefAsCounter() {
    const [counter, setCounter] = useState(0);

    function increaseCounter() {
        setCounter(counter + 1);
    }

    function showCounter() {     
        alert('O botão foi clicado: ' + counter + ' vezes.');
    }

    

    return (
        <div>
            <h1>useRef como uma alternativa ao useState</h1>
            <button onClick={increaseCounter}>Clicar</button>
            &nbsp;
            <button onClick={showCounter}>Mostrar quantas vezes o botão foi clicado</button>
        </div>
    );
}
*/