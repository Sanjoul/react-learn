import { useState, useMemo } from "react"

export const LearnUseMemo = () => {
    const [count,setCount]=useState(0)
    const handleIncreaseCount=()=>{
        console.log("Increase Count Fucntion");
        setCount(count +1)
    }
    const[randomNumber,setRandomNumber]=useState(null);

    const generateRandomNumber = ()=>{
        const newRandomNumber = Math.floor(Math.random()*100)+1;
        console.log("Generate Random number function");
        setRandomNumber(newRandomNumber);
    }
    // const isCountTen=()=>{
    //     console.log("isCountTen Called")
    //     if(count ===10){
    //         return "yes"
    //     }
    //     return "No"
    // }
    //useMemo is used for managing cache data 
    const isCountTen = useMemo(()=>{
        console.log("isCountTen Called")
        if(count ===10){
            return "yes"
        }
        return "No"
    },[count])

  return (
    <>
    <h1>Is {count} equal to 10 ? ---- {isCountTen}</h1>
    <button onClick={handleIncreaseCount}> Increase Count</button>
    <hr />
    <h2>Random Number: {randomNumber}</h2>
    <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
}
