function main()
{
	let current = new Date(1901, 0, 1);
	let end = new Date(2000, 11, 31);

	let count = 0;
	while(current.getTime() !== end.getTime())
	{
		if(current.getDay() === 0 && current.getDate() === 1)
		{
			count++;
		}
		current = addDays(current, 1);
	}

	console.log(count);
}

function addDays(date, days)
{
	let result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

main();