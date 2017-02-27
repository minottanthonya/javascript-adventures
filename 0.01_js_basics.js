// Practice For Loop

//1. Write a for loop that will iterate from 0 to 20. For each iteration, 
// it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var i = 0; i <= 20; i ++ ) {
	if (i % 2 === 0) {
		console.log(i + ' is even');
	} else {
		console.log(i + ' is odd');
	}
}

// 2. Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
// it will multiply the number by 9 and log the result. 

var multiplier = 9;
for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}

