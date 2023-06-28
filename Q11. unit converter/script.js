function ctof() {
    const celsius = document.getElementById('Celsius').value;
    const result = document.getElementById('result');
    const fahrenheit = (celsius * 9 / 5) + 32;
    result.innerText = fahrenheit;
}

document.getElementById('btn').addEventListener("click", ctof);