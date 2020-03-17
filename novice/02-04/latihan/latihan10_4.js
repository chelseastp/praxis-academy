async function f() {
    let response = await fetch('http://no-such-url');
  }
  
  // f() becomes a rejected promise
  f().catch(alert); // TypeError: failed to fetch // (*