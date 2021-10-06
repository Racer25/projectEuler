import numWords from "num-words"

function main()
{
    let res = numWords(342);

    console.log(res);
    let sum = 0;
    for(let i = 1; i <= 1000; i++)
    {
        sum += numWords(i)
            .replaceAll(" ", "")
            .replaceAll("-", "")
            .length;
    }

    console.log(sum);
}

main()