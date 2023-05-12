document.getElementById('withdraw__button').addEventListener('click', function () {
   const balanceTotalSt = document.getElementById('balance__total');
   const withdrawFiled = document.getElementById('withdrawBalance');
   const withdrawBalanceSt = document.getElementById('withdraw__input');


   // convert string to number.
   const withdrawBalance = parseFloat(withdrawBalanceSt.value);
   const balanceTotal = parseFloat(balanceTotalSt.innerText);
   const previewsWithdrawNu = parseFloat(withdrawFiled.innerText);

   // decrease money from total balance
   const totalWithdrawBalance = balanceTotal - withdrawBalance;
   balanceTotalSt.innerText = totalWithdrawBalance;

   // how many amount I'm already withdraw.
   const previewsWithdrawBalance = previewsWithdrawNu + withdrawBalance;

   withdrawFiled.innerText = previewsWithdrawBalance;


   // clear input
   withdrawBalanceSt.value = '';

});