let shopingList = [
    {name:'trolly bag',
    type:'storge item',
    priceInUsd:50,},
    {name:'oneplus node ce 2',
    type:'mobile',
    priceInUsd:200,},
    {name:'apple earbuds',
    type:'mobile exiseres',
    priceInUsd:150,}
];


const exchangeRate = 80;

function echnageInINR(priceInUSD) {
    return priceInUSD*exchangeRate;
}

const inrPrice = shopingList.map((e)=>({
    ...e,
    priceInINR: echnageInINR(e.priceInUsd)
}))

console.log(inrPrice);

// output
// [
//     {
//       name: 'trolly bag',
//       type: 'storge item',
//       priceInUsd: 50,
//       priceInINR: 4000
//     },
//     {
//       name: 'oneplus node ce 2',
//       type: 'mobile',
//       priceInUsd: 200,
//       priceInINR: 16000
//     },
//     {
//       name: 'apple earbuds',
//       type: 'mobile exiseres',
//       priceInUsd: 150,
//       priceInINR: 12000
//     }
//   ]