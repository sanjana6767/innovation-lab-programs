function validateName(name){
    const regex= /^[A-Za-z\s]+$/;
    if(name.trim()===""){
        return "Name cannot be empty";
    }
    if(!regex.test(name)){
        return "name can only contains letters and spaces";
    }
    return "Name is Valid";
}

function validateEmail(email){
    const regex= /^[A-Za-z-0-9._%+-]+@[a-zA-Z0-9.-]+\[a-zA-Z]{2,}$/;
    if(email.trim()===""){
        return "Email cannot be empty";
    }
    if(!regex.test(email)){
        return "Invalid Email Format!!";
    }
    return "Email is valid";
}

function validatePassword(password){
    const regex= /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(password.trim()===""){
        return "Password cannot be empty";
    }
    if(!regex.test(password)){
        return "Password must ,be at least 8 character long, contain an uppercase letter and a number";
    }
    return "Password is valid";
}

function validatePhone(Phone){
    const regex= /^[0-9]{10}$/;
    if(phone.trim()===""){
        return "Phone cannot be empty";
    }
    if(!regex.test(phone)){
        return "Phone number must be 10 digits long";
    }
    return "Phone number is  Valid";
}

function validateForm(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").Value;
    const password=document.getElementById("password").Value;
    const phone=document.getElementById("phone").Value;

    const nameError=validateName(name);
    const emailError=validateEmail(emial);
    const passwordError=validatePassword(password);
    const phoneError=validatePhone(phone);

    if(nameError==="Name is valid" && emailError==="Email is valid" && passwordError==="Password cannot be empty" && phoneError==="Phone number is  Valid"){
        return true;
    }
    document.getElementById("nameError").innerText=nameError==="Name is valid" ? "":nameError;
    document.getElementById("emailError").innerText=emailError==="Email is valid" ? "":emailError;
    document.getElementById("passwordError").innerText=passwordError==="Password is valid" ? "":passwordError;
    document.getElementById("phoneError").innerText=phoneError==="Phone number is valid" ? "":phoneError;

    return false;
}