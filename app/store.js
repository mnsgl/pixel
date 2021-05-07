import { configureStore } from "@reduxjs/toolkit";
import drawReducer from "./features/draw/drawSlice";
import sizeReducer from "./features/size/sizeSlice";
import refReducer from "./features/ref/refSlice";
import pointReducer from "./features/point/pointSlice";
import clearReducer from "./features/clear/clearSlice";
import shapeReducer from "./features/shape/shapeSlice";
import colorReducer from "./features/color/colorSlice";
import saveReducer from "./features/save/saveSlice";

export default configureStore({
  reducer: {
    draw: drawReducer,
    size: sizeReducer,
    refs: refReducer,
    point: pointReducer,
    shape: shapeReducer,
    clear: clearReducer,
    color: colorReducer,
    save: saveReducer,
  },
});
