function myFunc(theObject) {
  theObject.brand = "Samsung";
}

var myphone= {
  brand: "Samsung",
  model: "Galaxy A6+",
  year: 2018
};

console.log(myphone.brand);

myFunc(myphone);