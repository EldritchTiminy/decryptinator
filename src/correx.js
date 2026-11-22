// steps through the matrix and corrects each number for rounding errors

function correx (inVal) {
  let val = inVal;
  let result;
  if (typeof val == "number") {
    result = Math.round(val);
  } else if (typeof val == "object") {
    result = []
    for (let element of val) {
      result.push(correx(element));
    };
  };
  return result;
};
export default correx;