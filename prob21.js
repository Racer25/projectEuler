function main()
{
	console.log(d(220));
	let amicableSet= new Set();
	for(let i = 1; i < 10000; i++)
	{
		let amicablePot = d(i);
		if(i === d(amicablePot) && i !== amicablePot)
		{
			amicableSet.add(i);
			amicableSet.add(d(i));
		}
	}

	console.log(amicableSet);

	let sum = [...amicableSet].reduce((acc, curr) => acc + curr, 0);

	console.log(sum);
}

function d(n)
{
	let divisors = [];
	for(let i = n-1; i > 0; i--)
	{
		if(n % i === 0)
		{
			divisors.push(i);
		}
	}
	return divisors.reduce((acc, curr) => acc + curr, 0);
}

main();