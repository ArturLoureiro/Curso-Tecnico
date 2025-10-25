const formLogin = document.getElementById('formLogin');
const txtLogin = document.getElementById('txtLogin');
const txtSenha = document.getElementById('txtSenha');
const loginStatus = document.getElementById('loginStatus');
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const login = txtLogin.value;
    const senha = txtSenha.value;
    if (!login) {
        loginStatus.style.color = "red";
        loginStatus.textContent = "Preencha o login";
        return;
    }
    else if (!senha) {
        loginStatus.style.color = "red";
        loginStatus.textContent = "Preencha a senha";
        return;
    }
    else {
        loginStatus.style.color = "red";
        loginStatus.textContent = "Login ou senha inválidos!";
    }
    if (login == "admin" && senha == "123") {
        loginStatus.style.color = "green";
        loginStatus.textContent = "Login realizado com sucesso!";
        setTimeout(() => {
            window.location.href = "admin.html";
        }, 1000);
    }
    formLogin.reset();
});
export {};
//# sourceMappingURL=login.js.map