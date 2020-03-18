function f() {
  try {
    alert('ayo mulai');
    return "ini hasilnya";
  } catch (e) {
    /// ...
  } finally {
    alert('mulai membersihkan!');
  }
}

f();