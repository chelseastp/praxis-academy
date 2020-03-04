function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
  }
  
  var gen = logGenerator();
 
  gen.next();             // 0
  gen.next('aurora');    // 1 aurora
  gen.next('cinderella'); // 2 ciderella
  gen.next('ariel'); // 3 ariel