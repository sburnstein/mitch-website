// document.write("Hello World!");
// console.log("Hi my name is Sarah!");

// var firstName = "Mitch";
// // console.log(firstName);

// var greeting = "Hello" + " " + "World";
// // console.log(greeting);
// // console.log(greeting.length);
// console.log(greeting.toLowerCase());
// console.log(greeting);
// console.log(greeting.includes("e"));
// console.log(greeting.indexOf("e"));
// console.log(greeting.substring(1,4));

// var name = prompt("Tell me your name!");
// document.write("<h1>Hello, " + name + ", Welcome to my site!</h1>")

// var number = 4;
// // console.log((number * 2) + 3 / 2);

// function add {
// 	var num1 = parseFloat(prompt("Please give me a number!"));
// 	var num2 = parseFloat(prompt("Now give me a 2nd number!"));
// 	var sum = num1 + num2;
// 	console.log(sum);
// }


// number = number + 1;

// console.log(number)

// function sayhello(name) {
// 	console.log("Hello, " + name)
// }

// sayhello("Mitch");

// function fullName(firstName,lastName) {
// 	var fullName = (firstName + " " + lastName);
// 	console.log(fullName)
// }

// fullName("Sarah","Burnstein")

// var number = 4;

// function increment(number) {
// 	number = number + 1
// 	console.log(number)
// }

// if ("hey"==="Hey") {
// 	console.log("True")
// } else if (4 == 4) {
// 	console.log("This is true!");
// } 	else {
// 	console.log("This is false!")
// }


// function beginJoke() {
// 	var beginJoke = prompt("Tell me a joke!");
// 	if (beginJoke === "Knock Knock" || "knock knock");
// 		console.log("Who's there?");
// }

// beginJoke()

// function odd(number) {
// 	if (number % 2 === 1) {
// 	console.log("odd"); 
// 	} else {
// 	console.log("even")
// 	}
// }

// odd(3)



// function logNumbers(number){
// 	var counter = 1;
// 	while (counter < number) {
// 		console.log(counter);
// 		counter += 1;
// 	}
// }
// // logNumbers (1000)

// for (var counter = 1; counter <= 10; counter += 1) {
// console.log(counter)
// }

function increment(number) {
	for (var i = 0; i <= number; i += 1)
		console.log(i)
}
increment(10)

function letters(string) {
	for (var i = 0; i < string.length; i += 1) {
		console.log(string.charAt(i));
	}

}

letters("help me")
