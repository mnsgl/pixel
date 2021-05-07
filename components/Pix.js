import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEPoint, setSPoint } from "../app/features/point/pointSlice";
import { setCellColors } from "../app/features/save/saveSlice";

function Pix({ loc }) {
  const isActive = useSelector((state) => state.draw.isActive);
  const isDrawShape = useSelector((state) => state.shape.isDrawShape);
  const color = useSelector((state) => state.color.color);
  const size = useSelector((state) => state.size.size);
  const save = useSelector((state) => state.save.save);
  const cellColors = useSelector((state) => state.save.cellColors);
  const clearCount = useSelector((state) => state.clear.clearCount);
  const eraser = useSelector((state) => state.clear.eraser);

  const dispatch = useDispatch();
  const ref = React.useRef(null);

  const changeColor = (e, click = null) => {
    if (window.event.which === 1 && isActive) {
      if (eraser) {
        ref.current.style.backgroundColor = "#5A7578";
        return;
      }
      if (isDrawShape) {
        dispatch(setEPoint([loc.row, loc.col]));
      }
      ref.current.style.backgroundColor = color;
    }
    if (click) {
      if (eraser) {
        ref.current.style.backgroundColor = "#5A7578";
        return;
      }
      if (isDrawShape) {
        dispatch(setSPoint([loc.row, loc.col]));
      }
      ref.current.style.backgroundColor = color;
    }
  };
  React.useEffect(() => {
    ref.current.style.backgroundColor = "#5A7578";
  }, [clearCount]);
  React.useEffect(() => {
    let index = `${loc.row}${loc.col}`;
    if (cellColors[parseInt(index)]) {
      ref.current.style.backgroundColor = cellColors[parseInt(index)];
    }
  }, []);

  React.useEffect(() => {
    let cellColor = ref.current.style.backgroundColor;
    if (cellColor !== "rgb(90, 117, 120)") {
      let index = `${loc.row}${loc.col}`;
      dispatch(setCellColors({ index, cellColor }));
    }
  }, [save]);

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
