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
   // const totalDepositAmount = previewsDepositTotal + depositInput;
   // 
   const depositTotalCalculation = depositInput + previewsDepositTotal;



   // show deposit amount into display...
   depositAmountSt.innerText = depositTotalCalculation;

   currentBalanceSt.innerText = currentBalance + depositInput;

   // clear deposit input
   depositInputSt.value = ''
});
