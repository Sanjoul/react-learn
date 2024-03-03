//Memo is a higher-order component(HOC) that memoizes the rendering of a function component.
//Higher-order components (HOCs) are a powerful feature of the React library. They allow you to reuse component logic across multiple components. In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.
//It prevent the functional component from re-rendering if its props haven't changed.
//IT's particularly useful when you have componentts that are rendering with the same props but don't need to update when those props change
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