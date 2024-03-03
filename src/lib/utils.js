export function getResultArrays(marks){
    let pass = marks.filter(m => m >= 50).sort((a, b) => a -b);
    let fail = marks.filter(m => m < 50).sort((a, b) => a -b);
    return {pass, fail};
  }