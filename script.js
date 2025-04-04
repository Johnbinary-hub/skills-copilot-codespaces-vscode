// Subscribe Button Alert
document.getElementById('subscribeBtn').addEventListener('click', function() {
    alert('Thank you for subscribing!');
});

// Scroll to Top Button
let scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

document.addEventListener("DOMContentLoaded", function() {
    let visitCount = localStorage.getItem("visitCount") || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem("visitCount", visitCount);

    let userResponse = confirm("Welcome! Please like our site to support us.");
    if (userResponse) {
        alert("Thank you for liking! You are visitor #" + visitCount);
    } else {
        alert("No worries! Enjoy browsing. You are visitor #" + visitCount);
    }

    // Send email notification
    emailjs.init("YOUR_PUBLIC_KEY");  // Replace with your EmailJS public key
    emailjs.send("service_tupeasp", "YOUR_TEMPLATE_ID", {
        to_email: "oloruntobijohn720@gmail.com",  // Replace with your Gmail
        subject: "New Website Visitor",
        message: `A new visitor just entered your website. Visitor count: ${visitCount}`
    }).then(function(response) {
        console.log("Email sent successfully!", response);
    }, function(error) {
        console.log("Email sending failed.", error);
    });
});

