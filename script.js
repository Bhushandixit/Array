// Remove duplicates from the Array

const arr = [6, 9, 15, 6, 13, 9, 11, 15];
console.log(arr);

function removeDuplicates(array) {
  return [... new Set(arr)];
}

console.log(removeDuplicates(arr));


