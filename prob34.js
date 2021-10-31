import { create, all } from 'mathjs'

const math = create(all);


function main()
{
	let validNumbers = [];
	for(let i = 3; i < 100000; i++)
	{
		let sumFactorials = getAllDigits(i).reduce((acc, curr) => acc + math.factorial(curr), 0);
		if(sumFactorials === i)
		{
			validNumbers.push(i);
		}
	}

	console.log(validNumbers);
	let res = validNumbers.reduce((acc, curr) => acc + curr, 0);
	console.log(res);
}

function getAllDigits(n)
{
	return n.toString().split("").map(Number);
}

main();