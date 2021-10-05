import NAMES from "./prob22.json";

function main()
{
	let sumScores = NAMES
	.sort()
	.map(name => name.toLowerCase())
	.map((name, indexOrder) =>
		name
		.split("")
		.reduce((acc, curr) => acc + (curr.charCodeAt(0) - 96), 0.0) * (indexOrder + 1))
	.reduce((acc, curr) => acc + curr, 0.0);

	console.log(sumScores);


}

main();