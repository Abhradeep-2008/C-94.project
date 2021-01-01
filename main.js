function login() {
    window.location =  "kwitter_page.html";
    user = document.getElementById("username").value;
    localStorage.setItem("user", user);
}