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
const dashboard=document.getElementById("dashboard");
const createuserpopup=document.getElementById("createUserPopup");
function openpopup(login){
    login.style.display="block";
}
function closepopup(){
    loginpopup.style.display="none";
    createuserpopup.style.display="none";

}
function openCreateUserPopup(){
    createuserpopup.style.display="block";
    loginpopup.style.display="none";
}
btn.onclick=()=>openpopup(loginpopup);

function handlelogin(){
  const userid=document.getElementById("loginuserid").value.trim();
  const password=document.getElementById("loginpassword").value.trim();
  document.getElementById("erroruserid").innerText=userid?"": "UserId is required";
  document.getElementById("errorpassword").innerText=password.length>=6?"": "Password minimum 6 character required";
  let valid=true;
  if(!userid || password.length<6){
     valid=false;
  }
  if(!valid){
    return;
  }
    const user =users.find(u=>u.userid===userid && u.password===password);
    if(user){
        currentuser=user;
        closepopup();
        
        document.getElementById("mytask").classList.remove("hidden");
        btn.innerText="Logout";
        btn.onclick=handlelogout;
     if(user.userType==="admin"){
     dashboard.innerHTML = `<h2>⚡ Welcome Admin ${user.firstName}</h2><p>You have access to manage users and system settings.</p>
     <button>Manage Users</button>
     <button>System Settings</button>
     <button>View Reports</button>
         `;
 }
 else if(user.userType==="student"){
     dashboard.innerHTML = `<h2>🎓 Welcome Student ${user.firstName}</h2><p>You can view your courses and assignments here.</p>
         
     <button>View Courses</button>
      <button>Submit Assignments</button>
     <button>Check Grades</button>
         `;
    }
    
    
}
else{
     document.getElementById("errorpassword").innerText = "Invalid credentials";

}
}
function handlelogout() {
    currentuser = null;
    dashboard.innerHTML = ""; 
    btn.innerText = "Login";
    btn.onclick = () => openpopup(loginpopup); 
    document.getElementById("mytask").classList.add("hidden");
}
function handleCreateUser(){
   const fname=document.getElementById("firstName").value.trim();
   const lname=document.getElementById("lastName").value.trim();
   const phone=document.getElementById("phone").value.trim();
   const password=document.getElementById("password").value.trim();
   const cpass=document.getElementById("confirmpassword").value.trim();
   const usertype=document.getElementById("userType").value;
   
  let valid = true;

document.getElementById("errorFirstName").innerText =
  /^[A-Za-z]+$/.test(fname) ? "" : "First name must contain only letters";

document.getElementById("errorLastName").innerText =
  /^[A-Za-z]+$/.test(lname) ? "" : "Last name must contain only letters";

document.getElementById("errorphone").innerText =
  /^\d{10}$/.test(phone) ? "" : "Phone must be exactly 10 digits";

document.getElementById("errorPassword").innerText =
  /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)
    ? ""  : "Password must be at least 6 characters, include a letter and a number";

document.getElementById("errorConfirmPassword").innerText =
  password === cpass ? "" : "Passwords do not match";

document.getElementById("errorUserType").innerText =
 usertype ? "" : "Please select a user type";

if (
  !/^[A-Za-z]+$/.test(fname) ||
  !/^[A-Za-z]+$/.test(lname) ||
  !/^\d{10}$/.test(phone) ||
  !/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password) ||
  password !== cpass ||
  !type
) {
  valid = false;
}

if (!valid) return;

let newusers={
    userid: fname.toLowerCase(),
    firstName: fname,
    lastName: lname,
    phone: phone,
    password: password,
    userType: usertype
}

users.push(newusers);
alert("User created successfully. Your UserID is "+newusers.userid);
closepopup();
openpopup(loginpopup);
}
