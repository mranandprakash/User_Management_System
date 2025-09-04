const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const loginpopup=document.getElementById("loginPopup");

const btn=document.querySelector("#loginbtn");
function openpopup(login){
    login.style.display="block";
}
btn.onclick=()=>openpopup(loginpopup);

function handlelogin(){
  loginpopup.classList.remove("hidden");
}
