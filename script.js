let users=[
      { userid: "john123", firstName: "John", lastName: "Doe", phone: "9876543210", password: "pass1234", userType: "student" },
        { userid: "jane456", firstName: "Jane", lastName: "Smith", phone: "8765432109", password: "pass5678", userType: "admin" },
        { userid: "alice789", firstName: "Alice", lastName: "Johnson", phone: "7654321098", password: "pass9101", userType: "student" }
];
let currentuser=null;
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const loginpopup=document.getElementById("loginPopup");
const btn=document.querySelector("#loginbtn");
const submitbtn=document.querySelector("#submitbtn");
function openpopup(login){
    login.style.display="block";
}
function closepopup(){
    loginpopup.style.display="none";
}
btn.onclick=()=>openpopup(loginpopup);

function handlelogin(){
  loginpopup.classList.remove("hidden");
  const userid=document.getElementById("loginuserid").value.trim();
  const password=document.getElementById("loginpassword").value.trim();
  document.getElementById("erroruserid").innerText=userid?"": "UserId is required";
  document.getElementById("errorpassword").innerText=password.length>=6?"": "Password minimum 6 character required";
  let valid=true;
  if(!erroruserid && errorpassword.length<6){
     valid=false;
  }
  if(!valid){
    return;
  }
    const user=users.find(u=>u.userid===userid && u.password===password);
    if(user){
        currentuser=user;
        alert("login successful");
    }
    
}
