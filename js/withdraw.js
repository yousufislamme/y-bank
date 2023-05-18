document.getElementById('withdraw__button').addEventListener('click', function () {
   const newWithdrawField = getElementInputById('withdraw__input');
   const previewsWithdrawAmount = getElementTextById('withdrawBalance');
   const previewsBalance = getElementTextById('balance__total');

   const newWithdrawTotal = previewsWithdrawAmount + newWithdrawField;
   const currentBalanceTotal = previewsBalance - newWithdrawField;

   calculationById('withdrawBalance', newWithdrawTotal);
   calculationById('balance__total', currentBalanceTotal)



})