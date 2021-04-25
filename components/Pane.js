import React from "react";
import Pix from "./Pix";
import dragElement from "./Drag";

export default function Pane({ size, className }) {
  let dragDiv = React.useRef(null);
  let color = "rgb(0, 254, 0)";
  const arr = [...Array(10).keys()];
  React.useEffect(() => {
    //dragElement(dragDiv.current);
  }, []);
  return (
    <div
      ref={dragDiv}
      className={className}
      //className="z-20 absolute border-solid border-8 border-green-600 cursor-move"
    >
      {arr.map((row, i) => (
        <Row key={i}>
          {arr.map((col, j) => (
            <Pix key={j} color={color} size={size} />
          ))}
        </Row>
      ))}
    </div>
  );
}

const Row = (props) => {
  return (
    <div className="flex" {...props}>
      {props.children}
    </div>
  );
};

if (process.browser) {
  window.oncontextmenu = function (e) {
    e.preventDefault();
    e.stopPropagation;
    return false;
  };
}
