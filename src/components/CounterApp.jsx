import React, { useState } from 'react'

export const CounterApp = () => {
    const [count,setCount] = useState(0)
    const counterHandle=()=>{
        // setCount(count +1);
        setCount((prevCount)=>prevCount+1)
    }

    const reset=()=>{
        setCount(0);

    }
  return (
    <>
    <h1>Counter App: {count}</h1>
    <button onClick={counterHandle}>Increase Count</button>
    <button onClick={reset}>Reset Count</button>
    </>
    )
}
