// function arranges an array into an array of arrays
// each array in the array is a square matrix of a given size

function arrayArranger (inArr, arrSize) {
  // input should be a single simple array
  // output should be an array of square matrices of the given size
  let arr = inArr; // input array
  let siz = arrSize; // array size
  
  // maths
  let inLeng = arr.length; // number of characters in input array
  let subArrChars = siz * siz;
  let inRemainder = inLeng % subArrChars;
  let outLeng = inLeng + (subArrChars - inRemainder);
  
  // adds placeholder characters to pad array length
  for (let i = inLeng; i < outLeng; i++) {
    arr.push(0);
  };
  
  function grouper (ungroupedArray, groupingAmount) {
    let ungrouped = ungroupedArray;
    let group = groupingAmount;
    let outputArray = [ ];
    
    while (ungrouped.length > 0) {
      let currentArray = [ ];
      for (let j = 0; j < group; j++) {
        let current = ungrouped.shift();
        currentArray.push(current);
      };
      outputArray.push(currentArray);
    };
    
    return outputArray;
  };
  
  let outArr = grouper(grouper(arr, siz), siz);
  
  return outArr;
};

// export the function
export default arrayArranger;