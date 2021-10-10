function main()
{
	let limit = 1001 * 1001;
	let arrayDiag = [1];
	let increment = 2;

	while(arrayDiag[arrayDiag.length - 1] < limit)
	{
		let count = 0;
		while(arrayDiag[arrayDiag.length - 1] < limit && count < 4)
		{
			arrayDiag.push(arrayDiag[arrayDiag.length - 1] + increment);
			count++;
		}
		increment += 2;
	}

	let sum = arrayDiag.reduce((acc, curr) => acc + curr, 0);
	console.log(arrayDiag);
	console.log(sum);
}

main();