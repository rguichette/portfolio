import React from "react";

export default function Key({ letter }: { letter: string }) {
  return (
    <div className="m-1 bg-zinc-950 text-white p-4 rounded-md h-4 w-4 flex content-center items-center justify-center shadow-md">
      {letter}
    </div>
  );
}
