// JSON
// 서버와 클라이언트(브라우저, 모바일) 간 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
const ellie = {
  name: "ellie",
  age: 20,
  eat: () => {
    console.log("eat");
  },
};

// 직렬화: 객체를 문제열로 변환
const json = JSON.stringify(ellie);
console.log(ellie);
console.log(json); // 문자열로 변환, 함수 미포함

// 역직렬화: 문자열 데이터를 js 객체로 변환
const obj = JSON.parse(json);
console.log(obj);
