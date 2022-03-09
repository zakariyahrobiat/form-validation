const form = document.getElementById("form")
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("password1");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    checkInput()
    
})

function  checkInput(){
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const cPasswordValue = cPassword.value.trim();

    if (usernameValue === ""){
        setErrorFor(username, "username cannot be blank");

    }else{
        setSuccessFor(username)
    };

     if (emailValue ==="") {
         setErrorFor(email, "email cannot be blank")
     } else {
        setSuccessFor(email) 
     }
     if (passwordValue===""){
         setErrorFor(password, "password cannot be blank")
     }
     else{
         setSuccessFor(password)
     }
     if (passwordValue !== cPasswordValue){
         setErrorFor(cPassword, "password does not match")
     }
     else if(cPasswordValue ===""){
         setErrorFor(cPassword, "confirm password cannot be blank" )
     }
     
     else{
         setSuccessFor(cPassword)
     }


     
     
      
    
    


function setErrorFor(input, message){
    formControl = input.parentElement;
     small = formControl.querySelector("small")
    small.innerHTML = message
    formControl.className = "form-control error"
}
function setSuccessFor(input){
    formControl = input.parentElement;
   
    formControl.className = "form-control success"
    
    
}

    
}
    
