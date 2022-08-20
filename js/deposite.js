document.getElementById("btn-deposite").addEventListener('click', function () {
    const depositeField = document.getElementById("deposite-field");
    const depositeAmountString = depositeField.value;
    const depositeAmount = parseFloat(depositeAmountString)

    // console.log(deposite)
    /* 
    // stap-3 
    3.a.যেখানে amount টি দেখাবো তার html id নিতে হবে এবং থাকে ধরে নিয়ে আসতে হবে ,
    3.b. সেটি input/ textareya না হওয়ার কারণে innerText ব্যবহার করতে হবে । সে লেখাগুলো পেতে পারি
    3.c. innerText যে মানটি পাবো সেটি string আর সেটিকে number এ convert করার জন্য ্একটি variable নিয়ে number এর convert করতে হবে ।
     */
    const depositeTotalElement = document.getElementById("deposit-total")//যেখানে amount টি দেখাবো তার html id নিতে হবে এবং থাকে ধরে নিয়ে এসেছি
    const previesDepositTotalString = depositeTotalElement.innerText; // 3.a এর text গুলো পেতে পারি  সেটি input/ textareya না হওয়ার কারণে innerText ব্যবহার করতে হবে । সে লেখাগুলো পেতে পারি
    const previesDepositTotal = parseFloat(previesDepositTotalString)// innerText যে মানটি পাবো সেটি string আর সেটিকে number এ convert করার জন্য ্একটি variable নিয়ে number এর convert করতে হবে ।
    // console.log(previesDepositTotalString )
    depositeTotalElement.innerText = depositeAmount;// এটি ব্যবহার করে deposite value এর মানটি  depositeTotalElement.innerText; এখানে দেখাচ্ছি
    // stap-4
    // total deposite
    const creentDepositeTotal = depositeAmount + previesDepositTotal; // দুইটি amount একসাথে যো করেছি
    // console.log( creentDepositeTotal)
    depositeTotalElement.innerText = creentDepositeTotal; // এখানে যোগফল দেখাচ্ছি

    //stap- 5
    // 5.a. balance html এর id টি কে ধরে নিয়ে আসতে হবে এবং variable এ রাখতে হবে 
    // 5.b. সেটি input/ textareya না হওয়ার কারণে innerText ব্যবহার করতে হবে । সে লেখাগুলো পেতে পারি 
    // 5.c. innerText যে মানটি পাবো সেটি string আর সেটিকে number এ convert করার জন্য ্একটি variable নিয়ে number এর convert করতে হবে ।
    //total balance
    const balanceTotalElement = document.getElementById("balance-total") //  balance html এর id টি কে ধরে নিয়ে আসছি এবং variable এ রাখছি
    const previesBalanceTotalString = balanceTotalElement.innerText; //5.a এর text গুলো পেতে পারি সেটি input/ textareya না হওয়ার কারণে innerText ব্যবহার করতে হবে ।

    const previesBalanceTotal = parseFloat(previesBalanceTotalString);// innerText যে মানটি পাবো সেটি string আর সেটিকে number এ convert করার জন্য ্একটি variable নিয়ে number এর convert করতে হবে ।

    // stap-6
    // calcolet total balance
    const carrentBalanceTotal = previesBalanceTotal + depositeAmount //balance দুইটি একসাথে যোগ করে দিয়েছি 
    balanceTotalElement.innerText = carrentBalanceTotal; // এখানে যোগফল দেখাচ্ছি

    // stap-7
    depositeField.value = " ";// input এর ভিতরে কিছু লেখার পর খালি করে দিচ্ছি 

})