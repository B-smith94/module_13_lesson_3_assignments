// Assignment 1, Task 1
import React, { useState } from 'react';

interface MyComponentState {
    count: number | null;
}

const Counter: React.FC = () => {
    const [countState, setCountState] = useState<MyComponentState>({ count: 0} as MyComponentState);
    

    const incrementCount = () => {
        setCountState((prevState) => ({
            ...prevState,
            count: (prevState.count || 0) + 1,
        }));
    };

    const decrementCount = () => {
        setCountState((prevState) => ({
            ...prevState,
            count: (prevState.count || 0) - 1,
        }));
    };

    const resetCount = () => {
        setCountState({ count: 0 });
    }

    return (
        <div>
            <p>Current Count: {countState.count === null ? 'null' : countState.count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset Count</button>
        </div>
    )
}

export default Counter;