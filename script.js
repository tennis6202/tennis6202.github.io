const correctPassword = "titan";

function checkPassword() {
    const input = document.getElementById("passwordInput").value.toLowerCase();
    const message = document.getElementById("message");

    if (input === correctPassword) {
        message.textContent = "Access Granted...";
        message.style.color = "#22c55e";

        setTimeout(() => {
            window.location.href = "unlocked.html";
        }, 800);

    } else {
        message.textContent = "Incorrect Code";
        message.style.color = "#ef4444";
    }
}