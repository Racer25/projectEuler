import { create, all } from 'mathjs'

const config = {number: 'BigNumber',precision: 256  };
const math = create(all, config);

function produceEPattern(lim)
{
	let patterns = [];
	let count = 1;
	let counter = 1;
	for(let i =1; i <= lim; i++)
	{
		//impair
		if(counter < 2)
		{
			patterns.push(1);
			counter++;
		}
		else
		{
			patterns.push(2*count);
			count++;
			counter = 0;
		}
	}

	return patterns;
}

function computeFracToAdd(pattern, indexElemPat, currIndex)
{
	if(currIndex > indexElemPat)
	{
		return math.bignumber(0.0);
	}
	else
	{
		return math.divide(math.bignumber(1.0), math.add(math.bignumber(pattern[currIndex]), computeFracToAdd(pattern, indexElemPat, currIndex+1)));
	}
}

function getNumAndDenRecurs(a, b, c, pattern, indexElemPat, currIndex)
{
	if(currIndex === indexElemPat)
	{
		return getNumAndDen(a, b, c);
	}
	else
	{
		let newA = c;
		let newB = math.bignumber(1.0);
		let newC = math.bignumber(pattern[currIndex+1]);
		return getNumAndDen(a, b, getNumAndDenRecurs(newA, newB, newC, pattern, indexElemPat, currIndex+1));
	}
}

function getNumAndDen(a, b, c)
{
	let newB = b;
	let newC = c;
	if(newC.length)
	{
		let [numC, denC] = newC;
		newB = math.multiply(denC, b);
		newC = numC;
	}
	let num = math.add(math.multiply(a, newC), newB);
	let den = newC;
	let gcdNumDen = math.gcd(num, den);

	num = math.divide(num, gcdNumDen);
	den = math.divide(den, gcdNumDen);

	return [num, den];
}

function computeNumAndDenToAdd(pattern, indexElemPat, currIndex)
{
	if(currIndex > indexElemPat)
	{
		return math.bignumber(0.0);
	}
	else
	{
		return math.divide(math.bignumber(1.0), math.add(math.bignumber(pattern[currIndex]), computeFracToAdd(pattern, indexElemPat, currIndex+1)));
	}
}

function sumDigit(value)
{
	return value
	.replace(".", "")
	.split("e+")
	.shift()
	.split('')
	.map(Number)
	.reduce(function (a, b) {
		return a + b;
	}, 0);
}

function generateNumeratorsFromPatterns(initValue, pattern)
{
	let fractions = [];
	let a = math.bignumber(initValue);
	fractions.push(a.toString());
	for(let indexElemPat = 0; indexElemPat < pattern.length; indexElemPat++)
	{
		//let newFraction =  math.add(initFraction, computeFracToAdd(pattern, indexElemPat, 0));
		let b = math.bignumber(1.0);
		let c = math.bignumber(pattern[0]);

		let [num, den] = getNumAndDenRecurs(a, b, c, pattern, indexElemPat, 0);

		fractions.push([num.toString(), den.toString()]);
	}
	return fractions;
}

let pattern = produceEPattern(100);
console.log(pattern);

let res = generateNumeratorsFromPatterns(2, pattern);

console.log(res);
console.log(sumDigit(res[res.length-2][0]));



