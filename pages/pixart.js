import Window from "../components/Window";
import Menu from "../components/Menu";
import Pane from "../components/Pane";
import Tools from "../components/Tools";
import React from "react";
import ColorBar from "../components/ColorBar";
export default function PixArt({ pname, pId }) {
  return (
    <div>
      <Window>
        {/* 
        <Menu className="w-1/6 absolute left-0 top-0 h-screen" />
        */}
        <ColorBar pId={pId} />
        <Tools />
        <Pane pname={pname} />
      </Window>
    </div>
  );
}
