/**
 * * String in ES6
 */

console.clear();

//? Define string in ES6
let a = "Hello world!!!";
console.log(a);

let num = 123;
let b = num.toString();
console.log("string of", num, "is" , b);

let c = 'Hello \t Mr Buoi!!!\nToday is Friday';
console.log(c);

let d = "I'm a Teacher";
console.log(d);

let e = 'You\'re a Student';
console.log(e);

//? Define long or multiple lin in String
let f = "He is call 'Johnny'. \
He is a worker in my factory.";
console.log(f);

let g = "She is Marry." + 
"She is a student in my university."
console.log(g);

//? String template
let value = 200; 
let height = 1.65;
let sen = `I am tall ${height}cm. I have ${value} dollars.`;
console.log(sen);
let text = String.raw`I am tall ${height}cm.\nI have ${value} dollars.`;
console.log(text);
console.log("------------------------------------");

//? String Methods
let str = "      The School of Science and Technology (SST) department wants to design an automated system that manages the internships of its students. Every SST course has a code, a name and number of credits.";
console.log(str);
console.log("------------------------------------");
str = str.trim();   // fix string: remove blank at head or end of string
console.log(str);
console.log("------------------------------------");
//! UpperCase or LowerCase of string
console.log(str.toUpperCase());
console.log("------------------------------------");
console.log(str.toLowerCase());
console.log("------------------------------------");

//! Get character at index
console.log(str[2]);
console.log(str.charAt(2));
console.log(str.charCodeAt(2));     // Return ASCII of character at 2

//! Get string length
console.log("Length of string is ", str.length, "Characteres");

//! Joins two string
let str_1 = "FIND ALL Student of SST.";
let str_2 = str_1.concat(" ", str);
console.log("------------------------------------");
console.log(str_2);

//! Find index of Substring
let keyword = "SST"; 
console.log("Keyword", keyword, " is ", str.indexOf(keyword));
console.log("Keyword", keyword, " is second index at ", str.indexOf(keyword, 50));

//! Find index of Subtring without upper-case or lower-case
console.log("Keyword", keyword, " is ", str.indexOf('sst'));
console.log("Use search('sst') to find substring: ", str.search(/sst/i));

//! Extract characters from string
console.log("------------------------------------");
console.log(str.substring(4, 10));  // substring(start_index, end_index)
console.log(str.substr(4, 7));      // substr(start_index, length of substring)

//! Replace string
console.log(str.replace("SST", "HCMUS"));

//! Split a string to array of substring
let arr_str = str.split(" ");
console.log(arr_str);

//! Extract parts of String
let res = str.slice(4, 10);
console.log(res);

//! Insert and Remove character in string
let arr_char = str.split(" ");
arr_char.splice(1, 0, "MY");
let new_str = arr_char.join(" ");
console.log(new_str);
console.log("------------------------------------");
arr_char.splice(1, 3);
new_str = arr_char.join(" ");
console.log(new_str);