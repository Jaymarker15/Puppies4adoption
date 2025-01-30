document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".adopt-btn");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            let puppyName = event.target.previousElementSibling.innerText;
            alert(`Thank you for choosing to adopt ${puppyName}!`);
        });
    });
});
