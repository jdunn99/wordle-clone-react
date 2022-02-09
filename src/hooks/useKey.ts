import React from "react";
import { UsedType } from "../App";
import { VALID_WORDS } from "../util/dictionary";
import { word } from "../util/generateWord";

interface KeyProps {
  guess: string;
  hints: number[][];
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  setSaved: React.Dispatch<React.SetStateAction<string[]>>;
  setHints: React.Dispatch<React.SetStateAction<number[][]>>; // TODO: enum
  setUsed: React.Dispatch<React.SetStateAction<UsedType>>;
}

export const useKey = ({
  guess,
  hints,
  setGuess,
  setSaved,
  count,
  setCount,
  setUsed,
  setHints,
}: KeyProps) => {
  // TODO: Clean this up
  const handleSubmit = React.useCallback(() => {
    if (guess === word) {
      setHints((hints) => [...hints, [2, 2, 2, 2, 2, 2]]);
      setSaved((saved) => {
        let temp = [...saved];
        temp[count] = word;
        return temp;
      });

      setTimeout(() => alert("You win!"), 200);

      setTimeout(() => {
        setSaved(["", "", "", "", ""]);
        setGuess("");
        setHints([]);
        setUsed({});
        setCount(0);
      }, 1000);

      return;
    }

    if (guess.length !== 5) return;

    if (!VALID_WORDS.includes(guess.toLocaleLowerCase())) {
      alert("Word is not valid!");
      return;
    }

    let result = [0, 0, 0, 0, 0];
    const repeated = [];
    let temp: UsedType = {};

    for (let i = 0; i < guess.length; ++i) {
      if (guess[i] === word[i]) {
        temp[guess[i]] = 2;
        result[i] = 2;
        repeated.push(guess[i]);
      }
    }

    for (let i = 0; i < guess.length; ++i) {
      if (word.includes(guess[i]) && !repeated.includes(guess[i])) {
        temp[guess[i]] = 1;
        result[i] = 1;
      } else {
        temp[guess[i]] = temp[guess[i]] ? temp[guess[i]] : 0;
      }
    }

    console.log(temp);
    setUsed((used) => ({ ...used, ...temp }));

    setCount((count) => count + 1);
    setSaved((prev) => {
      let temp = [...prev];
      temp[count] = guess;
      return temp;
    });
    setGuess("");
    setHints((prev) => [...prev, result]);

    if (hints.length === 4) {
      alert("You lose! The word was RAILS");

      setTimeout(() => {
        setSaved(["", "", "", "", ""]);
        setGuess("");
        setHints([]);
        setCount(0);
        setUsed({});
      }, 1000);
    }
  }, [
    count,
    guess,
    hints.length,
    setCount,
    setGuess,
    setHints,
    setSaved,
    setUsed,
  ]);

  const callback = React.useCallback(
    (code: string, key: string) => {
      if (code === "Enter") handleSubmit();
      else {
        setGuess((prev) => {
          if (code === "Backspace") return prev.substring(0, prev.length - 1);

          // no numbers or special characters
          if (
            code.substring(0, code.length - 1) === "Digit" ||
            key.length !== 1
          )
            return prev;
          return prev.length === 5 ? prev : prev + key.toUpperCase();
        });
      }
    },
    [handleSubmit, setGuess]
  );

  return [callback];
};
