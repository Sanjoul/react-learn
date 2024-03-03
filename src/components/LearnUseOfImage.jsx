import Pic from "/images/s1.png";
import SupaPic from "../assets/images/s2.png";

export const LearnUseOfImage = () => {
  return (
    <>
      <h1>Images</h1>
      <img src={Pic} alt="" width="400px" />
      <br />
      <img src={SupaPic} alt="" width="100px" />
    </>
  );
};
