var obj = {
  data: [
    {
      name: "Rice",
      quantity: 2,
      price: 60,
    },
    {
      name: "Dal",
      quantity: 3,
      price: 50,
    },
    {
      name: "Salt",
      quantity: 1,
      price: 20,
    },
  ],
  total: function () {
    var sum = 0;
    for (var i = 0; i < this.data.length; i++) {
      sum = sum + this.data[i].quantity * this.data[i].price;
    }
    return sum;
  },
};
var result = obj.total();
console.log(result);
