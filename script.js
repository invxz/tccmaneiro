var botaologin = document.getElementById("botaologin");

botaologin.addEventListener("click", function () {
    var sectionlogin = document.getElementById("sectionlogin");
    sectionlogin.classList.add("sumir")
    setTimeout(function () {
        window.location.href = "home.html";
    }, 1500);
})

// var botaocadastro = document.getElementById("botaocadastrocontinue");

// botaocadastro.addEventListener("click", function () {
//     var sectioncadastro = document.getElementById("sectioncadastro");
//     sectioncadastro.classList.add("sumir");
// })

