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

function *range(cap)
{
    for(let index = 0; index < cap; index++) console.log(yield index);
}

function hasAValidDigitEndOrBegin(n)
{
    let validDigits = ["2", "3", "5", "7"];
    let digits = n.toString().split("");
    return validDigits.indexOf(digits[0]) !== -1 && validDigits.indexOf(digits[digits.length - 1]) !== -1;
}

function generateTruncatedNumbers(i)
{
    let digits = i.toString().split("");
    let allCombLeftRight = digits.map((e, index, arr) => Number(arr.slice(index).join("")));
    let allCombRightLeft = digits.map((e, index, arr) => Number(arr.slice(0, index).join(""))).filter(e => e !== 0);
    return [...new Set([...allCombLeftRight, ...allCombRightLeft])];
}

function main()
{
    let sum = 0;
    let vals = [];
    for(let i = 10; i < 1e6; i++)
    {
        if(hasAValidDigitEndOrBegin(i))
        {
            let combs = generateTruncatedNumbers(i);
            if(combs.every(e => isPrime(e)))
            {
                sum += i;
                vals.push(i);
            }
        }
    }

    console.log(vals);
    console.log(sum);

}



main();