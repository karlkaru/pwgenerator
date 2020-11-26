var genPass

function generate() {
    var passLength = document.getElementById('passLength');
    var uppercaseChk = document.getElementById('uppercaseChk');
    var lowercaseChk = document.getElementById('lowercaseChk');
    var symbolsChk = document.getElementById('symbolsChk');
    var numbersChk = document.getElementById('numbersChk');
    genPass = document.getElementById('genPass');

    genPass.value = generatePass(passLength.value, uppercaseChk.checked, lowercaseChk.checked, numbersChk.checked, symbolsChk.checked);

    console.log(getRandomNumber());

    return false;
}

function passwordLength(length) {
    document.getElementById("passLengthLabel").innerHTML="Password Length: " + length;
    generate();
}

function generatePass(length, upper, lower, num, sym) {
    var temp = ""
    for(i = 0; i < length; i++){
        rand = Math.floor(Math.random() * 4);
        if(rand == 0 && upper == true) {
            temp = temp.concat(getRandomUpper());
        }
        else if (rand == 1 && lower == true){
            temp = temp.concat(getRandomLower());
        }
        else if(rand == 2 && num == true) {
            temp = temp.concat(getRandomNumber());
        }
        else if(rand == 3 && sym == true){
            temp = temp.concat(getRandomSymbol());
        }
        else{
            i--;
        }
    }
    return temp;
}

function getRandomUpper(){
    return String.fromCharCode(65+Math.floor(Math.random() * 26));
}

function getRandomLower(){
    return String.fromCharCode(97+Math.floor(Math.random() * 26));
}

function getRandomSymbol(){
    return String.fromCharCode(33+Math.floor(Math.random() * 15));
}

function getRandomNumber(){
    return Math.floor(Math.random() * 10);
}

function copyPassword(){
    genPass.select();
    document.execCommand("copy");
}

