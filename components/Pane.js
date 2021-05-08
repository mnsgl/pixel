import React from "react";
import Pix from "./Pix";
import dragElement from "./Drag";
import { active, deactive } from "../app/features/draw/drawSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Pane({ pname }) {
  const [size, setSize] = React.useState([]);
  const project = useSelector((state) => state.project.projects).filter(
    (proj) => proj.pname === pname
  )[0];
  const dispatch = useDispatch();
  let dragDiv = React.useRef(null);

  React.useEffect(() => {
    //document.addEventListener("wheel", setSize, { passive: false });
    //document.getElementsByTagName("html")[0].style.backgroundColor = "#5A7578";
    document.getElementsByTagName("html")[0].style.backgroundColor = "#fff";
  }, []);

  React.useEffect(() => {
    if (project) {
      setSize([...Array(project.psize[0]).keys()]);
    }
  }, [project]);

  return project ? (
    <div
      onMouseDown={() => dispatch(active())}
      onMouseUp={() => dispatch(deactive())}
      ref={dragDiv}
      className="flex flex-col items-center mt-56 mb-56"
      //className="z-20 absolute border-solid border-8 border-green-600 cursor-move"
    >
      {size.map((row, i) => (
        <Row key={i}>
          {size.map((col, j) => (
            <Pix key={j} project={project} loc={{ row: i + 1, col: j + 1 }} />
          ))}
        </Row>
      ))}
    </div>
  ) : (
    <div>test</div>
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
