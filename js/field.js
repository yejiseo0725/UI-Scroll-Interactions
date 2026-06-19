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

// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('EAT!!!');
//     }
//     sleep() {
//         console.log('SLEEP~~~');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('EAT!!!');
//     }
//     sleep() {
//         console.log('SLEEP~~~');
//     }
//     play() {
//         console.log("PLAY@@@");
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹자');
    }
    sleep() {
        console.log('SLEEP~~~');
    }   
}

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color); // 부모생성자 color 전달
        this.ownerName = ownerName;
    }

    play() {
        console.log('놀자-!');
    }
    // 오버라이딩 overriding
    eat() {
        super.eat(); // 부모생성자의 먹자가 먼저 나옴
        console.log('강쥐가 먹어요'); // 추가적인 기능
    }
}

// Animal 을 상속해서 가져옴.
const dog = new Dog('빨강이', '예지');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();

// 카운터
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가하는 카운터
// 카운터 클래스 만들기
class Counter {
  #value;
  constructor(startValue) {
    if(isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  }
}

const counter = new Counter(0);
counter.increment(); // 1 -> API 사용
counter.increment(); // 2
console.log(counter.value);
