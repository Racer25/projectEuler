function isPrime(n)
{
	for(let i = 2, s = Math.sqrt(n); i <= s; i++)
	{
		if(n % i === 0)
		{
			return false;
		}
	}
	return n > 1;
}


function main()
{
	let maxA = -1;
	let maxB = -1;
	let maxPrimeUntil = -1;
	for(let a = -999; a < 1000; a++)
	{
		for(let b = -999; b < 1000; b++)
		{
			let allPrime = true;
			let n = -1;
			let primeUntil = 0;
			while(allPrime)
			{
				n++;
				let res = n*n + a*n + b;
				allPrime = isPrime(res);
				if(allPrime)
				{
					primeUntil++;
				}
			}
			if(primeUntil > maxPrimeUntil)
			{
				maxA = a;
				maxB = b;
				maxPrimeUntil = primeUntil;
			}
		}
	}

	console.log("maxPrimeUntil", maxPrimeUntil);
	console.log("maxA", maxA);
	console.log("maxB", maxB);
	console.log("maxA * maxB", maxA * maxB);
}

main();