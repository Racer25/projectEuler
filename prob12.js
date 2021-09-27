function main()
{
	console.log(generateTriangleNumber(2));
	console.log(getNumberDivisors(28));

	let countObj = 500;
	let triNumber = 0;
	let count = 0;
	let i = 0;
	while(count <= countObj)
	{
		triNumber = generateTriangleNumber(i);
		count = getNumberDivisors(triNumber);
		i++;
	}
	console.log(triNumber);
}

function getNumberDivisors(number)
{
	if(number === 1)
	{
		return 1;
	}
	let count = 2;
	for(let i = 2; i < number; i++)
	{
		if(number % i ===0)
		{
			count++;
		}
	}
	return count;
}

function generateTriangleNumber(index)
{
	let res = 0.0;
	for(let i = 1; i <= index; i++)
	{
		res += i;
	}
	return res;
}

main();