function calcVowel() {
    const name = document.getElementById('user-name').value;
    const result = document.getElementById('result');
    let count = 0;
    for(let i = 0; i < name.length; i++) {
        if(name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u' || name[i] == 'A' || name[i] == 'E' || name[i] == 'I' || name[i] == 'O' || name[i] == 'U' ) {
            count++;
        }
    }
    result.innerText = count;
};

document.getElementById('submit-btn').addEventListener("click", calcVowel);