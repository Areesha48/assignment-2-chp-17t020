//question 1//

let emptyMultiDimArray = [];
let emptyMultiDimsecond = new Array();
let emptyMultiDimthird = Array();


//question 2//
let matrix = [
    [0, 1, 2 ,3 + "<br>"],
    [1, 0, 1,2   +"<br>"],
    [2, 1, 2 ,0]
  ];
  document.write(matrix);
  
  //question 3//
  
  for (let i = 1; i <= 10; i++)
     document.write(i + "<br>");

  //question 4//4
  let num = prompt("Enter a number: ");
      let length = prompt("Enter the length of the table: ");
      
      document.write(`Multiplication table of ${num}: <br>`);

      for (let i = 1; i <= length; i++) {
        document.write(`${num} x ${i} = ${num * i} <br>`);
      }

      //question 5//
      let fruits = ["apple" ,"banana" ,"mango" ,"orange" ,"strawberry"];
      document.write(fruits);
      document.write


      //question 6//
      // Counting
      document.write("Counting: " +"<br>");
      for (let i = 1; i <= 15; i++) {
        document.write(i + " ");
      }
      document.write("<br><br>");
      
      // Reverse counting
      document.write("Reverse counting: " +"<br>");
      for (let i = 10; i >= 1; i--) {
        document.write(i + " ");
      }
      document.write("<br><br>");
      
      // Even numbers
      document.write("Even numbers: " +"<br>");
      for (let i = 0; i <= 20; i += 2) {
        document.write(i + " ");
      }
      document.write("<br><br>");
      
      // Odd numbers
      document.write("Odd numbers: " + "<br>");
      for (let i = 1; i <= 20; i += 2) {
        document.write(i + " ");
      }
      document.write("<br><br>");
      
      // Series (2k)
      document.write("Series (2k): " +"<br>");
      for (let i = 2; i <= 20; i += 2) {
        document.write(i + "k ");
      }
//question 7//
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("Enter a search term: ");
let index = A.indexOf(search);
if (index != -1) {
  alert(search + " is available at index " + index + " in our bakery!");
} else {
  alert(search + " is not available in our bakery!");
}
//
let Ab = ["cake", "apple pie", "cookie", "chips", "patties"];
let search2 = prompt("Enter a search term: ");
let index2 = Ab.indexOf(search2.toLowerCase());
if (index2 != -1) {
  alert(search + " is available at index " + index2 + " in our bakery!");
} else {
  alert(search + " is not available in our bakery!");
}
//question 8//
let c = [24, 53, 78, 91, 12];
let largest = c[0];
for (let i = 1; i < c.length; i++) {
  if (c[i] > largest) {
    largest = c[i];
  }
}
document.write("The largest number in the array is: " + largest );


///
let f = [24, 53, 78, 91, 12];
let smallest = f[0];
for (let i = 1; i < f.length; i++) {
  if (f[i] < smallest) {
    smallest = f[i];
  }
}
document.write("The smallest number in the array is: " + smallest);
  

//question 10//
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + "<br>");
  }
}
