// 1. Wrapper
// 원시값을 필요에 따라 관련된 빌트인 객체로 변환
const number = 123; // number 원시 타입
// number 원시 타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString());
console.log(number); // 다시 number 원시 타입

const text = "text"; // 문자열 원시 타입
console.log(text);
text.length(); // String 객체
text.trim();

// 2. Global
console.log(globalThis);
console.log(this); // this 2가지는 전역객체 (개발자도구-윈도우)
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num)");
console.log(inFinite(1)); // true;

console.log(parseFloat("12.43")); // 12.43 - 숫자로 변환
console.log(parseInt("12.43")); // 12 - 정수 변환

// URL (URI 하위 개념)
// 아스키 문자로만 구성되어야 함 - 한글, 특수문자는 이스케이프 처리
const URL = "https://예지.com";
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL 이 아니라 부분적인 것 사용시 Component 이용
const part = "예지.com";
console.log(encodeURIComponent(part));

// 3. Boolean
const isTrue = new Boolean(true);
console.log(isTrue.valueOf());

// 4. Numbers (static properties)
const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// 5. Math (static properties, method)
console.log(Math.E);
console.log(Math.PI);

console.log(Math.abs(-10));
console.log(Math.ceil(1.4)); // 2: 올림
console.log(Math.floor(1.4)); // 1: 내림
console.log(Math.round(1.7)); // 1: 반올림
console.log(Math.trunc(1.432)); // 1: 정수만 반환
// 최대, 최솟값 찾기
console.log(Math.max(1, 3, 4)); // 4
console.log(Math.min(1, 3, 4)); // 1
// 랜덤값 반환
console.log(Math.random());
// 1~10
console.log(Math.floor(Math.random() * 10 + 1));

// 6. String (static properties)
const textObj = new String("Hello World!!!");
const text = "Hellow World~~~";
console.log(text[0]);
console.log(text.charAt(1));
console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));
console.log(text.includes("tx")); // false

const space = "    space  ";
console.log(space.trim()); // 공백 제거

const longText = "Get to the point";
console.log(longText.split(" ")); // space 로 끊고, 배열로 보여줌

// 7. Date
console.log(new Date());
console.log(Date.now());

const now = new Date();
now.setFullYear(2036);
now.setMonth(10); // 0: 1
console.log(now);
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toLocaleString("en-US"));
console.log(now.toLocaleString("ko-KR"));

// Quiz

// (1) 문자열의 모든 캐릭터 하나씩 출력
const txt = "HELLO YEJI!";

for (let i = 0; i < txt.length; i++) {
  console.log(txt.charAt(i));
}

// (2) 사용자들 id 잘라내 각각의 id를 배열로 보관
const ids = "user1, user2, user3, user4";
const users = ids.split(", ");
console.log(users);

// (3) 1초에 한번씩 시계(날짜포함) 출력
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString("ko-KR"));
}, 1000);
