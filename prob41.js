function generateCombinations(combinations, currCombination, allPossibleDigits)
{
    if (allPossibleDigits.length === 0)
    {
        combinations.push(currCombination);
    }
    else
    {
        for(let digit of allPossibleDigits)
        {
            let newCombination = currCombination + digit;
            generateCombinations(combinations, newCombination, allPossibleDigits.filter(e => e !== digit));
        }
    }
    return combinations.map(n => Number(n));
}

function isPrime(n)
{
    for(let i = 2, s = Math.sqrt(n); i <= s; i++)
    {
        if(n % i === 0)
        {
            return false;
        }
    }
    return n > 1;
}


function main()
{
    let res = generateCombinations([], "", [1, 2, 3, 4, 5, 6, 7]);

    console.log(res);

    let resPrimes = res.filter(e => isPrime(e));
    let biggest = resPrimes .reduce((acc, curr) => acc < curr ? curr : acc , -1);

    console.log(biggest);
}

main();