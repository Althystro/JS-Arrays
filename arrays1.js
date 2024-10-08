//1. Create an array and name it groceries, add 6 groceries to it

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
//2. Print the second element from the array groceries

console.log(groceries[2]);

//3. Print how many elements are in the array (i.e length of the array)

console.log(groceries.length);

//4. Print the last element in the array
//5. Remove the last element from the array and print it

console.log(groceries.pop());

console.log(groceries);

//6. Add two new and different elements to the end of the array

console.log(groceries.push("chicken", "meat"));

console.log(groceries);

//7. Create a new array named firstThreeItems and it’s elements are the first three elements from the groceries array.

let firstThreeItems = [];

firstThreeItems.push(groceries[0], groceries[1], groceries[2]);

console.log(firstThreeItems);

//Challenge

//1. Delete the 3rd element in the array

firstThreeItems.splice(2, 1);

console.log(firstThreeItems);

//2. Insert a new element at the beginning of the array

firstThreeItems.splice(0, 0, "chicken");

console.log(firstThreeItems);

// 3. Remove the first two elements and replace them with “ketchup” and “chili”

firstThreeItems.splice(0, 2, "ketchup", "chili");

console.log(firstThreeItems);
