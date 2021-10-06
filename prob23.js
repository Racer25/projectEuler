function main()
{
	let initialArray = [...Array(28123).keys()].map(i => i+1);

	let abundantNumbers = initialArray
	.map(i => [i, getProperDivisors(i)])
	.map(([i, divisors]) => [i, divisors, divisors.reduce((acc, curr)=> acc + curr, 0)])
	.map(([i, divisors, sumDivisors]) => [i, divisors, sumDivisors, sumDivisors > i])
	.filter(([i, divisors, sumDivisors, abundant]) => abundant);

	let possibleNumbersWhichCanBeWrittenAsSumAbundant = new Set();
	for(let i = 0; i < abundantNumbers.length; i++)
	{
		for(let j = i; j < abundantNumbers.length; j++)
		{
			possibleNumbersWhichCanBeWrittenAsSumAbundant.add(abundantNumbers[i][0] + abundantNumbers[j][0]);
		}
	}

	console.log(possibleNumbersWhichCanBeWrittenAsSumAbundant);

	possibleNumbersWhichCanBeWrittenAsSumAbundant = [...possibleNumbersWhichCanBeWrittenAsSumAbundant];

	let numbersWhichCannotBeWrittenAsSumAbundant = initialArray.filter(e => !possibleNumbersWhichCanBeWrittenAsSumAbundant.includes(e));

	console.log(numbersWhichCannotBeWrittenAsSumAbundant.reduce((acc, curr) => acc + curr, 0));
}

function getProperDivisors(number)
{
	let divisors = [1];
	for(let i = 2; i < number; i++)
	{
		if(number % i === 0)
		{
			divisors.push(i);
		}
	}
	return divisors;
}

main();