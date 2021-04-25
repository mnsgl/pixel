import React from "react";

export default function Pix({ color }) {
  const ref = React.useRef(null);
  let size = 10;
  const test = (e) => {
    if (window.event.which === 1) {
      ref.current.style.backgroundColor = color;
    }
  };
  return (
    <div
      ref={ref}
      className={`w-${size} h-${size} bg-red-500`}
      onMouseEnter={test}
      onClick={test}
    />
  );
}
