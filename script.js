




// skip to content
document.querySelector('a[href="#menu"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
}); 
document.querySelector('a[href="#about-us"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about-us').scrollIntoView({ behavior: 'smooth' });
}); 
document.querySelector('a[href="#contact-us"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact-us').scrollIntoView({ behavior: 'smooth' });
}); 

// form validation

// function validateForm() {
    
    
//     // if (document.myForm.formname.value == "") {
//     //     document.getElementsByClassName("error").innerHTML = " Please Enter The Filled";
//     //     document.getElementsByClassName("error").style.color = red;
//     //     return false;
//     // }

// //     // if (document.myForm.formphone.value == "") {
// //     //     document.getElementById("error").innerHTML = " Please Enter The Filled";
// //     //     document.getElementById("error").style.color = red;
// //     //     return false;
// //     // }
// //     // if (document.myForm.formemail.value == "") {
// //     //     document.getElementById("error").innerHTML = " Please Enter The Filled";
// //     //     document.getElementById("error").style.color = red;
// //     //     return false;
// //     // }
        
// //     // if (document.myForm.formmessage.value == "") {
// //     //     document.getElementById("error").innerHTML = " Please Enter The Filled";
// //     //     document.getElementById("error").style.color = red;
// //     //     return false;
// //     // }
//     let n = document.getElementsById("formname").value;
//     // var text;
//     if (n = "")
//     {
//         alert("enter the");
//         return false;
//     }
//     else
//     {
//         return true;
//     }
// //     // document.getElementsById("error").innerHTML = text;
    

    
// }

function validateForm() {


    if (document.myForm.formname.value == "") {
        document.getElementById("error1").innerHTML = " Please Enter The Filled";
        document.getElementById("error1").style.color = "red";
        return false;
    }
    if (document.myForm.formphone.value == "") {
        document.getElementById("error2").innerHTML = " Please Enter The Filled";
        document.getElementById("error2").style.color = "red";
        return false;
    }
    if (document.myForm.formemail.value == "") {
        document.getElementById("error3").innerHTML = " Please Enter The Filled";
        document.getElementById("error3").style.color = "red";
        return false;
    }

    if (document.myForm.formmessage.value == "") {
        document.getElementById("error4").innerHTML = " Please Enter The Filled";
        document.getElementById("error4").style.color = "red";
        return false;
    }




}

// only number as input
function onlyNumber(event) {
    if (event.charCode != 8 && event.charCode == 0 || (event.charCode >= 48 && event.charCode <= 57)) {
        return true;
    } else {
        return false;
    }
}
