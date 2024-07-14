function add(a, b) {
    1 + 80;
}
console.log(add(1,80));


function subtract(c, d) {
    60 - 40;
}
console.log(subtract(60,40));


function multiply(e, f) {
    2 * 3.4;
}
console.log(multiply(2,3.4));


function divide(g, h) {
    5.0 / 2.5;
}
console.divide(add(5.0,2.5));
5.0 / 2.5;


function add(a, b) {
    return  a+ b;    

}

console.log(add(450, 443));


function subtract(c, d) {
    return  c- d;    

}

console.log(subtract(375, 320));


function multiply(e, f) {
    return  e* f;    

}

console.log(multiply(450, 443));


function divide(a, b) {
    return  a/ b;    

}

console.log(divide(7.8, 15.3));


function increment (a) {
    return a + 1
}



function decrement (a) {
    return a - 1
}


function makeInt(n) {
    return parseInt(n);
}

function makeInt(n) {
return parseInt(n, 10);
}

function makeFloat(n) {
    return parseFloat(n);
}

function preserveDecimal(n) {
  return parseFloat(n);
}

let string = "n";
let num = preserveDecimal(2.222);

console.log(num);


function preserveDecimal(n) {
    let parsedFloat = parseFloat(n);
    if ((parsedFloat)) {
        return parsedFloat;
    }
    
  }
  
  let nonNumericString = 'sldkjflksjf';
  let result = preserveDecimal(nonNumericString);
  
  console.log(result);