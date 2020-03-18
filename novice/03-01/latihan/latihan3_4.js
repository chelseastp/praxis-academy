function f() {
  try {
    alert('mulai');
    throw new Error("ada kesalahan");
  } catch (e) {
    // ...
    if("tidak dapat menangani kesalahan") {
      throw e;
    }

  } finally {
    alert('mulai membersihkan!')
  }
}

f();