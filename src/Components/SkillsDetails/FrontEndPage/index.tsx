import React, { HTMLAttributes } from "react";

export default function FrontEnd(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>FrontEnd invokes emotion</div>;
}
