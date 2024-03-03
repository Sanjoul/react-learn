import { useState } from "react";
import LearnComponent from "./components/LearnComponent";
import { Learn } from "./components/LearnComponent";
import { LearnJsx } from "./components/LearnJsx";
import { LearnProps } from "./components/LearnProps";
import { LearnEvent } from "./components/LearnEvent";
import { LiftingStateUp } from "./components/LiftingStateUp";
import { LearnState } from "./components/LearnState";
import { CounterApp } from "./components/CounterApp";
import { LearnUseEffect } from "./components/LearnUseEffect";
import { LearnUseMemo } from "./components/LearnUseMemo";
import { LearnUseCallback } from "./components/LearnUseCallback";
import { LearnCustomHook } from "./components/LearnCustomHook";
import { LearnConditionalRender } from "./components/LearnConditionalRender";
import { LearnMap } from "./components/LearnMap";

function App() {
  let roll = "33";
  const getData = (data) => {
    console.log(data);
  };
  return (
    <>
      {/* <LearnComponent />
    <Learn/>
    <LearnJsx/> */}
      {/* <LearnProps name="Sanjoul" roll={roll}/> */}
      {/* <LearnComponent /> */}
      {/* <LearnEvent/> */}
      {/* <LiftingStateUp myClick={getData}/> */}
      {/* <LearnState/> */}
      {/* <CounterApp/> */}
      {/* <LearnUseEffect/> */}
      {/* <LearnUseMemo/> */}
      {/* <LearnUseCallback/> */}
      {/* <LearnCustomHook/> */}
      {/* <LearnConditionalRender/> */}
      <LearnMap />
    </>
  );
}

export default App;
