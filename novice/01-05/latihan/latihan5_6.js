function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today;
  return Math.round(diff / 1000);
}

getSecondsToday() == 36000 // (3600 * 10)s
console.log ( getSecondsToday() );