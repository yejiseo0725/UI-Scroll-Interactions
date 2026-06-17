// 접근제어자 - 캡슐화 : 외부에서 수정 못하게 숨겨두기
// private(#), public(기본), protected

class Fruit {
  #name;
  #emoji;
  #type = "과일";

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}
const apple = new Fruit("apple", "APPLE");
apple.#name = "ORANGEEE"; // #field 는 외부에서 접근 불가
console.log(apple);

// 접근자 프로퍼티
// getter, setter
class Student {
  constructor(firstNmae, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // [접근 시 호출됨 > . 속성 사용] 함수를 속성처럼 호출할 수 있게 함. 호출 시 () 안써도 됨!
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  // [할당 시 호출됨 > = 사용]
  set fullName(value) {
    console.log('set: ', value);
  }
}

const student = New Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName); // get 
student.fullName = '김철수'; // set 