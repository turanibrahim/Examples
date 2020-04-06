function merger(firstPart, secondPart)
{
  const mergedArray = firstPart.concat(secondPart);
  let counter = mergedArray.length;
  let newArray = [];

  while(counter)
  {
    let smallestVal = mergedArray[counter-1]
    mergedArray.splice(counter-1);

    mergedArray.forEach( (item, key)  => {
      if(item < smallestVal)
      {
        let temp = item;
        mergedArray[key] = smallestVal;
        smallestVal = temp;
      }
    })
    newArray.push(smallestVal);
    counter--;
  }
  
  return newArray
}

function mergeSort(array) {
  
  if(array.length == 1)
  {
    return array;
  }
  
  let middle = Math.floor(array.length/2);
  let firstPart = array.splice(0,middle)
  let secondPart = array.splice(0)

  firstPart= mergeSort(firstPart)
  secondPart= mergeSort(secondPart)

  return merger(firstPart,secondPart);
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))