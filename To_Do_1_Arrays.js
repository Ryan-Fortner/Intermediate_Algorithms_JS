function pushFront (arr, val){
    for (var i = arr.length -1; i >=0; i--){
        arr[i+1] = arr[i];
        }
        arr[0] = val;
        console.log(arr)
};

function popFront(arr){
	const newArray1= [];
	for (var i = arr.length - 1; i >= 0; i --){
		newArray1.push(arr[i]);
    }
    newArray1.pop();
    const newArray2=[];
    for (var i = newArray1.length -1; i >=0; i--){
        newArray2.push(newArray1[i]);
    }
    console.log(newArray2);
}

function insertAt(arr,index,val){
    for(var i = 0; i <= arr.length; i++){
        if(i = index){
            arr[i] = val;
        }
        else{
            continue;
        }
        return arr;
    }
}

function removeAt(arr,index){
    const newArray1 = [];
    for(var i =arr[0]; i <=arr.length; i++){
        if (i !==(index+1)){
            newArray1.push(i);;
        }
        else{
            continue;
        }
    }
    newArray1.pop();
    for (var i = newArray1.length+2; i < arr.length+2; i++){
        newArray1.push(i);
    }
    return newArray1;
}