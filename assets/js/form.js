document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.getElementById("dialog");

    const showButton = document.getElementById('contactMeBtn');

    const closeButton = document.getElementById("close_button");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    // form-email.js

    const btnSend = document.getElementById('btn-send');
    const form = document.getElementById('form');

    btnSend.addEventListener('click', function (e) {
        e.preventDefault();

        const serviceID = 'service_ys40yrb';
        const templateID = 'template_2251i8e';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (error) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(error));
            });
    })


})

