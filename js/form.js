function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["email"].value;
    let z = document.forms["myForm"]["phone"].value;
    let q = document.forms["myForm"]["question"].value;
    if(x == "") {
        alert("Name must be filled out");
    } else if (y == "") {
        alert("Email must be filled out");
    }  else if(z == "") {
        alert("Phone number must be filled out");
    }   else if(q == "") {
        alert("Your question must be filled out");
    }   else {
        alert("All Done!");
    }
}