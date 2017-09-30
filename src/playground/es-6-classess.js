class Person {
  constructor(name = 'Anonym', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi i ${this.name}!`;
  }
  getDesc() {
    return `${this.name} is ${this.age} old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDesc() {
    let desc = super.getDesc();

    if (this.hasMajor()) {
      desc += ` The majori is ${this.major}`;
    }

    return desc;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greet = super.getGreeting();

    if (this.homeLocation) {
      greet += ` I'm from ${this.homeLocation}`;
    }
    return greet;
  }
}

const me = new Student("Stefan Jak", 28, 'Copm');
console.log(me.getGreeting());

const me1 = new Traveler("Juka Jak", 18, 'Kazimierz');
console.log(me1.getGreeting());

const me2 = new Student();
console.log(me2.getGreeting());
