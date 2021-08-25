function megaFriend(friends) {
    // যেটা ইনপুট প্যারামিটারে দিব তা array কি না তা যেভাবে cheeck করব- 
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }

    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['Kutub', 'Lion', 'Shamol', 'Sabbir',];
const myBigBuddy = megaFriend(1245); //1245- এটা দিলে এরর দিবে, তাই ফাংশনের ইনপুট চেক করে নেয়া দরকার যে সেটা array কি না। 
// console.log(myBigBuddy);

// formula-1 (item!= -1 মানে এলিমেন্টটি আছে) 
if (friends.indexOf('fox') != -1) {
    // console.log('Lion exists');
}
else {
    console.log("Fox doesn't exists");
}

// formula-2 includes() function ব্যবহার করলে তা যদি array এর মধ্যে থাকে তাহলে দেখাবে।
// if (friends.includes('Lion')) বা, if (friends.includes('Lion')==true) ও লেখা যায়। 

if (friends.includes('Lion')) {
    console.log('Lion exists2');
}


// concat means concatenation. এটা দুইটা array কেও জোড়া লাগায়। 
//concat
const first2 = ['1', '2', '3'];
const second2 = ['4', '6', '8', '9'];

const combined = first2.concat(second2);
console.log(combined);
