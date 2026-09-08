emailjs.init({
    publicKey:"9AxoQXVnEW16tF55f"
});

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let templateParams = {
        name : name,
        email : email,
        subject : subject,
        message : message
    };

    localStorage.setItem("name" , name);
    localStorage.setItem("email" , email);
    localStorage.setItem("subject" , subject);
    localStorage.setItem("message" , message);

    emailjs.send(
        "service_pbaqrmg",
        "template_804i22a",
        templateParams
    )

    .then((response) => {
        console.log("SUCCESS!");
        document.getElementById("status").textContent = "Message sent successfully!";
        alert("Message sent successfully!")
        let stat = document.getElementById("status");
        stat.classList.add("success");
        contactForm.reset();
    })

    .catch((error) => {
        console.log("FAILED...",error);
        document.getElementById("status").textContent = "Failed to send message.";
        let stat =document.getElementById("stataus");
        stat.classList.add("error")
    });

});