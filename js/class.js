// 객체를 쉽게 만드는 템플릿
// 1. 생성자 함수 (고전적)
// 2. 클래스

class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체 생성시 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // static: 정적 프로퍼티, 메서드
  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레베르이 메서드에서는 this 를 참조 불가
    return new Fruit("banana", "BANANA");
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 클래스 레벨의 함수 - 함수 이름으로 접근 가능
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
// apple, orange 는 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "APPLE");
const orange = new Fruit("orange", "ORANGE");
console.log(apple);
console.log(orange);

// example
Math.pow();
Number.isFinite(1);
