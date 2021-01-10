document.getElementById("success").style.visibility = "hidden";
//Listen for submit
document.querySelector('.contact-form').addEventListener("submit",submitform);
function submitform(e){
    e.preventDefault();

    //Get inputs
    let name = document.querySelector("#tbname").value;
    let phone = document.querySelector("#tbphone").value;
    let email = document.querySelector("#tbemail").value;
    let message = document.querySelector("#tbmessage").value;
    sendEmail(name,phone,email,message);
    document.querySelector('.contact-form').reset();
}

function sendEmail(name,phone,email,message){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "equiryfromqmed@gmail.com",
        Password : "qexvadaocwqcyfbc",
        To : 'qmedbiomedicalinnovation@qmed.net.in',
        From : "equiryfromqmed@gmail.com",
        Subject : `Enquiry from ${name}`,
        Body : `Name: ${name}<br/> Phone: ${phone} <br/> Email: ${email}<br/> Message:${message}`
        }).then((message) => showSuccessMessage());
}
var timeOutVar;

function showSuccessMessage(){
    document.getElementById("success").style.visibility = "visible";
    document.getElementById("success").style.opacity = 1;
    fadeOutEffect();
}

function fadeOutEffect() {
    var fadeTarget = document.getElementById("success");
     fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 1500);
}

