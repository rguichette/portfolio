import React, { HTMLAttributes } from "react";
import CustomAccordion from "../../CustomAccordion";
import { skillsDetailsList } from "../skills";

export default function FrontEnd(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="export type SkillDetails = {
        technology: string;
        summary: string;
      };
      
      export type SkillDetailsList = {
        [category in SkillCategory]: SkillDetails[];
      };
      "
    >
      <CustomAccordion items={skillsDetailsList.frontEnd} />
    </div>
  );
}
