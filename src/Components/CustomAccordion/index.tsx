import { Accordion } from "@ark-ui/react/accordion";
import Typewriter from "typewriter-effect";
import RenderIfVisible from "react-render-if-visible";

import "./style.css";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";

type SkillDetails = {
  technology: string;
  summary: string;
};

type AccProps = {
  items: SkillDetails[];
};

export default function CustomAccordion({ items }: AccProps) {
  // console.log("ITEMS", items);
  return (
    <Accordion.Root
      collapsible
      className="flex flex-col"
      onFocusChange={(i) => {
        // console.log("op", i);
      }}
    >
      {items.map((item, id) => (
        <Accordion.Item key={id} value={item.technology} className=" w-full">
          <Accordion.ItemTrigger className="w-full justify-between font-bold">
            {item.technology}
            <Accordion.ItemIndicator>
              <ArrowIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="ml-4 -mt-3 font-light">
            <RenderIfVisible>
              <Typewriter
                options={{
                  delay: 2,
                  // strings: [item.summary],
                  // deleteSpeed: 0,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(item.summary)

                    // .pauseFor(1250)

                    .start();
                }}
              />
            </RenderIfVisible>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

let ArrowIcon = () => {
  return (
    <div data-scope="accordion" data-part="item-indicator" data-state="open">
      <svg xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
      </svg>
    </div>
  );
};
