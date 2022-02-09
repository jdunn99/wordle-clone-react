import React from "react";
import styled from "styled-components";
import { UsedType } from "../../App";
import { useKey } from "../../hooks/useKey";
import { Key } from "./Key";

// TODO: share this interface with Grid in single interface
interface KeyboardProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  saved: string[];
  hints: number[][]; // TODO: change to enum
  setHints: React.Dispatch<React.SetStateAction<number[][]>>;
  setUsed: React.Dispatch<React.SetStateAction<UsedType>>; // TODO: any type
  used: UsedType;
  setSaved: React.Dispatch<React.SetStateAction<string[]>>;
}

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
`;

export const Keyboard: React.FC<KeyboardProps> = ({
  guess,
  setGuess,
  setUsed,
  used,
  hints,
  setSaved,
  setHints,
  count,
  setCount,
}) => {
  const [keyCallback] = useKey({
    guess,
    setGuess,
    hints,
    count,
    setUsed,
    setCount,
    setHints,
    setSaved,
  });

  const backgroundHandler = (key: string) => {
    if (used[key] === undefined) return undefined;

    switch (used[key]) {
      case 0:
        return "#0F0E11";
      case 1:
        return "#8B8000";
      case 2:
        return "#186A3B";
    }
  };

  return (
    <div
      style={{
        height: "200px",
      }}>
      <div style={{ margin: "0 8px", display: "block" }}>
        <Row>
          <Key
            onClick={() => keyCallback("Q", "Q")}
            background={backgroundHandler("Q")}>
            Q
          </Key>
          <Key
            onClick={() => keyCallback("W", "W")}
            background={backgroundHandler("W")}>
            W
          </Key>
          <Key
            onClick={() => keyCallback("E", "E")}
            background={backgroundHandler("E")}>
            E
          </Key>
          <Key
            onClick={() => keyCallback("R", "R")}
            background={backgroundHandler("R")}>
            R
          </Key>
          <Key
            onClick={() => keyCallback("T", "T")}
            background={backgroundHandler("T")}>
            T
          </Key>
          <Key
            onClick={() => keyCallback("Y", "Y")}
            background={backgroundHandler("Y")}>
            Y
          </Key>
          <Key
            onClick={() => keyCallback("U", "U")}
            background={backgroundHandler("U")}>
            U
          </Key>
          <Key
            onClick={() => keyCallback("I", "I")}
            background={backgroundHandler("I")}>
            I
          </Key>
          <Key
            onClick={() => keyCallback("O", "O")}
            background={backgroundHandler("O")}>
            O
          </Key>
          <Key
            onClick={() => keyCallback("P", "P")}
            background={backgroundHandler("P")}>
            P
          </Key>
        </Row>
        <Row>
          <div style={{ flex: 0.5 }} />
          <Key
            onClick={() => keyCallback("A", "A")}
            background={backgroundHandler("A")}>
            A
          </Key>
          <Key
            onClick={() => keyCallback("S", "S")}
            background={backgroundHandler("S")}>
            S
          </Key>
          <Key
            onClick={() => keyCallback("D", "D")}
            background={backgroundHandler("D")}>
            D
          </Key>
          <Key
            onClick={() => keyCallback("F", "F")}
            background={backgroundHandler("F")}>
            F
          </Key>
          <Key
            onClick={() => keyCallback("G", "G")}
            background={backgroundHandler("G")}>
            G
          </Key>
          <Key
            onClick={() => keyCallback("H", "H")}
            background={backgroundHandler("H")}>
            H
          </Key>
          <Key
            onClick={() => keyCallback("J", "J")}
            background={backgroundHandler("J")}>
            J
          </Key>
          <Key
            onClick={() => keyCallback("K", "K")}
            background={backgroundHandler("K")}>
            K
          </Key>
          <Key
            onClick={() => keyCallback("L", "L")}
            background={backgroundHandler("L")}>
            L
          </Key>
          <div style={{ flex: 0.5, display: "block" }} />
        </Row>
        <Row>
          <Key large onClick={() => keyCallback("Enter", "Enter")}>
            Enter
          </Key>
          <Key
            onClick={() => keyCallback("Z", "Z")}
            background={backgroundHandler("Z")}>
            Z
          </Key>
          <Key
            onClick={() => keyCallback("X", "X")}
            background={backgroundHandler("X")}>
            X
          </Key>
          <Key
            onClick={() => keyCallback("C", "C")}
            background={backgroundHandler("C")}>
            C
          </Key>
          <Key
            onClick={() => keyCallback("V", "V")}
            background={backgroundHandler("V")}>
            V
          </Key>
          <Key
            onClick={() => keyCallback("B", "B")}
            background={backgroundHandler("B")}>
            B
          </Key>
          <Key
            onClick={() => keyCallback("N", "N")}
            background={backgroundHandler("N")}>
            N
          </Key>
          <Key
            onClick={() => keyCallback("M", "M")}
            background={backgroundHandler("M")}>
            M
          </Key>
          <Key large onClick={() => keyCallback("Backspace", "Backspace")}>
            Backspace
          </Key>
        </Row>
      </div>
    </div>
  );
};
