document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    const popupClose = document.getElementById("popupClose");
    const overlay = document.getElementById("overlay");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                showPopup("Please fill in all fields!", "red");
                return;
            }

            showPopup(`Thanks ${name}! Your message has been received.`, "green");
            contactForm.reset();
        });
    }

    popupClose.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);

    function showPopup(msg, color) {
        popupMessage.textContent = msg;
        popupMessage.style.color = color;
        popup.style.display = "block";
        overlay.style.display = "block";
    }

    function closePopup() {
        popup.style.display = "none";
        overlay.style.display = "none";
    }
});