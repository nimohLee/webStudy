let email = document.getElementById("email");
let passwd = document.getElementById("passwd");
let passwd2 = document.getElementById("passwd2");


function checkInputs() {
    if (email.value.trim() === null || email.value.trim() === '') {
        const formContorl = email.parentElement;
        const small = formContorl.querySelector("small");

    }



    document.getElementById("form").addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    });
}