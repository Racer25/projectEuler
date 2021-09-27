

function main()
{
	let multiple3 = 0;
	let multiple5 = 0;

	let i = 1;
	let multiples3 = [];
	do
	{
		multiples3.push(multiple3);
		multiple3 = 3*i;
		i++;
	}while(multiple3 < 1000);

	let j = 1;
	let multiples5 = [];
	do
	{
		multiples5.push(multiple5);
		multiple5 = 5*j;
		j++;
	}while(multiple5 < 1000);

	//Fusion
	let allMultiple = [...new Set([...multiples5, ...multiples3])];

	let res = allMultiple.reduce((acc, curr) => acc + curr, 0);
	console.log(res);
}

main();
