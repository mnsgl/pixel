import React from "react";
import Pix from "./Pix";
import dragElement from "./Drag";
import { active, deactive } from "../app/features/draw/drawSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Pane() {
  const [draw, setDraw] = React.useState(false);
  const ePoint = useSelector((state) => state.point.ePoint.payload);
  const isActive = useSelector((state) => state.draw.isActive);
  const sPoint = useSelector((state) => state.point.sPoint.payload);
  const dispatch = useDispatch();
  let dragDiv = React.useRef(null);
  let color = "rgb(0, 254, 0)";
  const arr = [...Array(32).keys()];

  const drawRect = () => {};

  React.useEffect(() => {
    //document.addEventListener("wheel", setSize, { passive: false });
    //document.getElementsByTagName("html")[0].style.backgroundColor = "#5A7578";
    document.getElementsByTagName("html")[0].style.backgroundColor = "#fff";
  }, []);
  React.useEffect(() => {
    if (isActive) {
      drawRect();
    }
  }, [isActive, sPoint, ePoint]);
  return (
    <div
      onMouseDown={() => dispatch(active())}
      onMouseUp={() => dispatch(deactive())}
      ref={dragDiv}
      className="flex flex-col items-center mt-56 mb-56"
      //set this div height according to sum of all pixel
      //className="z-20 absolute border-solid border-8 border-green-600 cursor-move"
    >
      {arr.map((row, i) => (
        <Row key={i}>
          {arr.map((col, j) => (
            <Pix key={j} loc={{ row: i + 1, col: j + 1 }} />
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
