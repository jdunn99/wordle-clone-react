import React from "react";
import "./App.css";
import { Grid } from "./components/game/Grid";

function App() {
  const [guess, setGuess] = React.useState<string>("");
  const [saved, setSaved] = React.useState<string[]>(["", "", "", "", ""]);
  const [hints, setHints] = React.useState<number[][]>([]);
  const [used, setUsed] = React.useState(() => new Set<string>());

  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <Grid
          setHints={setHints}
          setSaved={setSaved}
          guess={guess}
          setGuess={setGuess}
          setUsed={setUsed}
          hints={hints}
          saved={saved}
        />
      </div>
    </div>
  );
}

export default App;
