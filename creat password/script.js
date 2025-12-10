const passwordInput = document.getElementById("password");
const rulesBox = document.getElementById("rulesBox");

// Individual rule elements
const ruleLength = document.getElementById("rule-length");
const ruleUpper = document.getElementById("rule-upper");
const ruleNumber = document.getElementById("rule-number");
const ruleSpecial = document.getElementById("rule-special");

// Show rules when input loses focus (blur event)
passwordInput.addEventListener("blur", () => {
    rulesBox.classList.remove("hidden");
    validatePassword(passwordInput.value);
});

// Validate on every typing also
passwordInput.addEventListener("input", () => {
    validatePassword(passwordInput.value);
});

function validatePassword(password) {
    // Rule 1: Length ≥ 8
    updateRule(ruleLength, password.length >= 8);

    // Rule 2: Uppercase letter
    updateRule(ruleUpper, /[A-Z]/.test(password));

    // Rule 3: Number
    updateRule(ruleNumber, /[0-9]/.test(password));

    // Rule 4: Special character
    updateRule(ruleSpecial, /[!@#$%^&*(),.?":{}|<>]/.test(password));
}

function updateRule(element, condition) {
    if (condition) {
        element.classList.add("valid");
    } else {
        element.classList.remove("valid");
    }
}
