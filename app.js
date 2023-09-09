//Task 1
//In this task we have to write a program to print "Hello world!" to the console.

//console.log("Hello world!")

//Task 2
//In this task we have to create a variable and assign a number to it. Print the value of the variable.

//let x = 45;
//console.log(x)

//Task 3
//In this task we have to write a program to add two numbers an display the result.

//let x = 5;
//let y = 10;
//console.log(x + y)

//Task 4 
//In this task we have to write a program to subtract two numbers and display the result.

//let x = 14;
//let y = 3;
//console.log( x - y)


//Task 5
//In this task we have to write a program to multiply two numbers and display the result.

//let x = 5;
//let y = 6;
//console.log(x * y )


//Task 6
//In this task we have to write a program to divide two numbers and display the result.

//let x = 18;
//let y = 6;
//console.log(x / y)

//Task 7
//In this task we have to write a program to calculate the remainder of dividing two numbers.

// let x = 14;
// let y = 3;
// console.log( x % y ) 

//Task 8
//In this task we have to create a variable an assign a string to it. Print the length of the string.

// let str = "Hello world!";
// console.log(str.length)

//Task 9 
//In this task we have to concatenate two strings and display the result.

//let str1 = "Hello ";
//let str2 = "world!";
//console.log( str1 + str2)
//console.log(str1.concat(str2))


//Task 10
//In this task we have to write a program to convert a string to uppercase. 

// let str = "hello world!"
// console.log(str.toUpperCase())

//Task 11
//In this task we have to write a program to convert a string to lowercase.

// let str = "HELLO WORLD!";
// console.log(str.toLowerCase())

//Task 12
//In this task we have to write a program to check if a number is even or odd.

// let x = 11;
// if(x % 2 === 0 ) {
//     console.log("The number is even!")
// } else {
//     console.log("The number is odd!")
// }

//Task 13
//In this task we have to write a program to check if a number is positive, negative, or zero.

// let x = 0;

// if(x > 0) {
//     console.log("The number is positive!")
// } else if(x < 0 ) {
//     console.log("The number is negative!")
// } else {
//     console.log("The number is zero!")
// }

//Task 14
//In this task we have to write a program to find the maximum of two numbers.

// let x = 14;
// let y  = 14;
// if( x > y ) {
//     console.log("x is maximum!")
// } else if( x < y) {
//     console.log("y is maximum!")
// } else {
//     console.log("Equal numbers!")
// }

//Task 15
//In this task we have to write a program to find the minimum of two numbers.

//let x = 14;
// let y  = 14;
// if( x > y ) {
//     console.log("x is maximum!")
// } else if( x < y) {
//     console.log("y is maximum!")
// } else {
//     console.log("Equal numbers!")
// }

//Task 16
//In this task we have to write a program to check if a number is divisible by another number.

// let x = 16;
// let y = 8;
// if(x % y === 0 ) {
//     console.log("X is divisible by Y")
// } else {
//     console.log(" X isn't divisible by Y")
// }

//Task 17
//In this task we have to write a program to check if a string is empty or not.

// let str = "";
// if(str == 0) {
//     console.log("The string is empty!")
// } else {
//     console.log("The string isn't empty!")
// }


// let str = "Dog";
// if (str.trim().length === 0) {
//   console.log("The string is empty!");
// } else {
//   console.log("The string isn't empty!");
// }

//Task 18
//In this task we have to write a program to check if a string contains a specific word.

// let str = "My own space!";

// console.log(str.includes("!"))

//Task 19
//In this task we have to print the numbers from 0 to 10 in the console.

// for(let i=0; i<11; i++) {
//     console.log(i)
// }

//Task 20
//In this task we have to write a program to check if a number is prime or not.

// function isPrime(num) {
//     if(num <=1) {
//         return false
//     } for(let i=2; i<=Math.sqrt(num); i++) {
//         if(num % i ===0) {
//             return false
//         }
//     }

//     return true
// }

// console.log(isPrime(9))

//Task 21
//In this task we have to write a program to reverse a string.

 //let str = "Dog is an animal"

 //console.log(str.split("").reverse().join(""))

//Task 22
//In this task we have to write a program to find the sum of all numbers in an array.

// let arr = [1,2,3,4,5,6];
// let sum = 0 ;

// for(let i=0; i<arr.length; i++) {
//     sum = sum + arr[i]
// }

// console.log(sum)

//Task 23
//In this task we have to write a program to find the average of numbers in an array.

// let arr= [4, 6];
// let sum= 0 ;

// for(i=0; i<arr.length; i++) { 
//       sum = sum + arr[i];
//     average = sum / arr.length
// }

// console.log(average)

//Task 24
//In this task we have to remove duplicates from an array.

// let arr= [1,1,2,3,3,4,5,5,6,6,7];
// let newArr= [];

// for(let i=0; i<arr.length; i++) {
//     if(! newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)

//Task 25
//In this task we have to write a program to sort an array of numbers in ascending order.

// let arr=[3,8,7,1,0,10,21,76,11];

// console.log(arr.sort((a,b) => a-b))

//Task 26
//In this task we have to write program to fin the largest element in an array.

// let arr= [1,45,9];

// function sort(arr) {
//       arr.sort((a,b) => a-b);
//       return arr[arr.length-1];
// }

// console.log(sort(arr))

//Task 27
//In this task we have to write a program to find the smallest element in an array.

// let arr= [1,45,9];

// function sort(arr) {
//        arr.sort((a,b) => a-b);
//        return arr[0];
      
// }

// console.log(sort(arr))

//Task 28
//In this task we have to write a program to check if an array contains a specific element.

// let arr = [2,3,4,6,5];
// let x = 4;

// if(arr.includes(x)) {
//     console.log("Arr includes exact element!")
// } else {
//     console.log("Arr doesn't include exact element!")
// }

//Task 29
//In this task we have to write a program to remove an element from an array.

//let arr = [1,2,3,4,5,6];
// let newArr = arr.shift(1);

// console.log(arr)

// let newArr = arr.pop(6);
// console.log(arr)

//Task 30
//In this task we have to write a program to count the number of occurrences of a specific element in an array.

// let arr = [1,2,3,1,4,1,5,6,5,7,8,7,6,1];
// let elementToCount = 1;
// let count = 0;
// for(i=0; i<arr.length; i++) {
//     if(arr[i] === elementToCount) {
//         count ++
//     }
// }

// console.log(count)

//Task 31
//In this task we have to write a program to find the length of the longest word in a sentence.

// function longestWordInASentence(sentence) {
//     let words = sentence.split(" ");
//     let longestWordLength = 0;
//     for(i = 0; i < words.length; i++) {
//         if(words[i].length > longestWordLength) {
//             longestWordLength = words[i].length
//         }
//     }
   
//  return longestWordLength
// }

// console.log(longestWordInASentence("Our friendship is better than yours!"))


//Task 32
//In this task we have to write a program to check if a string is a palindrome.

// function isPalindrome(string) { 
//     let lastVariant = string.split("").reverse().join("")

//     return lastVariant
// }


// console.log(isPalindrome("atami itesa aseti imata"))


//Task 33
//In this task we have to write a program to capitalize the first letter of each word in a sentence.

// function capitalizeFirstLetter(sentence) { 
//     let words = sentence.split(" ");
//     let capitalizedWords = [];
//     for(let word of words) { 
//         capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
//         capitalizedWords.push(capitalizedWord);
//     }

//     let capitalizedSentence = capitalizedWords.join(" "); 
//     return capitalizedSentence
     
// }

// console.log(capitalizeFirstLetter("capital city of georgia is tbilisi"))


//Task 34
//In this task we have to find the sum of all even numbers in an array.

// function sumOfEvenNumbers(arr){
// let sum = 0;

// for(i=0; i<arr.length; i++) { 
//     if(arr[i] % 2 === 0) {
//         sum = sum + arr[i]
//     }
// }

// return sum
// } 

// console.log(sumOfEvenNumbers([1,2,3,4,5,6,7,8,8,9,9,0]))


//Task 35
//In this task we have to reverse the order of words in a sentence.

// function reverseOrder(sentence) {
//     let newSentence = sentence.split(" ").reverse().join(" ")

//      return newSentence
// }

// console.log(reverseOrder("An apple is on the table "))


//Task 36
//In this task we have to write a program to find the second largest number in an array.

// function sortAndFind(arr) {
//     let sortedArr = arr.sort((a,b) => b-a);

//     return arr.length-1
// }

// console.log(sortAndFind([1,4,2,6,7,8,3,0]))



//Task 37
//In this task we have to check if two arrays are equal.

// function equalArrays(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false
//     }
//     for( let i=0; i < arr1.length; i++) {
//         if(arr1[i] !== arr2[i]) {
//             return false 
//         }
//     }

//     return true
// }

// console.log(equalArrays([1,2,3], [1,2,3]))


//Task 38
//In this task we have to write a program to find the index of the first occurrence of an element in an array.

// function findTheIndex(arr, elementToFind) { 
//     let index = arr.indexOf(elementToFind);

//     return index
// }


// console.log(findTheIndex([1,2,3,4], 1))


//Task 39
//In this task we have to write a program to remove all falsy values from an array.

// function toRemoveFalsyValues(arr) {
//     let filteredArr =[];
//     for(let i=0; i<arr.length; i++) { 
//         if(arr[i]) {
//             filteredArr.push(arr[i])
//         }
//     }

//     return filteredArr
// }

// console.log(toRemoveFalsyValues([1, null, "hello", true,undefined, NaN, 2, 4, 6, "Dog"]))


//Task 40
//In this task we have to write a program to find the largest element in a multi-dimensional array.


//Task 41
//In this task we have to write a program to remove all duplicates from an array.

// function removeDuplicates(arr) {
//     let newArr = [];
//     for(let i=0; i<arr.length; i++) {
//         if( ! newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr
// }

// console.log(removeDuplicates([1,1,2,2,3,3,4,5]))

// function removeDuplicates(arr) {
//     return [... new Set(arr)]
// }

// console.log(removeDuplicates([1,1,2,2,3,3,4,5]))


//Task 42
//In this task we have to write a program to find the index of the latest occurrence of an element in an array.

// function indexOfLatestElement(arr, lastElement) {
//     let index = arr.indexOf(lastElement)

//     return index 
// }


// console.log(indexOfLatestElement([1,2,3,4,5], 5))


//Task 43
//In this task we have to write a program to merge two sorted arrays into a single sorted array.

// function mergedArray(arr1, arr2) {
//     let mergedArr = arr1.sort((a,b) => a-b).concat(arr2.sort((a,b) => a-b));

//     return mergedArr.sort((a,b) => a-b)

// }

// console.log(mergedArray([1,4,2], [6,9,7]))


// function mergedArray(arr1, arr2) {
//     let arr1New = arr1.sort((a,b) => a-b);
//     let arr2New = arr2.sort((a,b) => a-b);
//     let mergedArr = [...arr1New, ...arr2New].sort((a,b) => a-b);

//     return mergedArr

// }

// console.log(mergedArray([1,4,3,2], [6,8,7,5]))


//Task 44
//In this task we have to write a program to sort an array of strings in alphabetical order.

// function sortArrayAlphabetically(arr) {
//     return arr.sort()
// }

// console.log(sortArrayAlphabetically(["apple", "peach", "banana", "diamond", "cat"]))

//Task 45
//In this task we have to write a program to find the common elements among multiple arrays.

//Task 46
//In this task we have to write a function that takes a sentence as an input and returns an array of unique words in an alphabetical
//order, excluding common English words such as ,,the'', ,,a'' and ,,is''.


//Task 47
//In this task we have to write a function that takes a string as an input and returns true if it is a pangram(contains every letter
//of the alphabet at least once). False otherwise.

//Task 48
//In this task we have to write a function that takes an array of objects and a property name and returns an array of 
//unique values for that property across all objects.

//Task 49
//In this task we have to write a function that takes a string as input and returns an object containing the count of each character
//in the string, excluding spaces.

//Task 50
//in this task we have to write a function that takes a string as input and returns the longest substring that contains only
//unique characters. If there are multiple substrings with the same length, return the first one you encounter.


//Task 51
//In this task we have to write a program that prints the even numbers between 1 and 20 using for loop.

// for( let i = 2; i < 20; i++) {
//     if( i % 2 ===0) {
//         console.log(i)
//     }
// }

//Task 52
//In this task we have to write a program that takes a number as input and prints corresponding day of the week using a
//switch/case statement. For example, if the input is 1, it should print "Sunday".

// let days = Number(prompt("Enter the day"));

// switch(days) {
//     case 1 : 
//     console.log("Sunday");
//        break;
//          case 2 :
//             console.log("Monday");
//             break;
//                case 3: 
//                console.log("Tuesday");
//                    break;
//                       case 4 : 
//                       console.log("Wednesday");
//                           break;
//                             case 5 : 
//                             console.log("Thursday");
//                                  break;
//                                     case 6 : 
//                                     console.log("Friday");
//                                           break;
//                                               case 7: 
//                                               console.log("Saturday");
//                                                   break;
// }



//Task 53
//In this task we have to write a program that asks the user to enter a number and keeps printing "Hello!"
//that many times using a while loop.

// let ask = Number(prompt("Enter the number!"));
// let count = 0 ;

// while(count < ask) {
//     console.log("Hello!");
//     count ++
// }

//Task 54
//In this task we have to write a program that calculates the sum of numbers from 1 to 100 using a for loop and 
//prints the result.

// let sum = 0 ;

// for(let i = 1; i<100; i++){
//     sum = sum + i ;
// }

// console.log(sum)


//Task 55
//In this task we have to write a program that takes a month number as input(1 for January, 2 for February, etc.) and prints 
//the number of days in that month using a switch/case statement.

// let num = Number(prompt("Enter the number!")); 

// switch(num) {
//     case 1 : 
//          console.log(31);
//              break;
//                 case 2 :
//                      console.log(28);
//                        break;
//                          case 3 :
//                              console.log(31);
//                                 break;
//                                   case 4:
//                                      console.log(30); 
//                                        break;
//                                          case 5:
//                                             console.log(31);
//                                                break;
//                                                 case 6 : 
//                                                    console.log(30); 
//                                                      break;
//                                                        case 7 :
//                                                          console.log(31); 
//                                                            break;
//                                                             case 8 :
//                                                                 console.log(31); 
//                                                                   break;
//                                                                     case 9 : 
//                                                                      console.log(30); 
//                                                                        break;
//                                                                          case 10 : 
//                                                                            console.log(31); 
//                                                                             break;
//                                                                                case 11 : 
//                                                                                 console.log(30); 
//                                                                                   break;
//                                                                                     case 12 : 
//                                                                                       console.log(31); 
//                                                                                         break;

                                                                        

                                                                
                                
                    
       
// }


//Task 56
//In this task we have to write a program that asks the user to guess a secret number between 1 and 10.
//Keep asking for guesses until the guess number correctly using a while loop.


// let secretNum = 3;
// let ask = Number(prompt("Enter the number!"));

// while(secretNum !== ask) {
//     ask =Number(prompt("Enter the number!"));
// }

// console.log("Correct!")

//Task 57
//In this task we have to write a program that takes a grade(A,B,C,D or F) as input and prints a corresponding message using a 
//switch/case statement. For example, if the input is "A", it should print "Excellent!".

// let str = prompt("Enter the grade!"); 

// switch(str) {
//     case "A" :
//         console.log("Excellent!");
//           break;
//           case "B" :
//             console.log("Good!");
//               break;
//               case "C" :
//                 console.log("Satisfactory!");
//                   break;
//                   case "D" :
//                     console.log("Passed!");
//                     break;
//                     case "F" :
//                         console.log("Failed!");
//                         break;
// }



//Task 58
//In this task we have to write a program that prompts the user to enter a password. The program should keep asking 
//for the password until the correct password is entered. Once the correct password is entered, display a success message.
//The correct password is "12345".

// let password = 12345;
// let ask = Number(prompt("Enter the password!"));

// while(password !== ask) {
//     ask = Number(prompt("Enter the password!"));
// }  
// console.log("Congratulations!");



//Task 59
//In this task we have to write a function called sumDigits that takes a number as an argument and returns the sum 
//of its digits.

// function sumDigits(num) {

//     let sum = 0; 
//     let str = Math.abs(num).toString();
//     for(let i=0; i< str.length; i++){
//         sum = sum + parseInt(str[i]);
//     }
//     return sum

// }

// console.log(sumDigits(123))


//Task 60
//In this task we have to write a function called countBs, that takes a string as its only argument and returns the number
//of uppercase "B" characters in the string.


// function countBs(str) {
//     let count = 0;
//     for(i=0; i<str.length; i ++) {
//         if(str[i] == "B") {
//             count ++
//         }
//     }

//     return count

// }


// console.log(countBs("BoBby livesB in a Big bad Bang"))


//Task 61
//In this task we have to write a function called min that takes two arguments and returns their minimum.

// function min(x, y) {

//     return Math.min(x, y)

// }


// console.log(min(2, 5))


//Task 62
//In this task we have to write a function called generateRandomNumber that takes a minimum number and a maximum number
//as arguments and returns a random number between the minimum and maximum values(inclusive).



// function generateRandomNumber(x, y) { 
//    let range = y - x;
//     let random  = Math.floor(Math.random() * (range +1) ) + x  

//     return random
// }
// console.log(generateRandomNumber(5, 10))

//Task 63
//In this task we have to write a function called capitalizeWords which takes a sentence(string) as an argument and returns a new
// sentence where the first letter of each word is capitalized.


// function capitalizeWords(sentence) {
//     let words = sentence.split(" ");
//     let capitalizedWords = words.map(word => {
//         if(word.length > 0) {
//             return word[0].toUpperCase() + word.slice(1).toLowerCase();
//         } else {
//             return word;
//         }
//     })
//     return capitalizedWords.join(" ");
// }


// console.log(capitalizeWords("hello, my name is bob and i am good"))
























