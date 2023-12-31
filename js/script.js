let generateText = document.getElementById("generated-text");
let copyText = document.getElementById("copyString")
let checkIcon = document.getElementById("check")
let copyIcon = document.getElementById("copy")
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return 'jp' + result;
}

function copyToClipboard() {
    generateText.select();
    generateText.setSelectionRange(0, 99999);

    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied the text: " + generateText.value);
}


document.addEventListener("DOMContentLoaded", () => {
    // let gmail = document.getElementById("gmail_account");
    // let username = document.getElementById("username");
    let submitButton = document.getElementById("submitBtn");

    submitButton.addEventListener("click", () => {
        let generatedString = generateString(10)
        generateText.value = generatedString
        checkIcon.classList.add("hidden");
        copyIcon.classList.remove("hidden");
    });

    copyText.addEventListener("click", () => {
        generateText.value = generateText.value.trim();
        if (generateText.value != "") {
            checkIcon.classList.toggle("hidden");
            copyIcon.classList.toggle("hidden");
            copyToClipboard();
        }
    })
});

