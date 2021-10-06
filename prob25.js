import { create, all } from 'mathjs'

const config = {number: 'BigNumber',precision: 1096  };
const math = create(all, config);

function main()
{
	let table = fiboInfinite();

	console.log(table);
	//6, 5, 5, 4, 5, 5
}

function fiboInfinite()
{
	let table = [math.bignumber(1), math.bignumber(1)];

	let numberDigit = getNumberDigit(table[table.length - 1]);
	let i = 2;
	while(numberDigit < 1000)
	{
		table.push(math.add(table[table.length - 1], table[table.length - 2]));
		numberDigit = getNumberDigit(table[table.length - 1]);
		i++
	}

	return [i, table[table.length - 1]];
}

function getNumberDigit(e)
{
	return e
	.toString()
	.replace(".", "")
	.split("e+")
	.shift()
	.split("")
	.reduce((acc, curr) =>acc + 1, 0);
}


main();