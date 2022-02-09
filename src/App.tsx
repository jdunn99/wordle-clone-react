import React from "react";
import "./App.css";
import { Grid } from "./components/game/Grid";
import { Heading } from "./components/Heading";
import { Keyboard } from "./components/keyboard/Keyboard";

export type UsedType = Record<string, number>; // TODO: enum

function App() {
  const [guess, setGuess] = React.useState<string>("");
  const [saved, setSaved] = React.useState<string[]>(["", "", "", "", ""]);
  const [hints, setHints] = React.useState<number[][]>([]);
  const [used, setUsed] = React.useState<UsedType>({});
  const [count, setCount] = React.useState<number>(0);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        maxHeight: "-webkit-fill-available",
        overflow: "hidden",
        margin: "0 auto",
        maxWidth: "550px",
        display: "flex",
        flexDirection: "column",
      }}>
      <Heading />
      <Grid
        count={count}
        setCount={setCount}
        setHints={setHints}
        setSaved={setSaved}
        guess={guess}
        setGuess={setGuess}
        setUsed={setUsed}
        hints={hints}
        saved={saved}
      />
      <Keyboard
        count={count}
        setCount={setCount}
        setHints={setHints}
        setSaved={setSaved}
        guess={guess}
        setGuess={setGuess}
        setUsed={setUsed}
        hints={hints}
        used={used}
        saved={saved}
      />
    </div>
  );
}

export default App;
