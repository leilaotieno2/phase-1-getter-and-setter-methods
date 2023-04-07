// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter methods
    get diameter() {
      return this.radius * 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter methods
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  const myCircle = new Circle(5);
  console.log(myCircle.diameter); // Output: 10
  console.log(myCircle.circumference); // Output: 31.41592653589793
  console.log(myCircle.area); // Output: 78.53981633974483
  myCircle.diameter = 8;
  console.log(myCircle.radius); // Output: 4
  
  myCircle.circumference = 25;
  console.log(myCircle.radius); // Output: 3.978873577297383
  
  myCircle.area = 50;
  console.log(myCircle.radius); // Output: 3.989422804014327
      