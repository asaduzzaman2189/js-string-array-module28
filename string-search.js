//string in an array
const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Levevo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];

const searching = 'dell';

const output = [];

//indexOf

for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);//যদি থাকে তবে array এর মধ্যে পুশ হবে। 
    }
}
console.log(output);





///indexOf() দিয়েও চেক করা যাবে আবার includes() দিয়েও চেক করা যাবে। includes() দিয়ে চেক করলে শুধু ডট দিয়ে array-variable.include() দিলেই হবে compare করতে হবে না।

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);



//startsWith() দিলে শুধুমাত্র প্রথম থেকে যে শব্দটা মিল পাবে তাই দেখাবে। শেষে থাকলে নিবে না। 


for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);


//endsWith() দিলে শুধুমাত্র শেষ থেকে যে শব্দটা মিল পাবে তাই দেখাবে। প্রথমে থাকলে নিবে না। 

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);

