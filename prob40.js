function fromIndexToNumberDigitZone(n)
{
    let block = 0;
    let s = 0;
    let r = 0;
    do
    {
        r = s;
        block++;
        s += 9 * block * Math.pow(10, block - 1);
    }while(s < n);

    return [n, block, r];
}

function fromZoneResToDigit([n, block, r])
{
    let quotient = Math.floor((n - r - 1) / block);
    let rest = (n - r - 1) % block;
    let numberToSearch = (Math.pow(10, block - 1) + quotient).toString();
    return Number(numberToSearch.charAt(rest));
}
//16 -> "1"3
//17 -> 1"3"
//18 -> "1"4

function main()
{
    /*let stringRes= "";
    for(let digit = 1; digit < 2890; digit++)
    {
        stringRes += fromZoneResToDigit(fromIndexToNumberDigitZone(digit));
    }
    console.log(stringRes);*/


    let d1 = fromZoneResToDigit(fromIndexToNumberDigitZone(1));
    let d10 = fromZoneResToDigit(fromIndexToNumberDigitZone(10));
    let d100 = fromZoneResToDigit(fromIndexToNumberDigitZone(100));
    let d1_000 = fromZoneResToDigit(fromIndexToNumberDigitZone(1_000));
    let d10_000 = fromZoneResToDigit(fromIndexToNumberDigitZone(10_000));
    let d100_000 = fromZoneResToDigit(fromIndexToNumberDigitZone(100_000));
    let d1_000_000 = fromZoneResToDigit(fromIndexToNumberDigitZone(1_000_000));

    console.log(d1 *d10 * d100 * d1_000 * d10_000 * d100_000 * d1_000_000);
}

main();