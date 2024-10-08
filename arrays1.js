let groceries = [
  "tomato",
  "lettuce",
  "cucumber",
  "onions",
  "parsley",
  "celery",
];
//clg is added to show the addition and removing of the elements
//let me know if i should remove it
console.log(groceries[2]);

console.log(groceries.length);

console.log(groceries.pop());

console.log(groceries);

console.log(groceries.push("chicken", "meat"));

console.log(groceries);

let firstThreeItems = [];

firstThreeItems.push(groceries[0], groceries[1], groceries[2]);

console.log(firstThreeItems);

firstThreeItems.splice(2, 1);

console.log(firstThreeItems);

firstThreeItems.splice(0, 0, "chicken");

console.log(firstThreeItems);

firstThreeItems.splice(0, 2, "ketchup", "chili");

console.log(firstThreeItems);
