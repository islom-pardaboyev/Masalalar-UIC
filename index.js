
// EXERCISE 1
function sumInput() {
  let array = [];

  let number1 = prompt("Iltimos, birinchi sonni kiriting:");
  let number2 = prompt("Iltimos, ikkinchi sonni kiriting:");
  let number3 = prompt("Iltimos, uchunchi sonni kiriting:");

  if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    array.push(Number(number1), Number(number2), Number(number3));

    const sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    alert("Jami: " + sum);
  } else {
    alert("Noto'g'ri qiymat kiritdingiz. Iltimos, faqat raqam kiriting.");
  }
}

sumInput();

// EXERCISE 2
let musicGenres = ["Jazz", "Blues"];

musicGenres.push("Rock-n-roll");

let middleIndex = Math.floor(musicGenres.length / 2);
musicGenres[middleIndex] = "Classic";

let firstGenre = musicGenres.shift();

musicGenres.unshift("Rap", "Reggae");

console.log(musicGenres);


// EXERCISE 3
function sumSalaries(salaries) {
  let sum = 0;

  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  Akmal: 1200,
  Salim: 5200,
  Karima: 1800,
};

console.log(sumSalaries(salaries));

// EXERCISE 4
function calcSum(numbers) {
  if (!numbers || numbers.length === 0) {
    return [];
  }

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      evenSum += numbers[i];
    } else {
      oddSum += numbers[i];
    }
  }

  return [evenSum, oddSum];
}

let result = calcSum([1, 2, 3, 4, 5]);
console.log(result);