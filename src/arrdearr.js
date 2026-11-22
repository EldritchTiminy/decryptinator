// converts an array of arrays into a single long simple array

function arrayDerranger (inArr) {
  let arr = inArr;
  let outArr = [ ];
  
  for (let subArr of arr) {
    for (let dubSub of subArr) {
      for (let num of dubSub) {
        outArr.push(num);
      };
    };
  };
  
  return outArr;
};

export default arrayDerranger;