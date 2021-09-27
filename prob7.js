function main()
{
	console.log(isPrime(13));
	console.log(isPrime(12));
	console.log(getIthPrime(10001));


}

function getIthPrime(n)
{
	let countIndex = 1;
	let i = 1;
	while(countIndex <= n)
	{
		i++;
		if(isPrime(i))
		{
			countIndex++;
		}
	}

	return i;
}

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

main();