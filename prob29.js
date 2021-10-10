function main()
{
	let uniqueTerms = new Set();
	for(let a = 2; a <= 100; a++)
	{
		for (let b = 2; b <= 100; b++)
		{
			uniqueTerms.add(Math.pow(a, b));
		}
	}

	console.log(uniqueTerms);
	console.log(uniqueTerms.size);
}

main();