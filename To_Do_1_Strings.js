// Remove Blanks
function removeBlanks(){
    let funStr=" Pl ayTha tF u nkyM usi c ";
    let noBlanks = funStr.split(" ");
    console.log(noBlanks.join(""));
}
// Get Digits
function getDigits(str){
    var newStr = "";
    for(var i=0; i<str.length; i++){
      console.log(str.charCodeAt(i));
      if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){
        newStr = newStr + str[i];
      }
    }
    return parseInt(newStr);
  }
  
  getDigits(str);

// Acronyms
function acronyms(string){
    var abbrev = string.match(/\b([A-Z])/g).join('');
    return abbrev;
}

// Count Non-Spaces
function countNonSpace(string){
    wordArray = string.split(" ");
    for (i = 0; i < wordArray.length; i ++){
        console.log(wordArray [i].split(""));
    }   
}

// Remove Shorter Strings
function removeShort(string, maxlength){
    wordArray = string.split(" ");
    console.log(wordArray);
    newArr = [];
    count = 0;
    for (i = 0; i < wordArray.length; i ++){
        if (wordArray[i].length > maxlength){
            newArr.push(wordArray[i])
        }
    }
    return newArr;
}