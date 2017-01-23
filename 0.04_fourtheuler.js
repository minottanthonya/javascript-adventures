// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
function get_highest_palindrome(high, low) {
  var highest = 0;
  for(var i = high; i >= low; i--) {
	for(var j = high; j >= low; j--) {
      sum = i * j;
      if(sum <= highest) {
        break;
	  }
      if(is_palindrome(sum.toString())) {
        highest = max(highest, sum);
	  }
    }
  }
  return highest;
}

function reverse(string) {
  var array = string.split('').reverse();
  var out   = '';
  for(key in array) {
	out += array[key];
  }
  return out;
}

function max(a,b) {
  if(a > b) {
	return a;
  }
  return b;
}

function is_palindrome(string) {
  return string == reverse(string);
}

console.log(get_highest_palindrome(999, 100));