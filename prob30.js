function main()
{
    let validNumbers = [];
    for(let i = 10; i < 10000000; i++)
    {
        //Separate per digit
        let sumDigits = i
            .toString()
            .split("")
            .map(Number)
            .reduce((acc, curr) => acc + Math.pow(curr, 5), 0);

        if(sumDigits === i)
        {
            validNumbers.push(i);
        }
    }

    console.log(validNumbers);
    console.log(validNumbers.reduce((acc, curr) => acc + curr, 0));
}

main();