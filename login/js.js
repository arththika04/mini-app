const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
    // Toggle type (password <-> text)
    const currentType = password.getAttribute("type");
    password.setAttribute(
        "type", 
        currentType === "password" ? "text" : "password"
    );

    // Change eye icon text for fun
    togglePassword.textContent = 
        currentType === "password" ? "🙈" : "👁️";
});

