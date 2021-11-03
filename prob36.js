
function isPalindrome(nString)
{
    let beginCursor = 0;
    let endCursor = nString.length - 1;

    while(beginCursor < endCursor)
    {
        if(nString.charAt(beginCursor) !== nString.charAt(endCursor))
        {
            return false;
        }
        beginCursor++;
        endCursor--;
    }
    return true;
}

function main()
{
    let sum = 0;
    for(let i = 0; i < 1e6; i++)
    {
        if(isPalindrome(i.toString()) && isPalindrome(i.toString(2)))
        {
            sum += i;
        }
    }
    console.log(sum);

}

main();