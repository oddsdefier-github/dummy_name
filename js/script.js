let generateText = document.getElementById("generated-text");
let copyText = document.getElementById("copyString")
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

    // navigator.clipboard.writeText(generateText.value);
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
        console.log(generatedString)
        console.log(generateText.value)
    });




    copyText.addEventListener("click", () => {
        generateText.value = generateText.value.trim();
        if (generateText.value != "") {
            copyToClipboard()
        } else {
            console.log("empty")
        }
    })




});