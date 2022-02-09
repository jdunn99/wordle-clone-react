import { VALID_WORDS } from "./dictionary";

const generateWord = () => {
  const start = new Date("January 1, 2022 00:00:00").valueOf();
  const now = Date.now();

  const msInDay = 86400000;
  const index = Math.floor((now - start) / msInDay);

  return VALID_WORDS[index % VALID_WORDS.length].toUpperCase();
};

export const word = generateWord();
