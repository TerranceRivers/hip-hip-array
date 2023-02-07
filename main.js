/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code
for(let i = 0; i < students.length; i++){
  console.log(students[i])
}


  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code
let rev = grades.reverse()

for (i =0; i < rev.length; i++){
  console.log(rev[i])
}
  


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code
  for (let i = 0; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] % 2 === 0) {
      console.log(positiveNumbers[i]);
    }
  }


  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code
  for (let i = 0; i < mixedSignNumbers.length; i++) {
    if (mixedSignNumbers[i] % 2 === 0) {
      console.log(mixedSignNumbers[i]);
    }
  }


  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, using pop and shift.  Then console.log out each value in the array individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
  symmetricalCapitals.shift()
  symmetricalCapitals.shift()
  symmetricalCapitals.pop()
  let newArray = symmetricalCapitals
  for ( i = 0; i < newArray.length; i++){
     console.log(newArray[i])
  }


    


  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) using push and unshift. Then console.log out each value in the array individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  let value1 = 1
  let value2 = 2
  let value3 = 3
  fibonacciNumbers.push(value1, value2)
  fibonacciNumbers.unshift(value3)

  for(i = 0; i < fibonacciNumbers.length; i++){
    console.log(fibonacciNumbers[i])
  }

  


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code
   const array = [10,20,30,40,50]

   for (i = 0; i < array.length; i++){
    console.log(array[i])
   }





  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code
  let value4 = 4
  let value5 = 5
  let value6 = 6
  let value7 = 7
  let value8 = 8

  emptyArray.unshift(value4, value5)
  emptyArray.push(value6, value7, value8)
  let freshArray = emptyArray
  for (i = 0; i < freshArray.length; i++){
    console.log(freshArray[i])
  }





  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code
  for (let i = 3; i <= 10; i++) {
    console.log(students[i]);
  }


  console.log("\n");
  console.log("Challenge 10");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  console.log()
  const studentsCopy = students.slice(3, 11);
  for(i = 0; i< studentsCopy.length; i++){
    console.log(studentsCopy[i])
  }
  console.log()
  for (i =0; i < students.length; i++){
    console.log(students[i])
  }
  



  console.log("\n");
  console.log("Challenge 11");
  console.log()
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code
  let spliceArray = dinosaurs.splice(4,3)
  for (i = 0; i < dinosaurs.length; i++){
    console.log(dinosaurs[i])
  }
  
  
  
  console.log("\n");
  console.log("Challenge 12");
  console.log()
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code
  console.log(dinosaurs.join("*"))


  
  console.log("\n");

  console.log("Challenge 13");
  console.log()
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code
  console.log(dinosaurs.reverse())
  console.log(dinosaurs)


  
  console.log("\n");
  console.log("Challenge 14");
  console.log()
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code
  let concatArray = students.concat(dinosaurs)

  for (i =0; i < concatArray.length; i++){
    console.log(concatArray[i])
  }
  console.log()
  console.log(students)
  console.log(dinosaurs)


  
