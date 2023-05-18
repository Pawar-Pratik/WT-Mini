function validate() {
    //console.log("hello world");
    var fname = document.regform.fname.value;
    var mname = document.regform.mname.value;
    var lname = document.regform.lname.value;


    if ((fname.length) > 15) {
        alert("Enter a valid First Name, Example : Pratik");
    }
    if (fname == "") {
        alert("First name cannot be null");
    }

    if ((mname.length) > 15) {
        alert("Enter a valid Middle Name, Example : Avinash");
    }
    if (mname == "") {
        alert("Middle name cannot be null");
    }

    if ((lname.length) > 15) {
        alert("Enter a valid Last Name, Example : Pawar");
    }
    if (lname == "") {
        alert("Last name cannot be null");
    }


    var phone = document.regform.phone.value;
    if (phone == "") {
        alert("Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(phone) === false) {
            alert("Please enter a valid 10 digit mobile number");
        }
    }


    var email = document.regform.email.value;
    if (email == "") {
        alert("Enter email");
    }
    else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            alert("Please enter a valid email address");
        }
    }

    var pass = document.regform.pass1.value;
    var pass2 = document.regform.pass2.value;

    if(pass=="" && pass2==""){
        alert("Password cannot be null");
    }
    else{
        if(pass!=pass2){
            alert("Password do not match");
        }
    }
}