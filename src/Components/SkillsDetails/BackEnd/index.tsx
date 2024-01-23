import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { Accordion } from "@ark-ui/react";
import CustomAccordion from "../../CustomAccordion";
import { skillsDetailsList } from "../skills";

export default function BackEnd(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="">
      <CustomAccordion items={skillsDetailsList.backend} />
    </div>
  );
}
