//This component is acting like parent component for GenerateRandomNumber
//If parent re-render it is not necessary to render child
import { useCallback,useState } from "react";
import { GenerateRandomNumber } from "./GenerateRandomNumber";

export const LearnUseCallback = () => {
    const [count,setCount]=useState(0)
    const handleIncreaseCount = () =>{
        setCount((prevCount)=>prevCount +1)
    }
    const[randomNumber,setRandomNumber]=useState(0);
    const generateRandomNumber =()=>{
        const newRandomNumber = Math.floor(Math.random()*100)+1;
        setRandomNumber(newRandomNumber);
    }
    return (
    <>
    <GenerateRandomNumber randomNumber={randomNumber} generateRandomNumber={generateRandomNumber}/>
    <h1>Count: {count}</h1>
    <button onClick={handleIncreaseCount}>Increase Count</button>
    </>
  )
}
