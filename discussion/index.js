let sample = `
	{
		"name" : "Katnis Everdeen",
		"age"  : "20",
		"address" : {
			"city" : "Kansas City",
			"state" : "Kansas"
		}
	}
`;
console.log(sample);

console.log(JSON.parse(sample));


let sampleArr = `
	[
		{
			"email" : "jasonderulo@json.com",
			"password" : "derulojason",
			"isAdmin" : false
		}, 
		{
			"email" : "wewit@gmail.com",
			"password" : "swswsw",
			"isAdmin" : true
		}
	]
`;
console.log(sampleArr);

let parsedSampleArr = JSON.parse(sampleArr);
console.log(parsedSampleArr);
console.log(parsedSampleArr.pop());
console.log(parsedSampleArr);

sampleArr = JSON.stringify(parsedSampleArr);
console.log(sampleArr);


let jsonArr  = `
	[
	"pizza",
	"hamburger",
	"spaghetti",
	"shanghai",
	"hotdog stick on a pineapple",
	"pancit bihon"
	]
`;

console.log(jsonArr);
let parsedJsonArr = JSON.parse(jsonArr);

parsedJsonArr.pop();
parsedJsonArr.push("ice cream");

jsonArr = JSON.stringify(parsedJsonArr);
console.log(jsonArr);


 