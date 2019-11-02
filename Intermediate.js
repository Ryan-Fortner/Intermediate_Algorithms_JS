//Part I
// 1. Sigma
function sigma(num){
    var sum = 0;
    for(i = 1; i <= num; i++){
        sum = sum + i;
    }
    return sum;
}

//2. Factorial
function factorial(num){
    var product = 1;
    for(var i = 1; i <= num; i++){
        product = product * i;
    }
    return product;
}

//3. Fibonacci
function fibonacci(n){
   if (n <=1){
       return n;
   }
   fib = 1;
   fibPrev = 1;
   for(var i = 2; i < n; i++){
       var temp = fib;
       fib += fibPrev;
       fibPrev = temp;
   }
   return fib;
}

//4. Array: Second-to-Last
function returnSecondLast(arr){
    if (arr.length < 2){
        return null;
    }
    else{
        return ((arr.length +1) - 2);
    }
}

//5.Array: Nth-to-Last
function returnFromEnd(arr, n){
    if(n > arr.length){
        return null;
    }
    else{
    return ((arr.length + 1) - n);
    }
}

//6. Array: Second-Largest
function secondLargest(arr){
    if(arr.length < 2){
        return null;
    }
    else{
        var max = arr[0];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > max){
                secondMax = max;
                max = arr[i];
            }
        }
    }
    return secondMax;
}

//7. Double Trouble
function doubleTrouble(arr){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        newArray.push(arr[i], arr[i]);
    }
    return newArray;
}

//Fibonacci number with recursion
function Fib(n){
    if(n == 0 || n==1){
        return n;
    }
    return Fib(n-2) + Fib(n-1);
}

//Recursive Fill
function fill(x,y,original_color, color)
		{
			if(y<0 || y>=world.length || x<0 || x>=10)
				return false;
			
			if(world[y][x] != original_color)
				return false;
			world[y][x] = color;
			fill(x,y-1,original_color, color);
			fill(x,y+1,original_color, color);
			fill(x-1,y,original_color, color);
			fill(x+1,y,original_color, color);
			drawWorld();
		}
