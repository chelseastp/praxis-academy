const object1 = {
    a: 'somestring',
    b: 77
  };
  
  for (let [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }