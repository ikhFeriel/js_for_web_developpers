console.log("( Exo 1 )");

function EvenNumbers(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  const sumEvenNumbers = evenNumbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
  }, 0);

  const average = sumEvenNumbers / evenNumbers.length;

  return average;
}

const numbers = [5, 7, 4, 9, 2, 1, 11];
const result = EvenNumbers(numbers);
console.log("- Average of even numbers is:", result);
