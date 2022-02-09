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
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
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
  count,
  setCount,
  saved,
}) => {
  const [keyCallback] = useKey({
    guess,
    setGuess,
    hints,
    count,
    setCount,
    setHints,
    setUsed,
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}>
      <StyledGrid>
        {saved.map((value, index) => (
          <div key={index}>
            <Cell
              word={handleGuess(0)}
              index={index}
              isActive={count === 0}
              background={handleBackground(0, index)}
            />
            <Cell
              word={handleGuess(1)}
              index={index}
              isActive={count === 1}
              background={handleBackground(1, index)}
            />
            <Cell
              word={handleGuess(2)}
              index={index}
              isActive={count === 2}
              background={handleBackground(2, index)}
            />
            <Cell
              word={handleGuess(3)}
              isActive={count === 3}
              index={index}
              background={handleBackground(3, index)}
            />
            <Cell
              word={handleGuess(4)}
              isActive={count === 4}
              index={index}
              background={handleBackground(4, index)}
            />
          </div>
        ))}
      </StyledGrid>
    </div>
  );
};
