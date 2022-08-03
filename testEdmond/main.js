import Product from "./Product";
import Bundle from "./Bundle";
import BundleItem from "./BundleItem";
import BasketItem from "./BasketItem";

function bit_test(num, bit){
    return ((num>>bit) % 2 !== 0)
}

function bit_set(num, bit){
    return num | 1<<bit;
}

function bit_clear(num, bit){
    return num & ~(1<<bit);
}

function bit_toggle(num, bit){
    return bit_test(num, bit) ? bit_clear(num, bit) : bit_set(num, bit);
}

function main()
{
    //Create Products
    let prodA = new Product(1, "A", 250);
    let prodB = new Product(2, "B", 120);
    let prodC = new Product(3, "C", 150);

    //Create Bundles
    let bundleX = new Bundle(1, "X", 500);
    let bundleY = new Bundle(2, "Y", 200);

    //Create Bundles items
    let bundleItem11 = new BundleItem(1, 1, 2);
    let bundleItem12 = new BundleItem(1, 2, 1);

    let bundleItem22 = new BundleItem(2, 2, 1);
    let bundleItem23 = new BundleItem(2, 3, 1);

    //Create Basket Items
    let basketItem1 = new BasketItem(1,  2);
    let basketItem2 = new BasketItem(2,  1);

    //Create variables
    let basket = [basketItem1, basketItem2];
    let allProducts = [prodA, prodB, prodC].sort((a, b) => a.id - b.id);
    let allBundles = [bundleX, bundleY].sort((a, b) => a.id - b.id);
    let allBundleItems = [bundleItem11, bundleItem12, bundleItem22, bundleItem23].sort((a, b) => a.id - b.id);

    let minPrice = getMinimalPrice(basket, allProducts, allBundles, allBundleItems);

    console.log(minPrice);
}

function getMinimalPrice(basket, allProduct, allBundles, allBundleItems)
{
    let res = 0;

    //Basket into binary representation
    let bitRep= Number(allProduct.map(prod => basket.some(bI => bI.itemId === prod.id ? 1 : 0)).join(""));

    let A = [0];



    return res;
}

function generateAllCombinationBundle(str) {
    let fn = function(active, rest, a)
    {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}