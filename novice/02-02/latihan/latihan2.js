class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Nama mu sudah cantik sis.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("Chelsea");
  alert(user.name);
  
  user = new User(""); 