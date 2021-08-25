const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';

//split() -ভাগ করা , এখানে আমি কাকে কাকে ভাগ করতে চাই তা করার জন্য split. (' ') মাঝে স্পেস দিলে যেখানে যেখানে খালি জায়গা পাবে দুইভাগ করে ফেলবে। এবং word গুলো নিয়ে array এর মতো তৈরি করবে। bracket এর কোটেশনের মধ্যে যদি কোনো স্পেস না দেই তবে প্রতিটা শব্দকে আলাদা আলাদা করবে। আর যদি কোন অক্ষর দেই তাহলে সেই অক্ষর পাওয়া মাত্র তার আগের অক্ষর গুলো নিয়ে শব্দ তৈরি করবে এবং সেই অক্ষর বাদ যাবে। 

// split('') দিলে আউটপুট হবে- 

/* 
PS C:\projects\js-string-array-module28> node string-slice.js
[
  'A', 'm', 'a', 'r', ' ', 'S', 'o',
  'n', 'a', 'r', ' ', 'B', 'a', 'n',
  'g', 'l', 'a', ' ', 'A', 'm', 'i',
  ' ', 'T', 'o', 'm', 'a', 'i', ' ',
  'V', 'a', 'l', 'o', 'b', 'a', 's',
  'h', 'i'
]

 */

// split('r') দিলে আউটপুট হবে- 

/* 
PS C:\projects\js-string-array-module28> node string-slice.js
[ 'Ama', ' Sona', ' Bangla Ami Tomai Valobashi' ]

 */

// const words = anthem.split(' ');
// console.log(words);

//output-
/* 
PS C:\projects\js-string-array-module28> node string-slice.js
[ 'Amar', 'Sonar', 'Bangla', 'Ami', 'Tomai', 'Valobashi' ]


 */

const withoutA = anthem.split('a');
// console.log(withoutA);


// slice - প্রথম যে ইনডেক্স দিব তা থেকে এবং লাস্ট যেই ইনডেক্স দিব তার আগে পর্যন্ত অক্ষরগুলো পাব।
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);


/* 

const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';

*/

//substr প্রথম যে ইনডেক্স দিব তা থেকে যতগুলো অক্ষর চাই তা দ্বিতীয় ইনডেক্স এ বসাব , এখানে ১১ ইনডেক্স থেকে পরের ৭টি character show করবে। 
const anotherPart = anthem.substr(11, 8)
console.log(anotherPart);


//substring -প্রথম যে ইনডেক্স দিব তা থেকে এবং লাস্ট যেই ইনডেক্স দিব তার আগে পর্যন্ত অক্ষরগুলো পাব। slice এর মতোই । 
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);

//concat দুটি শব্দকে জোড়া দিতে concat() function ব্যবহার করা হয়। স্ট্রিং ইমিঊটেবল। তাই সাধারনভাবে  প্লাস দিয়ে না করা উচিত। 
const first = 'Amader';
const second = 'City';
// const - fullString = first + second; //but not recommended;

const fullString = first.concat(second).concat('Abcdef').concat('RJ Kibira');
console.log(fullString);

// join- একটি array এর সব এলিমেন্টকে join করতে join() function ব্যবহার করা হয়। 

const words2 = ['alim', 'badhon', 'c', 'd', 'e', 'f'];
// const allJoined = words2.join('');// এভাবে দিলে কোনো গ্যাপ হবে না। 
// const allJoined = words2.join(' ');// এভাবে দিলে মাঝে গ্যাপ হবে। 
// const allJoined = words2.join(',');// এভাবে দিলে মাঝে কমা হবে। 
const allJoined = words2.join(', ');// এভাবে দিলে মাঝে কমার পর একটা স্পেস হবে হবে। 

console.log(allJoined);
