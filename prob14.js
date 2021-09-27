function main()
{
    let seq = collatzSequence(13, []);
    console.log(seq);

    let numberWithLongestChain = [0, []];
    for(let n = 1; n < 1000000; n++)
    {
        let number = [n, collatzSequence(n, [])];
        if(number[1].length > numberWithLongestChain[1].length)
        {
            numberWithLongestChain = number;
        }
    }

    console.log(numberWithLongestChain);
    console.log("Length:" , numberWithLongestChain[1].length);
}

function collatzSequence(n, seq)
{
    seq.push(n);
    if(n === 1)
    {
        return seq;
    }
    else
    {
        if(n % 2 ===0)
        {
            return collatzSequence(n / 2, seq);
        }
        else
        {
            return collatzSequence(3*n+1, seq);
        }
    }
}

main();