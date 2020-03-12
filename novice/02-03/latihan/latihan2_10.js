var people = [
  { name: "Raisa", age: 30 },
  { name: "Maudy", age: 27 },
  { name: "Chelsea", age: 20 }
];

var peopleSentences = [];

for (var i = 0; i < people.length; i++) {
  var sentence = people[i].name + " berumur " + people[i].age + " tahun ";
  peopleSentences.push(sentence);
}

console.log(peopleSentences);