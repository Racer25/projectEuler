function main()
{

	let potentials = [];

	for(let a = 1; a <= 1000; a++)
	{
		for(let b = a+1; b <= 1000; b++)
		{
			for(let c = b+ 1; c <= 1000; c++)
			{
				if(a + b + c === 1000)
				{
					potentials.push([a, b, c]);
				}
			}
		}
	}

	let res = potentials.find(([a, b, c]) => a*a + b*b === c*c);

	console.log(res);
	console.log(res.reduce((acc, curr)=> acc * curr, 1.0));
}

main();