function is19Pandigital(n)
{
    let digits = n.toString().split("").map(Number);
    let distinctsDigits = [...new Set(digits)].sort();
    return digits.length === 9 && distinctsDigits.length === 9 && distinctsDigits[0] === 1;
}

function getConcatenatedProd(base, maxMult)
{
    let mults = [...Array(maxMult).keys()].map(e => e + 1);
    return Number(mults.reduce((acc, curr) => acc + base * curr, ""));
}

function main()
{
    let max = -1;
    let maxParam = [-1, -1];
    for(let i = 1; i < 10000; i++)
    {
        for(let maxMult = 2; maxMult < 9; maxMult++)
        {
            let n = getConcatenatedProd(i, maxMult);
            if(is19Pandigital(n))
            {
                if(n > max)
                {
                    max = n;
                    maxParam = [i, maxMult];
                }
            }
        }
    }

    console.log(maxParam);
    console.log(max);
}

main();