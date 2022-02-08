import React from "react";
import styled from "styled-components";
import { useKey } from "../../hooks/useKey";
import { Cell } from "./Cell";

interface GridProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  saved: string[];
  hints: number[][]; // TODO: change to enum
  setHints: React.Dispatch<React.SetStateAction<number[][]>>;
  setUsed: React.Dispatch<React.SetStateAction<any>>; // TODO: any type
  setSaved: React.Dispatch<React.SetStateAction<string[]>>;
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

/**
 * Renders the grid and handles keydown events.
 */
export const Grid: React.FC<GridProps> = ({
  guess,
  setGuess,
  setUsed,
  hints,
  setSaved,
  setHints,
  saved,
}) => {
  const [count, setCount] = React.useState<number>(0); // represents the level currently working on in the grid

  const [keyCallback] = useKey({
    guess,
    setGuess,
    hints,
    count,
    setCount,
    setHints,
    setSaved,
  });

  const eventCallback = React.useCallback(
    ({ code, key }: KeyboardEvent) => {
      keyCallback(code, key);
    },
    [keyCallback]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", eventCallback);

    return () => document.removeEventListener("keydown", eventCallback);
  }, [eventCallback]);

  const handleGuess = (index: number) => {
    if (saved[index] !== "") return saved[index]; // already guessed this level
    return index === count ? guess : ""; // otherwise we haven't reached it or are currently on the level
  };

  const handleBackground = (row: number, col: number) => {
    if (hints[row] === undefined || hints[row][col] === undefined)
      return undefined;
    switch (hints[row][col]) {
      case 0:
        return undefined;
      case 1:
        return "#8B8000";
      case 2:
        return "#186A3B";
    }
  };

  return (
    <StyledGrid>
      {saved.map((value, index) => (
        <div key={index}>
          <Cell
            word={handleGuess(0)}
            index={index}
            background={handleBackground(0, index)}
          />
          <Cell
            word={handleGuess(1)}
            index={index}
            background={handleBackground(1, index)}
          />
          <Cell
            word={handleGuess(2)}
            index={index}
            background={handleBackground(2, index)}
          />
          <Cell
            word={handleGuess(3)}
            index={index}
            background={handleBackground(3, index)}
          />
          <Cell
            word={handleGuess(4)}
            index={index}
            background={handleBackground(4, index)}
          />
        </div>
      ))}
    </StyledGrid>
  );
};
