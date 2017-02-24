// write a function using es6 syntax called isRightTriangle that accepts three parameters called
// side, base and hypontenuse. The function should return true if 
// side * side + base * base = hypotenuse * hypotenuse 

// STANDARD
function  tri (s, b, h){
  return(s*s) + (b*b) === (h*h);
}
console.log(tri(3,4,5))

// es6
isRightTriangle = (s,b,h) => (s*s) + (b*b) === (h*h);
console.log(isRightTriangle(5,6,7));

// '==' this means that compares the data
// EXAMPLE: '1' == 1 = true
// '===' this means that compares the data and the data type
// Example: '1' === 1 = false, because one is a string and the other is an integer