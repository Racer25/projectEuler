import { create, all } from 'mathjs'

const config = {number: 'BigNumber',precision: 4096 };
const math = create(all, config);

function main()
{
	let [imax, maxDecimal, maxPattern, maxLength] = [0, math.bignumber(1), "", -1];
	for(let i = 2; i <= 1000; i++)
	{
		let [denominator, decimal, pattern, patternLength] =
			findPatternLength(math.divide(math.bignumber(1), math.bignumber(i)), i, 3);
		if(patternLength > maxLength)
		{
			[imax, maxDecimal, maxPattern, maxLength] = [denominator, decimal, pattern, patternLength];
		}
	}

	console.log([imax, maxDecimal, maxPattern, maxLength]);
}

function findPatternLength(decimal, n, numberVerification)
{
	let stringAfterPoint = decimal
	.toString()
	.split(".")
	.pop();

	//Initialisation
	let sizeConsidered = 1;
	let patternFound = false;
	let pattern = "";

	while(!patternFound)
	{
		let indexPattern = 0;
		while(!patternFound && indexPattern < sizeConsidered)
		{
			let sizePattern = sizeConsidered - indexPattern;

			let potentialPat = stringAfterPoint.substr(indexPattern, sizePattern);
			let count = 0;
			let startingPoint = indexPattern + sizePattern;
			for(let i = 0; i < numberVerification; i++)
			{
				let stringToVerify = stringAfterPoint.substr(startingPoint, sizePattern);
				if(potentialPat === stringToVerify)
				{
					count++;
					startingPoint += sizePattern;
				}
			}
			if(count === numberVerification)
			{
				patternFound = true;
				pattern = potentialPat;
			}
			indexPattern++;
		}
		indexPattern = 0;
		sizeConsidered++;
	}

	return [n, decimal, pattern, pattern.length];
}

main();