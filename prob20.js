import { create, all } from 'mathjs'

const config = {number: 'BigNumber',precision: 256  };
const math = create(all, config);

function main()
{
	let factorial100 = math.bignumber(1);

	for(let i = 100; i >0; i--)
	{
		factorial100 = math.multiply(i, factorial100);
	}



	console.log(factorial100);

	let sum = factorial100
	.toString()
	.replace(".", "")
	.split("e+")
	.shift()
	.split("")
	.map(Number)
	.reduce((acc, curr) => acc + curr, 0);

	console.log(sum);
}

main();