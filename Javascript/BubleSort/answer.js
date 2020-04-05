function bubbleSort(array) {

  for(var i = 0; i < array.length; i++)
  {
    for(var k = 0; k < (array.length-i);k++)
    {
      if(array[k+1] < array[k])
      {
        let tempValue = array[k+1];
        array[k+1] = array[k]
        array[k] = tempValue;
      }
    }
  }
  return array;
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
