function main()
{
	let i = 20;
	let arrDiv = Array.from(Array(20).keys()).map(i => i+1);
	let notFound = true;
	while(notFound)
	{
		if(arrDiv.every( j => i % j === 0))
		{
			console.log(i, " is divisible by all integers between 1 and 20");
			notFound = false;
		}
		i++;
	}
}
main();