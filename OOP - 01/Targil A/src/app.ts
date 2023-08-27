// With God's Help

// 1
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(10, 20);
console.log(myRect.area());

// 2
class Square extends Rectangle {
  side: number;
  constructor(side: number) {
    super(side, side);
    this.side = side;
  }
  area(): number {
    return this.side ** 2;
  }
}

const mySquare = new Square(10);
console.log(mySquare.area());

// 3

class Shape {
  constructor() {}
  info(): string {
    return "This is a shape!";
  }
}

class RectangleV2 extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
  info(): string {
    return "This is a rectangle!";
  }
}
class ColoredRectangle extends RectangleV2 {
  color: string;
  constructor(width: number, height: number, color: string) {
    super(width, height);
    this.color = color;
  }
  info(): string {
    return `This is rectangle filled with a ${this.color} color.`;
  }
}

const myColoredRectangle = new ColoredRectangle(10, 20, "red");
console.log(myColoredRectangle.info());

// 4
class RectangleV3 extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
  info(): string {
    return "This is a rectangle!";
  }
  scale(times: number) {
    this.width = this.width * times;
    this.height = this.height * times;
    return this;
  }
  static newRectFromTwoOtherRectangles(
    object1: RectangleV3,
    object2: RectangleV3
  ) {
    const newWidth = object1.width + object2.width;
    const newHeight = object1.height + object2.height;
    const newRect = new RectangleV3(newWidth, newHeight);
    return newRect;
  }
}

const newRect2 = new RectangleV3(10, 20);
newRect2.scale(2);
console.log(newRect2.width, newRect2.height);
const newRect3 = RectangleV3.newRectFromTwoOtherRectangles(newRect2, newRect2);
console.log(newRect3);

// 5

class ShapeV2 {
  constructor() {}
  draw() {
    return "Drawing a shape.";
  }
}

class Triangle extends ShapeV2 {
  constructor() {
    super();
  }
  draw() {
    return "Drawing a triangle.";
  }
}
class Circle extends ShapeV2 {
  constructor() {
    super();
  }
  draw() {
    return "Drawing a circle.";
  }
}
class SquareV2 extends ShapeV2 {
  constructor() {
    super();
  }
  draw() {
    return "Drawing a square.";
  }
}
const squareV2 = new SquareV2();
const circle = new Circle();
const triangle = new Triangle();

console.log(triangle.draw(), circle.draw(), squareV2.draw());
