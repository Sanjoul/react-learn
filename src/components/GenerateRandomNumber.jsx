import {memo} from "react"

export const GenerateRandomNumber = memo(({
    randomNumber, generateRandomNumber
})=>{
    console.log("Generate Random Number Component rendered");
    return(
        <>
        <h2>Random Number : {randomNumber}</h2>
        <button onClick={generateRandomNumber}> Generate Randome Number</button>
        </>
    )
})  