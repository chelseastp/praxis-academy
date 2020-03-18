class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = " Ada Kesalahan Validasi";
    }
  }
  
  // Usage
  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new ValidationError("Tidak ada bidang : umur");
    }
    if (!user.name) {
      throw new ValidationError("Tidak ada bidang : nama");
    }
  
    return user;
  }
  
  // Working example with try..catch
  
  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Data tidak valid: " + err.message); 
    } else if (err instanceof SyntaxError) { 
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err;
    }
  }