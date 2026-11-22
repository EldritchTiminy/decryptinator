// takes an input array of numbers and a cypher
// and converts the number values back to letters

function detrixify (inArr, alphCyph) {
  let arr = inArr;
  let cyph = alphCyph;
  let outStr = "";
  let cleanRun = 1;
  
  for (let num of arr) {
    outStr += cyph[num];
  };
  
  let outLen = outStr.length - 1;
  
  while (cleanRun == 1) {
    if (outStr.charAt(outLen) == "-") {
      outStr = outStr.slice(0, -1);
      outLen = outStr.length - 1;
    } else {
      cleanRun = 0;
    };
  };
  
  return outStr;
};

export default detrixify;