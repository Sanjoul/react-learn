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
import { LearnInlineCSS } from "./components/LearnInlineCSS";
import { LearnExternalCSS1 } from "./components/LearnExternalCSS1";
import { LearnExternalCSS2 } from "./components/LearnExternalCSS2";
import { LearnCSSModule1 } from "./components/LearnCSSModule1";
import { LearnCSSModule2 } from "./components/LearnCSSModule2";
import { LearnUseOfImage } from "./components/LearnUseOfImage";
import { LearnForm } from "./components/LearnForm";
import { LearnUsingENV } from "./components/LearnUsingENV";

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
      {/* <LearnMap /> */}
      {/* <LearnInlineCSS /> */}
      {/* <LearnExternalCSS2 />
      <LearnExternalCSS1 /> */}
      {/* <LearnCSSModule1 /> */}
      {/* <LearnCSSModule2 /> */}
      {/* <LearnUseOfImage /> */}
      {/* <LearnForm />  */}
      <LearnUsingENV />
    </>
  );
}

export default App;
