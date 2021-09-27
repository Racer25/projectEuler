function main()
{
	let sumOfSquare = 0;
	for(let i = 1; i <= 100; i++)
	{
		sumOfSquare += i*i;
	}

	let squareOfSum = 0;
	for(let i = 1; i <= 100; i++)
	{
		squareOfSum += i;
	}
	squareOfSum = squareOfSum * squareOfSum;

	console.log(-sumOfSquare + squareOfSum);
}
main();