// function for encryption/decryption

const math = require("mathjs");

function cryptor (inpArr, key, dec=false) {
  let topRow = key[0];
  let botRow = key[1];
  let keyMat = math.matrix([topRow, botRow]);
  if (dec == true) {
    keyMat = math.inv(keyMat);
  };
  console.log(keyMat);
  let arr = inpArr;
  let arrTwo = [ ];
  for (let subArr of arr) {
    let topRow2 = subArr[0];
    let botRow2 = subArr[1];
    let mat = math.matrix([topRow2, botRow2]);
    let encMat = math.multiply(keyMat, mat);
    let encArr = encMat.toJSON().data;
    arrTwo.push(encArr);
  };
  return arrTwo;
};

export default cryptor;