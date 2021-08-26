const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
const friends = ['kabli', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

//[ এলিমেন্টগুলোকে একসাথে সর্ট এবং রিভার্স করা হয়েছে ]
const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);

//number sorting fun

const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
// const sortedBigNumbers = bigNumbers.sort();//[js এভাবে সর্ট করতে পারে না , সে পূর্বের নিয়মে আগে [13,  2, 37, 58, 6, 66, 81,  9, 92] করবে। এখানে প্রথম সংখ্যার 1, দ্বিতীয় সংখ্যা থেকে 2, তৃতীয় সংখ্যা থেকে ৩ এভাবে নিবে। নিচের মতো করতে হবে- a ও b প্যারামিটার দিয়ে array এর পজিশন compare করে। প্রয়োজনে গুগলে সার্চ- javascript number array sort ]
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);


