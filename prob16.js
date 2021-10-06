import { create, all } from 'mathjs'

const config = {number: 'BigNumber',precision: 1024  };
const math = create(all, config);

function sumDigit(value)
{
    return value
        .replace(".", "")
        .split("e+")
        .shift()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
}

function main()
{
    let res = math.pow(math.bignumber(2), math.bignumber(1000));
    console.log(res);
    console.log(sumDigit(res.toString()))
}

main();