setTimeout(function () {
    var logo = document.getElementById("logo");
    logo.classList.remove("animacaoinicio")
    logo.classList.add("sumir");
}, 3200);
setTimeout(function () {
    window.location.href = "login.html";
}, 5000);