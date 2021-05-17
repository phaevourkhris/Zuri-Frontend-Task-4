//Function to Convert Temperature from Fahrenheit to Celsius
function convertFahrToCelsius(fahr){
  coercedFahr = Number(fahr); //Type conversion
  //Making sure not to accept parameters of type "Boolean" or "undefined"
  if(typeof(fahr)!== "boolean" && typeof(fahr)!== "undefined"){
    if(typeof(fahr)==="object"){
      if(Array.isArray(fahr)){// condition for Arrays eg: [1,2,3]
        console.error(`[${fahr}] is not a valid number but a/an Array.`);
        return (`[${fahr}] is not a valid number but a/an Array.`);
      }
      else{//condition for objects eg: {temp:0}
        console.error(`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}.`);
        return (`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}.`);
      }
    }
    else{
      //checking to see that if the result of conversion is NaN or "Falsy"
      if(Number.isNaN(coercedFahr) || (coercedFahr === 0 && typeof(fahr) !== "number")){
      console.error(`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}.`);
      return (`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}.`);
     }
     else{ //for regular numbers
      let celsius = (coercedFahr - 32) * (5 / 9);
      console.log(celsius.toFixed(4));
      return (celsius.toFixed(4));
     }
    }
  }
  else{
    console.error(`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}.`);
    return (`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}.`);
  }
}

convertFahrToCelsius(0);


function checkYuGiOh(n){
  coercedN = Number(n);
  if(Number.isNaN(coercedN)|| n === 0 || coercedN === 0){
      console.error(`invalid parameter: ${JSON.stringify(n)}`);
      return (`invalid parameter: ${JSON.stringify(n)}`);
  }
  
  else{
    let largeArray = [];
    for(let i=1; i<=coercedN; i++){
      if(i%2 ==0){
        let smallArray = [];
        smallArray.push("yu");
        if(i%3 == 0){
        smallArray.push("gi");
        }
        if(i%5 == 0){
        smallArray.push("oh");
        }
        largeArray.push(smallArray.join("-"));
      }
      else if(i%3 ==0){
        let smallArray = [];
        smallArray.push("gi");
        if(i%5 == 0){
        smallArray.push("oh");
        }
        largeArray.push(smallArray.join("-"));
      }
      else if(i%5 ==0){
        let smallArray = [];
        smallArray.push("oh");
        largeArray.push(smallArray.join("-"));
      }
      else{
        largeArray[i-1]= i;
      }
    }
    console.log(largeArray);
    return largeArray;
  }  
}

checkYuGiOh("10");
