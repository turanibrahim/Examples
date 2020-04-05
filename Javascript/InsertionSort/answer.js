function insertionSort(array) {
  let newArray = [];

  array.forEach( item => {
    let counter = newArray.length;
    
    if(newArray.length == 0)
    {
      newArray.push(item);
    }
    else
    {
      while(counter)
      {
        if(newArray[counter-1] > item)
        {
          if(counter == 1)
          {
            newArray.shift(item);
          }
          else{
            counter--;
          }
        }
        else
        {
          newArray.splice(counter, 0, item);
          break;
        }
      }
    }
  })
  return newArray;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
