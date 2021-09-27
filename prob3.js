function main()
{
	console.log(primeFactors(600851475143 ));
}

function primeFactors(N)
{
	let factors = [];
	let p = 2;
	while(N >= p*p)
	{
		if(N % p ===0)
		{
			factors.push(p);
			N /= p;
		}
		else
		{
			p++;
		}
	}
	factors.push(N);

	return factors;
}

main();