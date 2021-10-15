function main()
{
	let allValidProducts = new Set();
	for(let i = 0; i < 1000; i++)
	{
		for(let j = 0; j < 10000; j++)
		{
			let product = i * j;
			let allDigitArray = [...getDigit(i), ...getDigit(j), ...getDigit(product)].sort();
			let allDigitSet = new Set(allDigitArray);

			//9 digits, no duplicates and not containing 0
			if(allDigitArray.length === 9 && allDigitArray.length === allDigitSet.size && !allDigitSet.has(0))
			{
				allValidProducts.add(product);
			}
		}
	}

	let sum = [...allValidProducts].reduce((acc, curr) => acc + curr, 0);

	console.log(allValidProducts);
	console.log(sum);
	//{ 6952, 7852, 5796, 5346, 4396, 7254, 7632 }

}

function getDigit(number)
{
	return  number.toString().split("").map(Number);
}

main();