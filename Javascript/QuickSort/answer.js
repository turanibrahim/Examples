function quickSort(array) {

  function subSort(array)
  {
    let lesserArr = []
    let greaterArr = []
    let subArray = [];

    const pivot = array[0];
    array.splice(0,1);

    array.forEach( item  => {
      if(item > pivot)
      {
        greaterArr.push(item);
      }
      else
      {
        lesserArr.push(item);
      }
    })

    if(lesserArr.length > 1)
    {
      lesserArr = subSort(lesserArr);
    }
     if(greaterArr.length > 1)
    {
      greaterArr = subSort(greaterArr);
    }

    lesserArr.push(pivot)
    subArray = lesserArr.concat(greaterArr);
    return subArray
  }

  return subSort(array);
}

// test array:
quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
