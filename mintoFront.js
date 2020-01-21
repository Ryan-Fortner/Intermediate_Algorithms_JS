function mintoFront(arr){
    let min = arr[0];
    let new_arr = [];
    for(var i=0; i<arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      } 
    }
    console.log("min value: ", min);
    new_arr[0] = min;
    for(var i=0; i<arr.length; i++){
      if (arr[i] != min){
        new_arr.push(arr[i]);
      }
    }
    console.log(new_arr);
    return new_arr;
  }
mintoFront([4,2,1,3,5]);