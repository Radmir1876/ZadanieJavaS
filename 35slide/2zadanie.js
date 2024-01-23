let num = '12345';
let product = 1;

for (let i = 0; i < num.length; i++) {
    product *= parseInt(num[i]);
}

console.log(product);