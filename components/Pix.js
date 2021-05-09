import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProjectCellColors } from "../app/features/project/projectSlice";
import { addToStack } from "../app/features/stack/stackSlice";

function Pix({ loc, project }) {
  const index = `${loc.row}${loc.col}`;
  const isActive = useSelector((state) => state.draw.isActive);
  const color = useSelector((state) => state.color.color);
  const size = useSelector((state) => state.size.size);
  const save = useSelector((state) => state.project.save);
  const clearCount = useSelector((state) => state.clear.clearCount);
  const eraser = useSelector((state) => state.clear.eraser);
  const stack_cur_val = useSelector((state) => state.stack.cur_value);

  const dispatch = useDispatch();
  const ref = React.useRef(null);

  const changeColor = (e, click = null) => {
    if (window.event.which === 1 && isActive) {
      if (eraser) {
        dispatch(
          addToStack({ index, color: ref.current.style.backgroundColor })
        );
        ref.current.style.backgroundColor = "#5A7578";
        return;
      }
      dispatch(addToStack({ index, color: ref.current.style.backgroundColor }));
      ref.current.style.backgroundColor = color;
      return;
    }
    if (click) {
      if (eraser) {
        ref.current.style.backgroundColor = "#5A7578";
        return;
      }
      dispatch(addToStack({ index, color: ref.current.style.backgroundColor }));
      ref.current.style.backgroundColor = color;
    }
  };

  React.useEffect(() => {
    ref.current.style.backgroundColor = "#5A7578";
  }, [clearCount]);

  React.useEffect(() => {
    if (project.cellColors[parseInt(index)]) {
      ref.current.style.backgroundColor = project.cellColors[parseInt(index)];
    }
  }, []);

  React.useEffect(() => {
    let cellColor = ref.current.style.backgroundColor;
    if (cellColor !== "rgb(90, 117, 120)") {
      dispatch(
        setProjectCellColors({ index, cellColor, pname: project.pname })
      );
    }
  }, [save]);

  React.useEffect(() => {
    if (stack_cur_val && stack_cur_val[index]) {
      ref.current.style.backgroundColor = stack_cur_val[index];
    }
  }, [stack_cur_val]);

  return (
    <div
      ref={ref}
      className={`w-${size} h-${size}`}
      onMouseOver={changeColor}
      onMouseDown={(e) => changeColor(e, true)}
    ></div>
  );
}

export default React.memo(Pix);
