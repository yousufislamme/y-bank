// Bank site

document.getElementById('deposit__submit').addEventListener('click', function () {
   // find element with id.
   const depositInputSt = document.getElementById('deposit__input');
   const setDepositSt = document.getElementById('depositAmount');
   const balanceTotalSt = document.getElementById('balance__total');

   // convert string to Number. 
   const depositInput = parseFloat(depositInputSt.value);
   const setDeposit = parseFloat(setDepositSt.innerText);
   const balanceTotal = parseFloat(balanceTotalSt.innerText);


   // calculate deposit amount
   const depositTotal = depositInput + setDeposit;


   // set value on Deposit
   setDepositSt.innerText = depositTotal;


   // clear input bar
   depositInputSt.value = '';


   // add money on total Balance
   balanceTotalSt.innerText = depositInput + balanceTotal;

})