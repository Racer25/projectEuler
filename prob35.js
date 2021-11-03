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

function getDigits(n)
{
    return n.toString().split("").map(Number);
}

function generateRotations(n)
{
    let rotations = new Set();
    rotations.add(n);
    let digits = getDigits(n);
    for(let i = 0; i < digits.length - 1; i++)
    {
        let lastElement = digits[digits.length -1];
        digits = digits.map((e, index, arr) =>
        {
            if(index === 0)
            {
                return lastElement;
            }
            else
            {
                return arr[index - 1];
            }
        });

        rotations.add(Number(digits.join("")));
    }
    return rotations;
}

function main()
{
    let circularPrimes = new Set();
    for(let i = 2; i < 1000000; i++)
    {
        let allRotations = [...generateRotations(i)];
        let isCircular = allRotations.every(e => isPrime(e));
        if(isCircular)
        {
            circularPrimes.add(allRotations[0]);
        }
    }
    console.log(circularPrimes);
    console.log(circularPrimes.size);
}

main();