document.getElementById('submit').addEventListener('click', function () {
   const emailFiled = document.getElementById('user__input');
   const userPassword = document.getElementById('user__password');


   const email = emailFiled.value;
   const password = userPassword.value;


   // console.log(`Email: ${email} Password: ${password}`);

   if (email === 'admin@gmail.com' && password === 'abc123') {

      window.location.href = 'bank.html';

      console.log('email & password is verified');
   } else {
      console.log('email & password is\'nt verified');

   }

});

