import { create, all } from 'mathjs'

const math = create(all);

function main()
{
	let validFractions = [];
	//Test all possible fraction of 2-digits which are inferior to 1
	for(let num = 10; num < 100; num++)
	{
		for(let den = num; den < 100; den++)
		{
			if((num !== den) && (num % 10 !== 0 || den % 10 !== 0) && (num % 11 !== 0 && den % 11 !== 0))
			{
				let currFrac = [math.fraction(num, den), num, den];

				for(let digit = 0; digit < 10; digit++)
				{
					//Transform our fraction
					let currSimpleFrac = getCancelDigitFrac(currFrac, digit);

					if(currSimpleFrac[0] !== null && math.equal(currFrac[0],  currSimpleFrac[0]))
					{
						validFractions.push(currFrac);
					}
				}
			}
		}
	}

	console.log(validFractions);
	let res = validFractions.reduce((acc, [frac, num, den] ) => math.multiply(acc, frac), math.fraction(1.0));

	console.log(res);
}

function getCancelDigitFrac([frac, num, den], digit)
{
	let newNum = cancelDigit(num, digit);
	let newDen = cancelDigit(den, digit);
	if(newDen === 0 || (num === newNum && den === newDen))
	{
		return [null, newNum, newDen];
	}
	return [math.fraction(newNum, newDen), newNum, newDen];
}

function cancelDigit(n, digit)
{
	return Number(n.toString().split("").map(Number).filter(e => e !== digit).join(""));
}

main();