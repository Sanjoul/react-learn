export const LiftingStateUp = (props) => {
    const handleClick=(e)=>{ 
        e.preventDefault();
        let data="This is data" 
        props.myClick(data)
     }
  return (
    <>
    <button onClick={handleClick}>Click 1</button>
    </>
  )
}

//Props is for sending data from parent to child components but in this case it is reverse data is sent from child to 