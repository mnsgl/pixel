import React from "react";
import { decrease, increase } from "../app/features/size/sizeSlice";
import { useDispatch } from "react-redux";
import { clear, setEraser } from "../app/features/clear/clearSlice";
import { setIncreaseSaveValue } from "../app/features/project/projectSlice";
import { BiEraser } from "react-icons/bi";
import { BsArrowsMove } from "react-icons/bs";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineClear,
  AiOutlineSave,
} from "react-icons/ai";

export default function Tools() {
  const [clickEraser, setClickEraser] = React.useState(false);
  const dragParent = React.useRef(null);
  const dragChild = React.useRef(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dragElement(dragParent.current, dragChild.current);
  }, []);

  const handleClick = (e, effect) => {
    if (effect === "eraser") {
      dispatch(setEraser());
      setClickEraser((prev) => !prev);
    }
    if (effect === "clear") {
      dispatch(clear());
    }
  };

  return (
    <div
      ref={dragParent}
      className="w-12 h-72 shadow shadow-md rounded-md overflow-hidden absolute z-10 bg-white"
    >
      <div ref={dragChild} className="w-full h-7 bg-gray-200 cursor-move z-20">
        <BsArrowsMove className="h-7 w-7 flex items-center justify-center ml-2 " />
      </div>
      <div>
        <AiOutlineZoomIn
          onClick={() => dispatch(increase())}
          className="h-10 w-10 flex items-center justify-center cursor-pointer ml-1 mt-1 "
        />
      </div>
      <hr />
      <div>
        <AiOutlineZoomOut
          onClick={() => dispatch(decrease())}
          className="h-10 w-10 flex items-center justify-center cursor-pointer ml-1 mt-1 "
        />
      </div>
      <div>
        <AiOutlineClear
          onClick={(e) => handleClick(e, "clear")}
          className="h-10 w-10 flex items-center justify-center cursor-pointer ml-1 mt-1 "
        />
      </div>
      <div>
        <BiEraser
          style={
            clickEraser && { boxShadow: "inset 0 0 2px 2px rgba(0, 0, 0, 0.3)" }
          }
          onClick={(e) => handleClick(e, "eraser")}
          className="h-10 rounded-md w-10 flex items-center justify-center cursor-pointer ml-1 mt-1 "
        />
      </div>
      <div>
        <AiOutlineSave
          onClick={() => dispatch(setIncreaseSaveValue())}
          className="h-10 rounded-md w-10 flex items-center justify-center cursor-pointer ml-1 mt-1 "
        />
      </div>
    </div>
  );
}

function dragElement(parent = null, child = null) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (child) {
    child.onmousedown = dragMouseDown;
  } /* else {
    parent.onmousedown = dragMouseDown;
  } */

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    parent.style.top = parent.offsetTop - pos2 + "px";
    parent.style.left = parent.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
