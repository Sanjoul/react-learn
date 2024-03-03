import Style from "../css/LearnCSSModule2.module.css";
export const LearnCSSModule2 = () => {
  return (
    <>
      <p className={`${Style.txt_color} ${Style.txt_size}`}>
        This is CSS Module 2
      </p>
    </>
  );
};
