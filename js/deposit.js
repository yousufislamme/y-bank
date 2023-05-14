// deposit button connect

document.getElementById('deposit__submit').addEventListener('click', function () {
   const depositAmountSt = document.getElementById('depositAmount');
   const depositInputSt = document.getElementById('deposit__input');
   const currentBalanceSt = document.getElementById('balance__total');

   // string to number
   const previewsDepositTotal = parseFloat(depositAmountSt.innerText);
   const depositInput = parseFloat(depositInputSt.value);
   const currentBalance = parseFloat(currentBalanceSt.innerText);

   // calculate 
   const totalDepositAmount = previewsDepositTotal + depositInput;
   // 
   const depositTotalCalculation = currentBalance + previewsDepositTotal;



   // show deposit amount into display...
   currentBalanceSt.innerText = depositTotalCalculation;
   depositAmountSt.innerText = totalDepositAmount;

   console.log(depositTotalCalculation);
   console.log(totalDepositAmount);

   // clear deposit input
   depositInputSt.value = ''

});
