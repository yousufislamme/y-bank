document.getElementById('withdraw__button').addEventListener('click', function () {
   const withdrawInput = document.getElementById('withdraw__input');


   const withdrawValue = praseFloat(withdrawInput.value);

   console.log(withdrawValue);

});