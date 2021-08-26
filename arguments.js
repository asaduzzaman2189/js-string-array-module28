function addNumbers(num1, num2) {

    // console.log(arguments[0]);//output as an object, array like an object- শুধু (arguments) দিলে এভাবে দেখাবে- [Arguments] { '0': 23, '1': 13, '2': 50, '3': 100 }; আর (arguments[0]) দিলে 1 নাম্বার পজিশন দেখাবে। 

    // arguments.push(45); // এটা কাজ করবে না কারণ এটি array নয়। TypeError: arguments.push is not a function দেখাবে। 
    let result = 0;
    for (const num of arguments) {
        result = result + num;// এভাবে করলে ফাংশনে যত ইনপুট নেই না কেন তা অটোমেটিক যোগ হবে। 
    }
    return result;
}
const sum = addNumbers(23, 13, 50, 100, 60, 78, 56);
// console.log(sum);


// string কে জোড়া দেয়া using arguments- 
function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const fName = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Komuk', 'Songket');
console.log(fName);

