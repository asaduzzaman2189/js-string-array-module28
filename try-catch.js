
/*
const MyName = 'ami';//let,const ব্যবহার করলে এরর হবে না। তবে let ব্যবহার করলে try function এর ভিতরেও কাজ করবে কিন্তু const ব্যবহার করলে try function এর ভিতরে কাজ করবে না।

MyName = 'tumi';// TypeError: Assignment to constant variable. const ব্যবহার করলে typeError তো দেখাবেই আবার অন্য কোনো কিছু কাজ করবে না। যেমন- নিচের console.log(100);
try {
    // MyName = 'tumi';
}
catch (error) {

}
console.log(100);
console.log(MyName);

 */

const MyName = 'ami';//let,const ব্যবহার করলে এরর হবে না। তবে let ব্যবহার করলে try function এর ভিতরেও কাজ করবে কিন্তু const ব্যবহার করলে try function এর ভিতরে কাজ করবে না। 

try {
    MyName = 'tumi';//TypeError: Assignment to constant variable.
}
catch (error) {
    console.log('geting error', error);//geting error TypeError: Assignment to constant variable.
}

console.log(100);
console.log(MyName);


//catch() এর মধ্যে সাধারনত er বা ex অথবা error বা  exception লেখা হয়। 


// const name = 'ami';
/*
const student = undefined;
console.log(student());//TypeError: student is not a function

 */

/*
const student = undefined;
console.log(student.name);//TypeError: Cannot read property 'name' of undefined

 */

/*
const student;//SyntaxError: Missing initializer in const declaration
console.log(student.name);
 */

/*
for (let i = 0; i < 10 i++) {
    //SyntaxError: Unexpected identifier
}

 */

/*
name = 'tumi';//TypeError: Assignment to constant variable.
console.log(name);

 */