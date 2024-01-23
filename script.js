const key = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat'
}

const invertedKey = {};
for (let letter in key) {
    if (key.hasOwnProperty(letter)) {
        invertedKey[key[letter]] = letter;
    }
}

function encrypt(input,key){
    const encryptedString = input.split('').map(letter => key[letter] || letter).join('');
    console.log(encryptedString)
    document.querySelector(".answer").innerHTML = encryptedString;
}

function decrypt(input, invertedKey) {
    const regex = new RegExp(Object.keys(invertedKey).join('|'), 'g');
    const decryptedString = input.replace(regex, match => invertedKey[match] || match);
    console.log(decryptedString)
    document.querySelector(".answer").innerHTML = decryptedString;
}

function clearResultArea(){
    document.querySelector(".text-res").innerHTML = "";
}

const inputTextArea = document.querySelector("textarea");
const encryptBtn = document.querySelector(".btn-encriptar");
const decryptBtn = document.querySelector(".btn-decriptar");

encryptBtn.addEventListener("click", () => {
    const inputText = inputTextArea.value;
    encrypt(inputText, key);
    clearResultArea();
});

decryptBtn.addEventListener("click", () => {
    const inputText = inputTextArea.value;
    decrypt(inputText, invertedKey);
    clearResultArea();
});
