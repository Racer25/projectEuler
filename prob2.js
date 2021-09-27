function main()
{
	console.log(fibo(10));

	let i = 1;
	let res = fibo(i);
	let evenTerms = [];
	while(res < 4000000)
	{
		if(res % 2 ===0)
		{
			evenTerms.push(res);
		}
		i++;
		res = fibo(i);
	}

	let sum = evenTerms.reduce((acc, curr) => acc + curr, 0);
	console.log(evenTerms);
	console.log(sum);
}

//n=1 => 1
//n=2 => 2
//For n>= 3
function fibo(n)
{
	if(n === 1)
	{
		return 1;
	}
	else if (n === 2)
	{
		return 2;
	}
	else
	{
		return fibo(n-1)+ fibo(n-2);
	}
}

main();