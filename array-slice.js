const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
// slice 
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);// output- [ 9, 19, 15, 21 ]
// console.log(numbers);// slice ব্যবহার করলে মূল array পরিবর্তন হয় না। 

//splice to remove an element from an array- splice দিলে তা যাদেরকে রিমুভ করবে শুধু তাদেরকে দেখাবে। 
// const numberSpliced = numbers.splice(4, 3);// 4 numbers এলিমেন্ট থেকে শুরু করে তারপরের 2টি এলিমেন্ট রিমুভ করা হয়েছে।
// console.log(numberSpliced);// যে আইটেম রিমুভ করা হয়েছে- [ 9, 19, 15 ]
// console.log(numbers);// এখানে আউটপুট দেখাবে যে তিনটি আইটেম রিমুভ হয়েছে। [3,  6,  4, 8, 21, 45, 87]

// [splic দিয়ে যে এলিমেন্ট রিমুভ করা হয় সেখানে নতুন এলিমেন্ট যোগ করা যায় , এক্ষেত্রে প্রথমে (4, 3,) তে 4 হচ্ছে যেখান থেকে রিমুভ শুরু হবে এবং 3 হচ্ছে যে কয়টি এলিমেন্ট বাদ যাবে(4,3 এর জায়গায় যদি 4,0 দেই তবে কোনো কিছু রিমুভ হবে না)। তার পরের ইনডেক্সগুলো হচ্ছে যা আমি যোগ করব।  ]
// const numberSpliced2 = numbers.splice(4, 3, 99, 111, 888, 777);
// const numberSpliced2 = numbers.splice(4, 3, 777);
const numberSpliced2 = numbers.splice(4, 0, 777);
console.log(numberSpliced2);
console.log(numbers);

