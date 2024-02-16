import React from "react";

export default function Download() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <button
        type="submit"
        className="border-2 inline-block w-40 h-10 rounded-md text-center bg-cyan-500 text-cyan-100 pointer"
        onClick={() => {}}
      >
        <a href="/Ralph_Isidore_resume.pdf" download>
          Download Resume
        </a>
      </button>
    </div>
  );
}
