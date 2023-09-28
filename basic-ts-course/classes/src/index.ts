// class Player {
//   readonly first: string;
//   readonly last: string;
//   public score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secretMethod(): void {
//     console.log("Secret Method!");
//   }
// }

// const elton = new Player("Elton", "Doggo");
// elton.score

class Player {
  // readonly first: string;
  // readonly last: string;
  // private score: number = 0;

  constructor(public first: string, public last: string, protected _score: number) {}

  private secretMethod(): void {
    console.log("Secret Method!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number ) {
    if (newScore < 0) {
      throw new Error("score cannot be negative!");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999999;
  }
}

const elton = new Player("Elton", "Doggo", 100);
elton.fullName;
elton.score;

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public brand: string, public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {

  }

  print() {
    console.log(`${this.color} ${this.brand} jacket`)
   }
}

abstract class Employee {
  constructor(public first: string, public last: string) {

  }

  abstract getPay(): number;
  greet() {
    console.log("Hello!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(public first: string, last: string, private salary: number) {
    super(first, last)
  }
  getPay() {
    return 13;
  }
}

class PartTimeEmployee extends Employee {
  constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
    super(first, last);
  }
  getPay(): number {
    return 91919292;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 900000);
const greg = new PartTimeEmployee("Greg", "Gregory", 23, 90000)