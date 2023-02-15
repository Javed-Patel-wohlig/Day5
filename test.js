const test = [
  {
    _id: "123asdf",
    name: "chicken",
    price: 100,
  },
  {
    _id: "456asdf",
    name: "beef",
    price: 200,
  },
  {
    _id: "789asdf",
    name: "mutton",
    price: 400,
  },
];


let product = test.find((item) => item._id === "123asdf");
console.log(product)
