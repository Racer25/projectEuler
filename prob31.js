function main()
{
	let res = generateCombinations([], [ 0, 0, 0, 0, 0, 0, 0, 0], [200, 100, 50, 20, 10, 5, 2, 1], 200, 0);
	//let res2 = generateCombinations([], [0, 0, 0], [5, 2, 1], 10, 0);

	console.log(res);
	console.log(res.length);
}

function generateCombinations(combinations, currCombination, coins, rest, indexLimitCoins)
{
	if(rest === 0)
	{
		combinations.push(currCombination);
	}
	else
	{
		for(let indexCoin = indexLimitCoins; indexCoin < coins.length; indexCoin++)
		{
			//If we use 1, we choose maxNumberUsableCoins
			if(indexCoin >= coins.length - 1)
			{
				let newCurrCombination = [...currCombination];
				newCurrCombination[indexCoin] = rest;
				generateCombinations(combinations, newCurrCombination, coins, 0, indexCoin + 1);
			}
			else
			{
				let maxNumberUsableCoins = Math.floor(rest / coins[indexCoin]);
				for(let numberUsableCoins = maxNumberUsableCoins; numberUsableCoins > 0; numberUsableCoins--)
				{
					let newCurrCombination = [...currCombination]
					newCurrCombination[indexCoin] = numberUsableCoins;
					let newRest = rest - numberUsableCoins * coins[indexCoin];
					generateCombinations(combinations, newCurrCombination, coins, newRest, indexCoin + 1);
				}
			}
		}
	}
	return combinations;
}

function countCombinations(count, currCombination, coins, sum, indexLimitCoins)
{
	if(sum === 0)
	{
		count[0]++;
	}
	else
	{
		for(let indexCoin = indexLimitCoins; indexCoin < coins.length; indexCoin++)
		{
			if(indexCoin === coins.length - 1)
			{
				let newCurrCombination = [...currCombination]
				newCurrCombination[indexCoin] = sum;
				countCombinations(count, newCurrCombination, coins, 0, indexLimitCoins + 1);
			}
			else
			{
				let maxNumberUsableCoins = Math.floor(sum / coins[indexCoin]);
				for(let numberUsableCoins = maxNumberUsableCoins; numberUsableCoins >= 0; numberUsableCoins--)
				{
					let newCurrCombination = [...currCombination]
					newCurrCombination[indexCoin] = numberUsableCoins;
					let rest = sum - numberUsableCoins * coins[indexCoin];
					countCombinations(count, newCurrCombination, coins, rest, indexLimitCoins + 1);
				}
			}
		}
	}
	return count;
}

main();