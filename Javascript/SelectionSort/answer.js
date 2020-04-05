function selectionSort(array) {
  for(var i = 0; i< array.length;i++)
  {
    let tempVal = array[i];
    for(var k = i.valueOf(); k < (array.length); k++)
    {
      if(array[k] <= tempVal)
      {
        tempVal = array[k];
        array[k] = array[i];
        array[i] = tempVal;
      }
    }
  }
  console.log(array)
  return array;
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
