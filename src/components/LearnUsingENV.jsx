export const LearnUsingENV = () => {
  return (
    <>
      <h1>How to use ENV in react and Vite</h1>
      {import.meta.env.VITE_BASE_API_URL}
      <br />
      {import.meta.env.VITE_API_KEY}
      <br />
    </>
  );
};
