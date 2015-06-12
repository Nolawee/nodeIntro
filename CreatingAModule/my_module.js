function hello() {
	return "world";
}

function helloworld() {
	return hello() + ' again';
}


function myPrivateFunction(number) {
	return number * 6;
}

function increment(number) {
	return myPrivateFunction(number);
}

module.exports.helloworld = hello;
module.exports.helloworldAgain = helloworld;
module.exports.increment = increment;