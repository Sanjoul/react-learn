import Style from "../css/LearnCSSModule1.module.css";
export const LearnCSSModule1 = () => {
  return (
    <>
      <p className={`${Style.txt_size} ${Style.txt_color}`}>
        This is CSS Module 1{" "}
      </p>
    </>
  );
};
