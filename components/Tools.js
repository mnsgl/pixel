import React from "react";

export default function Tools() {
  const dragParent = React.useRef(null);
  const dragChild = React.useRef(null);
  React.useEffect(() => {
    dragElement(dragParent.current, dragChild.current);
  }, []);
  return (
    <div
      ref={dragParent}
      className="w-16 h-72 shadow shadow-md rounded-md overflow-hidden absolute bg-green-400 z-10"
    >
      <div ref={dragChild} className="text-2xl bg-blue-600 cursor-move z-20">
        ✺✺✺
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
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    parent.style.top = parent.offsetTop - pos2 + "px";
    parent.style.left = parent.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
