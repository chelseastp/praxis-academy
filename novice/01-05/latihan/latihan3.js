function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Chelsea", "Raisa", "Chelsea", "Raisa",
  "Chelsea", "Raisa", "Chelsea", "Raisa"
];

console.log ( unique(values) );