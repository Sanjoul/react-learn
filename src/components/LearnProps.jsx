
// export const LearnProps = ({name,roll}) => {
//   return (
//     <>
//     <h1>Learn Props</h1>
//     <h1>{name}</h1>
//     <h1>{roll}</h1>
//     </>
//   )
// }

export const LearnProps = (props) => {
    return (
      <>
      <h1>Learn Props</h1>
      <h1>{props.name}</h1>
      <h1>{props.roll}</h1>
      </>
    )
  }
