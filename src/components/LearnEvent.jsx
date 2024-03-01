
export const LearnEvent = () => {
    const handleClick1=(e)=>{
        e.preventDefault()
        console.log("Button Clicked")
    }
    const handleClick2=(myid)=>{
        console.log("Button Clicked 2",myid)
    }
  return (
    <>
    {/* Without Argument */}
    <button onClick={handleClick1}>Click 1</button>
    {/* With Argument */}
    <button onClick={(e)=>handleClick2("MyID is 2")}>Click 2</button>
    </>
  )
}
