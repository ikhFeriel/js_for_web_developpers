console.log("( Exo 2 )");

function findLongestWord(words) {
  const longestWord = words.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");

  return longestWord;
}

const wordsArray = [
  "one piece",
  "code",
  "pizzorino",
  "gumgum",
  "don't have idea",
];
const longestWord = findLongestWord(wordsArray);
console.log("- the longest word is:", longestWord);
