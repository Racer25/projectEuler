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
	let primes = [];

	for(let i = 0; i < 2000000; i++)
	{
		if(isPrime(i))
		{
			primes.push(i);
		}
	}

	let sum = primes.reduce((acc, curr) => acc + curr, 0.0);

	console.log(sum);
}

main();