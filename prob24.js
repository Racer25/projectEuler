function main()
{
	let res = generatePermutation([], "", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

	console.log(res);
	let wantedIndex = 1000000;
	console.log(res[wantedIndex - 1]);
}

function generatePermutation(permutations, currPermutation, numbers)
{
	if(numbers.length === 0)
	{
		permutations.push(currPermutation);
	}
	else
	{
		for(let i = 0; i < numbers.length; i++)
		{
			let nextPermutation =  currPermutation + "" + numbers[i];
			let remainingElements = [...numbers].filter(e => e !==  numbers[i]);
			generatePermutation(permutations, nextPermutation, remainingElements);
		}
	}
	return permutations;
}

main();