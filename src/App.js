import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import DashBoard from "./components/Dashboard";

function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

  return (
    <div className="App">
      <Display
        ballCount={ballCount}
        strikeCount={strikeCount}
        hits={hits}
        fouls={fouls}
      />
      <DashBoard
        ballCount={ballCount}
        setBallCount={setBallCount}
        strikeCount={strikeCount}
        setStrikeCount={setStrikeCount}
        foul={fouls}
        setFouls={setFouls}
        hits={hits}
        setHits={setHits}
      />
    </div>
  );
}

export default App;
