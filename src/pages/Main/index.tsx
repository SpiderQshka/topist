import React from "react";
import { IntroSection } from "./IntroSection";
import { Section } from "./Section";
import { EndingSection } from "./EndingSection";
import { data } from "static/data";

export const Main: React.FunctionComponent = () => {
  return (
    <>
      <IntroSection />
      {data.map((el, i) => (
        <Section theme={i % 2 === 0 ? "light" : "dark"} data={el} />
      ))}
      <EndingSection />
    </>
  );
};