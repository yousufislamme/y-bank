// deposit button connect

document.getElementById('deposit__submit').addEventListener('click', function () {
   const depositAmountSt = document.getElementById('depositAmount');
   const depositInputSt = document.getElementById('deposit__input');

   // string to number
   const previewsDepositTotal = parseFloat(depositAmountSt.innerText);
   const depositInput = parseFloat(depositInputSt.value);


   // calculate 
   const totalDepositAmount = previewsDepositTotal + depositInput;
   // 
   const depositTotalCalculation = totalDepositAmount;

   // show deposit amount into display...
   depositAmountSt.innerText = depositTotalCalculation;

   // clear deposit input
   depositInputSt.value = ''

});
