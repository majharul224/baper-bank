document.getElementById("btn-withdraw").addEventListener('click', function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // console.log(withdrawAmount)
    withdrawField.value = " ";
    if(isNaN(withdrawAmount)){
        alert("please valide numver")
        return;
    }

    const withdrawTotalElement = document.getElementById("withdraw-total")
    const previesWithdrawTotalString = withdrawTotalElement.innerText;
    const previesWithdrawTotal = parseFloat(previesWithdrawTotalString);
  /*   const carrentWithdrawTotal = previesWithdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = carrentWithdrawTotal; */

    const balanceTotalElement = document.getElementById("balance-total")
    const previesBalanceTotalString = balanceTotalElement.innerText;
    const previesBalanceTotal = parseFloat(previesBalanceTotalString)
    // console.log(previesBalanceTotal)

    
if( withdrawAmount > previesBalanceTotal){
    alert("baper banka taka ni")
    return;
}

const carrentWithdrawTotal = previesWithdrawTotal + withdrawAmount;
withdrawTotalElement.innerText = carrentWithdrawTotal;


    const newTotalBalance = previesBalanceTotal - withdrawAmount;
    balanceTotalElement.innerText = newTotalBalance;
// withdrawField.value = " ";
})