function pairwise(arr, arg) {
  let indices = [];
  let counter = 0;

  while(arr.length > counter)
  {
    if(!indices.includes(counter))
    {
      for(let i = 0;i<arr.length;i++)
      {
        if(i !== counter && !indices.includes(i))
        {
          if(((arr[counter] + arr[i]) == arg) && !indices.includes(counter))
          {
            indices.push(counter)
            indices.push(i)
          }
        }
      }
    }
    counter++;
  }
  let result;

  if(indices.length > 0)
  {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    result = indices.reduce(reducer)
  }
  else
  {
    result = 0;
  }
  return result
}

pairwise([], 100);
