var rectangle = {
  width: 10,
  height: 20,
  getArea: function () {
    return this.width * this.height;
  },
  getPerimeter: function () {
    return 2 * (this.width + this.height);
  },
};
var area = rectangle.getArea();
var perimeter = rectangle.getPerimeter();
console.log(area);
console.log(perimeter);
