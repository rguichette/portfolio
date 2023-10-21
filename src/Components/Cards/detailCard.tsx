import { useEffect } from "react";
import Typewriter from "typewriter-effect";

interface Iprops {
  title?: string;
  text?: string;
}

export default function DetailCard({ title, text = "" }: Iprops) {
  let txt =
    "<strong class='test'>Lorem</strong> ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur dignissimos temporibus veritatis, voluptatibus placeat necessitatibus quo <strong class='test'>quia</strong> veniam ullam eaque unde dolorum rerum eveniet ex quidem sapiente? Ipsa, tempore!";

  return (
    <div className="bg-white w-[275px] justify-center flex h-[350px] flex-wrap rounded-lg overflow-y-scroll drop-shadow-md shadow-md m-2 flex-col ">
      <h2 className="block mt-4 text-center">{title}</h2>
      <div className="bg-emerald-100 flex-1">
        <span className="block overflow-y-scroll p-4 text-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString(text)
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .start();
            }}
          />
        </span>
      </div>
    </div>
  );
}
