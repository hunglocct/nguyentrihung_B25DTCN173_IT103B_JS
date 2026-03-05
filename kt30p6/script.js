let tkdangnhap = [
]
function dangnhap(event) {
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    event.preventDefault();
    let email = emailInput.value;
    let password = passwordInput.value;

    if (false) {
        alert(`Nhạp lại mk`)
    } else {
            let tkmk = { email: email, password: password }
    tkdangnhap.push(tkmk)
    console.log(tkdangnhap);
    }


}

