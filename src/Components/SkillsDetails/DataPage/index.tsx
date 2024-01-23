import React, { HTMLAttributes } from "react";
import CustomAccordion from "../../CustomAccordion";
import { skillsDetailsList } from "../skills";

export default function Data(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <CustomAccordion items={skillsDetailsList.data} />
    </div>
  );
}
