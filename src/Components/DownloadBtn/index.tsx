import React from "react";

export default function Download() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <button type="submit" onClick={() => {}}>
        <a href="/phonebg.jpeg" download>
          Download Resume
        </a>
      </button>
    </div>
  );
}
