import Window from "../components/Window";
import Menu from "../components/Menu";
import Pane from "../components/Pane";
export default function PixArt() {
  return (
    <div>
      <Window className="container">
        <Menu className="w-1/6 absolute left-0 top-0 h-screen" />
        <Pane className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </Window>
    </div>
  );
}
