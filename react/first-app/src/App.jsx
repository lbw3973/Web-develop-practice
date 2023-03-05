import Board from "./components/Board";
import Clock from "./components/Clock";
import First from "./components/First";
import Intro from "./components/intro";

function App() {
  return (
    <div>
      <Board living="광진" />
      <Board living="잠실" />
      <Board living="수원" />
    </div>
  );
}

export default App;
