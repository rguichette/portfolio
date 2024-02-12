import React, { useState } from "react";

export default function Warning() {
  let [acceptedWarning, setAcceptedWarning] = useState(false);

  return (
    <div>
      {!acceptedWarning && (
        <div className="bg-slate-950 w-screen h-screen  flex justify-center items-center absolute top-0 z-50 flex-col text-cyan-400  ">
          <h1 className="font-bold">WARNING</h1>
          <div className="bg-[url('/assets/warning/2045.jpg')] w-96 h-52 bg-cover flex justify-center p-4 mt-2">
            <div className=" bg-slate-800 w-full h-full flex flex-col justify-center items-center text-center capitalize font-thin">
              <p>
                The Following page may Potentially trigger seizures for some
                people.
              </p>
              <p className="mt-6">Viewer Discretion is advised.</p>
            </div>
          </div>
          <button
            className="mt-4 font-semibold pointer  focus:text-teal-900"
            onClick={() => {
              setAcceptedWarning(true);
            }}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}
