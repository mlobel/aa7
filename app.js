console.log(new Set([1, 1, 2, 2, 3, 4])); // Set(4)

console.log([...new Set("referee")].join("")); // ref

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

console.log(m); //Map(2) {Array(3) => true, Array(3) => false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

let testArr = [1, 2, 3, 4, 5, 6, 6, 6, 7];
let otherTestArr = [1, 2, 3, 4, 5, 6];

function hasDuplicate(arr) {
  if (new Set(arr).size !== arr.length) {
    return true;
  } else {
    return false;
  }
}

console.log(hasDuplicate(testArr));
console.log(hasDuplicate(otherTestArr));

let nameOne = "Ayisha";
let nameTwo = "Evee";

function vowelCount(str) {
  const vowels = "aeiou";
  let vowelMap = new Map();

  for (let char of str) {
    if (vowels.includes(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount(nameOne));
console.log(vowelCount(nameTwo));
