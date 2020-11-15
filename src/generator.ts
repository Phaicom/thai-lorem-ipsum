import { words } from "./words";

export const genSentence = (wordCount: number) => {
  let totalWords = words;
  while (wordCount > totalWords.length) {
    const wordsDiff = wordCount - totalWords.length;
    if (wordsDiff < words.length) {
      totalWords = [...totalWords, ...words.slice(0, wordsDiff)];
    } else {
      totalWords = [...totalWords, ...words];
    }
  }
  return totalWords.slice(0, wordCount).join(" ");
};
