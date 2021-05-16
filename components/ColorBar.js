import { useDispatch, useSelector } from "react-redux";
import {
  setColor,
  addColors,
  setColors,
} from "../app/features/color/colorSlice.js";
//import from '../app/features/save/saveSlice'
import { SketchPicker } from "react-color";
import React from "react";

export default function ColorBar({ pId }) {
  const [show, setShow] = React.useState(false);
  const [background, setBackground] = React.useState("#fff");
  const colors = useSelector((state) => state.color.colors);
  const saveCounter = useSelector((state) => state.save.save);
  const ref = React.useRef(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.removeEventListener("click", handleClick, true);
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log(background);
        dispatch(setColor(background));
        dispatch(addColors(background));
        setShow(false);
      }
    }
  }, [background]);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/color/" + pId)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setColors(res?.clrs[0]?.colors));
      });
  }, []);

  return (
    <div className="top-3 left-1/2 w-1/2 h-12 transform -translate-x-1/2 flex justify-between rounded-md bg-gray-50 shadow-md sticky gap-3">
      <div className="flex flex-wrap ml-3 mt-3 overflow-scroll scroll-hidden-from-css-file">
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              onClick={() => dispatch(setColor(color))}
              style={{ backgroundColor: color }}
              className="h-7 w-7 rounded-md cursor-pointer ml-3 mb-2"
            ></div>
          );
        })}
      </div>
      <div className="flex items-center gap-4 mr-3">
        <div className="w-0.25 h-11 bg-gray-300"></div>
        <div
          onClick={() => setShow(true)}
          style={{ backgroundColor: background }}
          className="w-8 h-8 cursor-pointer"
        ></div>
      </div>
      {show && (
        <div ref={ref} className="absolute top-15 right-0">
          <SketchPicker
            disableAlpha={true}
            color={background}
            onChangeComplete={(color) => setBackground(color.hex)}
            onChange={(color) => setBackground(color.hex)}
          />
        </div>
      )}
    </div>
  );
}
