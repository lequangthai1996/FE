
let myMonth = 6;
let monthName = '';
function getMonthName(mo) {
  mo = mo - 1;
  let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  if(month[mo]) {
    return month[mo];
  } else {
    throw 'InvalidMonthNo';
  }
}

try {
  this.monthName = getMonthName(myMonth);
} catch (e) {
  this.monthName = 'unknown';
  console.log(e);
}