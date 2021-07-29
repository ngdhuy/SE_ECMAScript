/**
 * * JavaScript Snippet - Useful - Part 02
 */

//! difference
//? Trả về các phần tử ở mảng thử nhất mà mảng thứ 2 không có.
const difference = (x, y) => {
  const temp = new Set(y);

  return x.filter((val) => !temp.has(val));
};

difference([1, 2, 3, 4], [1, 2, 5, 6]); // [3, 4]

//! differenceBy
//? Trả về các phần tử ở mảng thử nhất mà mảng thứ 2 không có với điều kiện đã cho
const differenceBy = (x, y, fn) => {
  const temp = new Set(y.map(fn));

  return x.filter((val) => !temp.has(fn(val)));
};

differenceBy([{ a: 1 }, { a: 2 }, { b: 3 }], [{ a: 1 }], (v) => v.a); // [ { a: 2 }, {b: 3} ]

//! digitize
//? Nhận một số làm input và trả về một mảng các chữ số của nó.
const digitize = (n) => [...`${n}`].map((i) => parseInt(i));

digitize(1234); // [1, 2, 3, 4]

//! Drop Elements
//? Return một mảng mới với n phần tử bị remove từ bên trái.
const drop = (arr, n = 1) => arr.slice(n);

drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 5); // []

//! dropRight
//? Return một mảng mới với n phần tử bị remove từ bên phải.
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 5); // []

//! dropRightWhile
//? Return một mảng mới với n phần tử bị remove từ bên phải thỏa mãn điều kiện cho trước.
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);

  return arr;
};

dropRightWhile([1, 2, 3, 4, 5], (n) => n <= 3); // [1, 2, 3]

//! dropWhile
//? Return một mảng mới với n phần tử bị remove từ bên phải thỏa mãn điều kiện cho trước.
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);

  return arr;
};

dropWhile([1, 2, 3, 4, 5], (n) => n > 3); // [4, 5]

//! elementContains
//? Kiểm tra phần tử cha có chưa phần tử con không
const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

elementContains(
  document.querySelector("head"),
  document.querySelector("title")
); // true

//! Filter Duplicate Elements
//? Lọc các phần tử trùng lặp trong mảng
const filterNonUnique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5, 5, 5, 6]); // [1, 3, 6]

//! findKey
//? Return key đầu tiên thỏa mãn điều kiện đã cho.
const findKey = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));

findKey(
  {
    emma: { age: 31, active: false },
    red: { age: 38, active: true },
    taylor: { age: 40, active: true },
  },
  (item) => item["active"]
); // 'red'

//! findLast
//? Return phần tử cuối cùng thỏa mãn điều kiện đã cho.
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], (n) => n % 2 === 0); // 4

//! flatten
//? Làm phẳng một mảng lên đến độ sâu được chỉ định bằng cách sử dụng đệ quy.
const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

//! Get Days Between Dates
//? Lấy ra số ngày giữa 2 ngày được chỉ định
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

getDaysDiffBetweenDates(new Date("2021-05-01"), new Date("2021-05-10")); // 9

//! getStyle
//? Lấy giá trị của CSS cho một phần tử cụ thể.
const getStyle = (el, styleName) => getComputedStyle(el)[styleName];

getStyle(document.querySelector("div"), "font-size"); // '16px'

//! hasClass
//? Kiểm tra xem class này có tồn tại không
const hasClass = (el, className) => el.classList.contains(className);

hasClass(document.querySelector("span.test"), "test"); // true

//! hide
//? Ẩn tất cả các phần tử được chỉ định.
const hide = (...el) => [...el].forEach((e) => (e.style.display = "none"));

hide(document.querySelectorAll("a")); // Hides all <a> elements on the page

//! httpsRedirect
//? Redirect từ HTTP sang HTTPS cụ thể.
const httpsRedirect = () => {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
};

httpsRedirect(); // Nếu bạn đang ở url http://mydomain.com, bạn sẽ được chuyển đến url https://mydomain.com

//! indexOfAll
//? Return về mảng các chỉ mục của phần tử muốn tìm. Nếu phần tử không tồn tại sẽ trả về mảng rỗng
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 2); // [1, 4]
indexOfAll([1, 2, 3, 1, 2, 3], 4); // []

//! insertAfter
//? Chèn một chuỗi HTML vào sau một phần tử cụ thể.
const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML("afterend", htmlString);

insertAfter(document.getElementById("myId"), "<p>Viblo May Fest</p>");
// <div id="myId">...</div> <p>Viblo May Fest</p>

//! insertBefore
//? Chèn một chuỗi HTML vào trước một phần tử cụ thể.
const insertBefore = (el, htmlString) =>
  el.insertAdjacentHTML("beforebegin", htmlString);

insertBefore(document.getElementById("myId"), "<p>Viblo May Fest</p>");
// <p>Viblo May Fest</p> <div id="myId">...</div>

//! intersection
//? Trả về 1 mảng chứa các phần tử tồn tại ở cả 2 mảng đã cho.
const intersection = (a, b) => {
  const s = new Set(b);

  return a.filter((x) => s.has(x));
};

intersection([1, 2, 3, 6], [4, 2, 1]); // [1, 2]

//! intersectionBy
//? Trả về danh sách các phần tử tồn tại trong cả hai mảng sau khi hàm fn được thực thi cho từng phần tử của cả hai mảng.
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));

  return a.filter((x) => s.has(fn(x)));
};

intersectionBy(
  [{ a: 1 }, { a: 2 }, { b: 3 }],
  [{ a: 1 }, { b: 2 }],
  (v) => v.a
); // [ { a: 1 }, {b: 3} ]
