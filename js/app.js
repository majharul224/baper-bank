document.getElementById("btn-submit").addEventListener('click',function(){
    // console.log("click me") //function টি টিক মতো কাজ করছে কিনা তা দেখার জন্য 
   /*  stap-2
    2.a. একটি id দিতে হবে html এ
    2.b . document.getElementById("input html id নিতে হবে")
    2.c . value দিয়ে লেখা বের করতে হবে  */
    const emailField = document.getElementById("user-email"); //এটি ব্যবহার করে iuput এর id টি ধরে নিয়ে আসতে হবে ।

    // inpute এর থেকে লেখা পাওয়ার জন্য সবসময় value ব্যবহার করবো 

    const email = emailField.value; //এটি ব্যবহার করে inpute এর ভিতরে কি লিখেছি সেটা বের করবো 
//    console.log(email)  // value পাচ্ছে কিনা তা দেখার জন্য 

/* stap-3
3.a. একটি id দিতে হবে html এ
3.b . document.getElementById("input html id নিতে হবে")
3.c . value দিয়ে লেখা বের করতে হবে 
 */
const passwordField = document.getElementById("user-password");  //এটি ব্যবহার করে iuput এর id টি ধরে নিয়ে আসতে হবে ।
const password = passwordField.value ;  // inpute এর থেকে লেখা পাওয়ার জন্য সবসময় value ব্যবহার করবো 
// console.log (password) // value পাচ্ছে কিনা তা দেখার জন্য

// step-4 valeid
// এটি আমরা ব্যবহার করবো না কারণ আরও অন্য ভাবে তৈরি করবো 
 if(email === "majharul@gmail.com" && password ==="123456"){
// console.log("it is valied")
window.location.href='baper-bank.html'; // এটি ব্যবহার করে অন্য একটি পেইজে যেতে পারবো
 } else{
alert("Password is incorrect");

}})