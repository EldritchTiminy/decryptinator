// takes a string and arranges it into an array

function matrixify (inStr, alphCyph, typ="str") {
  // input should be a string and a cipher
  // output should be an array of numbers
  let str = inStr; // input string
  let cyph = alphCyph; // input cypher
  let outArr = [ ];
  
  // looping through the input string
if (typ == "key") {
  let tempOut = []
  for (let num of str) {
    tempOut.push(num);
  };
  let outSize = Math.sqrt(tempOut.length);
  let counter = 0;
  for (let i = 0; i < outSize; i++) {
    let row = [ ]
    for (let j = 0; j < outSize; j++) {
      row.push(tempOut[counter])
      counter++;
    };
    outArr.push(row);
  };
} else {
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i]; // current letter in the string
    console.log(typeof currentLetter);
    // looping through the cypher
    for (let j = 0; j < cyph.length; j++) {
        
        // check if current letter in the cypher matches
        if (cyph[j] == currentLetter) {
          
          // add the index of the current cypher character
          outArr.push(j);
        };
      };
    };
  };
  
  // return the array of numbers
  return outArr;
};

// export the function
export default matrixify;