/**
 * * JavaScript Snippet - Useful - Part 03
 */

//! isAnagram
//? Kiểm tra một chuỗi cụ thể có phải là một ký tự đảo ngữ với một chuỗi khác hay không
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
      
  return normalize(str1) === normalize(str2);
};

isAnagram('sport', 'opstr'); // true
isAnagram('sport', 'opstra'); // flase

//! isBrowser
//? Kiểm tra môi trường đang chạy hiện tại có phải là trình duyệt hay không. Tránh lỗi khi chạy front-end trên server (Node)
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)

//! isBrowserTabFocused
//? Kiểm tra tab của trình duyệt có đang được focus không.
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true

//! isLowerCase
//? Kiểm tra chuỗi có phải chữ thường không
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a1@$'); // true
isLowerCase('aA@123'); // false

//! isUpperCase
//? Kiểm tra chuỗi có phải chữ in hoa không
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A1@$'); // true
isLowerCase('aA@123'); // false

//! isNil
//? kiểm tra một giá trị là null hay undefined.
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
isNil(1); // false

//! maxN
//? Return n phần tử lớn nhất từ một mảng. Nếu n lớn hơn hoặc bằng độ dài của mảng, nó sẽ trả về danh sách ban đầu được sắp xếp theo thứ tự giảm dần.
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]

//! minN
//? Return n phần tử nhỏ nhất từ một mảng. Nếu n lớn hơn hoặc bằng độ dài của mảng, nó sẽ trả về danh sách ban đầu được sắp xếp theo thứ tự tăng dần.
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [1]
maxN([1, 2, 3], 2); // [1,2]

//! radsToDegrees
//? Convert từ radian sang độ.
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90

//! Random mã màu Hexadecimal
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // #3c3834

//! randomIntegerInRange
//? Random một số nguyên ngẫu nhiên trong một phạm vi được chỉ định.
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 4

//! randomNumberInRange
//? Random một số ngẫu nhiên trong một phạm vi được chỉ định.
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 8.678929973625086

//! scrollToTop
//? Cuộn lên đầu trang hiện tại.
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();

//! setStyle
//? Set thuộc tính css
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// Thẻ <p> đầu tiên sẽ có font-size là 20px

//! clone
//? Clone 1 object
const clone = obj => Object.assign({}, obj);

const a = { x: 'a', y: 1 };
const b = clone(a);
console.log(b); // { x: 'a', y: 1 }

//! sleep
//? Delay thực thi một hàm không đồng bộ bằng cách đưa vào trạng thái ngủ.
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm gonna sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}

//! smoothScroll
//? Cuộn đến phần tử được gọi
const smoothScroll = element => document.querySelector(element).scrollIntoView({
  behavior: 'smooth'
});

smoothScroll('#myId'); // scroll đến id là myId
smoothScroll('.myClass'); // scroll đến phần tử đầu tiên có class là myClass

//! sortCharactersInString
//? Sắp xếp các ký tự trong một chuỗi theo thứ tự bảng chữ cái.
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('protocol'); // 'cloooprt'

//! stripHTMLTags
//? Xóa các thẻ html trong chuỗi
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>viblo</em> <strong>may</strong> <i>fest</i></p>'); // 'viblo may fest'

//! splitLines
//? Tách một chuỗi nhiều dòng thành một mảng các dòng.
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis viblo\nmay\nfest.\n'); // ['This', 'is viblo', 'may', 'fest.' , '']

//! stripHTMLTags
//? xóa các thẻ HTML/XML ra khỏi một chuỗi.
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>Viblo</em> <strong>May Fest</strong></p>'); // 'Viblo May Fest'

//! sum
//? Tính tổng của hai hoặc nhiều số hoặc mảng.
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10

//! take
//? Return một mảng với n các phần tử bị loại bỏ từ mảng ban đầu
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3, 4], 2); // [1, 2]
take([1, 2, 3, 4], 0) // []
take([1, 2, 3, 4], 4) // [1, 2, 3, 4]

//! timeTaken
//? Tính thời gian cần thiết để thực thi một hàm.
const timeTaken = callback => {
  console.time('timeTaken');
  
  const fn = callback();
  console.timeEnd('timeTaken');
  
  return fn;
};

timeTaken(() => Math.sqrt(999)); // 31.606961258558215, (logged): timeTaken: 0.053955078125ms

//! union
//? Tạo một mảng không bị lặp các phần tử từ hai mảng đã cho ban đầu.
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3, 3], [4, 3, 2, 5]); // [1, 2, 3, 4, 5]

//! uniqueElements
//? Lấy các phần tử không trùng nhau trong một mảng
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 3, 3, 4, 4, 5, 5]); // [1, 2, 3, 4, 5]

//! validateNumber
//? Kiểm tra một giá trị có phải là một số hay không.
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('1'); // true
validateNumber(1); // true
validateNumber(0); // true
validateNumber(-1.3); // true
validateNumber('a'); // false
validateNumber(null); // false
validateNumber(undefined); // false
validateNumber(NaN); // false