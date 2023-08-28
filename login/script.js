const loginBtn = document.getElementById("LOGIN");

loginBtn.addEventListener("openNew", function () {
    const email = document.querySelector('[name ="email"]').value;
    const password = document.querySelector('[name ="password"]').value;
    console.log(email, password)
});
const signUpBtn = document.getElementById("sign-up");

signUpBtn.addEventListener("openNewP", function () {
 window.location.href = "signup-page.html";
});