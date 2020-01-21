// Reverse
function reverseArrayInPlace(array) {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) 
      [array[i], array[j]] = [array[j], array[i]];
  }
  
  const a = [1,2,3,4,5];
  reverseArrayInPlace(a);
  console.log(a);

// Rotate
function rotateArr(arr, shiftBy)
{
  console.log('original array:', arr);

  console.log('offset:', shiftBy);
  
 
  var temp = 0;

  if (shiftBy > 0)
  {
    
    for (var i = 0; i < shiftBy; i++)
    {
     
      for (var j = arr.length; j >= 1; j--)
      {
        arr[j] = arr[j - 1];
      }
      
      temp = arr[arr.length - 1];
      
     
      arr.length = arr.length - 1;
      
      
      arr[0] = temp;
    }
  }
  else if (shiftBy < 0)
  {
    
    for (var k = 0; k < Math.abs(shiftBy); k++)
    {
      temp = arr[0];
      for (var l = 0; l < arr.length - 1; l++)
      {
        arr[l] = arr[l + 1];
      }
      arr[arr.length - 1] = temp;
    }
  }
  console.log('offset array:', arr);
}

var arr1 = [1, 2, 3];
rotateArr(arr1, 1); 

var arr2 = [2, 3, 4, 5];
rotateArr(arr2, 2); 

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rotateArr(arr3, 5); 

var arr4 = [1, 2, 3, 4];
rotateArr(arr4, -2); 

var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
rotateArr(arr5, -5); 

// Filter Range
function filterRange(arr, min, max){
    newArr = [];
    for (i = min; i < max; i ++){
      newArr.push(arr[i]);
    }
    return newArr;
  }


// Concat
function concat(arr1, arr2){
  let newArr = [arr1 +"," + arr2];
  return newArr;
}

// Skyline Heights
function skyline(arr){
  newArr = [];
  for (i = 0; i < arr.length -1; i ++){
    if (arr[i] > 0){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

