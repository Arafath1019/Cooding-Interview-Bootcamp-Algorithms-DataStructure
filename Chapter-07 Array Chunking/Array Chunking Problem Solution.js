// Given an array and chunk size, divide the array into many subarrays where each subarrays is of length size

function ArrayChunk(array, size){
  if (array.length <= size){
    return [array];
  }

  output = [];

  var x = Math.floor(array.length/size);
  var start = 0;
  var end = size;

  let i = 0;

  while(i<x){
    temp = array.slice(start, end);
    output.push(temp);
    start = end;
    end = end + size;
    i++;
  } 

  if(array.length % size !== 0){
    remain = array.slice(x * size);
    output.push(remain);
  }

  return output;
}

console.log(ArrayChunk([1, 2, 3, 4, 5], 10));