import React, { HTMLAttributes } from "react";
import CustomAccordion from "../../CustomAccordion";
import { skillsDetailsList } from "../skills";

export default function Mobile(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <CustomAccordion items={skillsDetailsList.mobile} />
    </div>
  );
}
