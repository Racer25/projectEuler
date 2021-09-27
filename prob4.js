function main()
{
	console.log(isPalindrome(987789));
	console.log(isPalindrome(12));
	console.log(isPalindrome(12320));
	let i = 998001;
	let notFound = true;
	while(i > 0 && notFound)
	{
		if(isPalindrome(i))
		{
			for(let j = 100; j<= 999; j++)
			{
				if(i % j === 0)
				{
					console.log(i, " equal ", j, " x ", i/j);
					if((i/j).toString().length === 3)
					{
						console.log(i, " equal ", j, " x ", i/j, ", 3 digit only!!");
						notFound = false;
					}
				}
			}
		}
		i--;
	}
}

function isPalindrome(n)
{
	let stringN = n.toString();
	//Cut in middle
	let begin = stringN.substring(0, Math.ceil((stringN.length - 1) / 2));
	let end = stringN.substring(Math.round(stringN.length / 2), stringN.length);

	return begin === end.split("").reverse().join("");
}

main();