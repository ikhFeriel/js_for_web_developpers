console.log("( Exo 4 )");

function calculateWordFrequency(strings) {
  const frequencyObject = strings.reduce((wordCount, word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
    return wordCount;
  }, {});

  return frequencyObject;
}

const Array = [
  "one piece",
  "one piece",
  "attack on titan",
  "dragon ball",
  "attack on titan",
  "one piece",
];
const wordFrequency = calculateWordFrequency(Array);
console.log(wordFrequency);
