

function main()
{
    let maxLength = -1;
    let maxP = -1;
    let maxSolutions = [];
    for(let p = 3; p <= 1000; p++)
    {
        let allSolutions = new Set();
        for(let a = 1; a <= p; a++)
        {
            for(let b = 1; b <= p - a ; b++)
            {
                for(let c = 1; c <= p - a - b ; c++)
                {
                    let indexMax = [a, b, c].reduce((acc, curr, index)=> curr > acc ? index : acc, -1);
                    let squareMax = [a, b, c][indexMax] * [a, b, c][indexMax];
                    let sumTwoSquare = [a, b, c].reduce((acc, curr) => acc + curr*curr, 0) - squareMax;

                    if(a + b + c === p && squareMax === sumTwoSquare)
                    {
                        allSolutions.add([a, b, c].sort().join("|"));
                    }
                }
            }
        }
        allSolutions = [...allSolutions].map(a => a.split("|").map(Number));

        if(allSolutions.length > maxLength)
        {
            maxLength = allSolutions.length;
            maxP = p;
            maxSolutions = allSolutions;
            console.log(maxSolutions);
            console.log(maxLength);
            console.log(maxP);
        }
    }

    console.log(maxSolutions);
    console.log(maxLength);
    console.log(maxP);

}

main();