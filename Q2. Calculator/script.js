function clac() {
    const firstNum = document.getElementById("first-num");
    const secondNum = document.getElementById("second-num");
    const operator = document.getElementById("operator");
    const result = document.getElementById("result");

    switch (operator.value) {
      case "+":
        result.innerText = Number(firstNum.value) + Number(secondNum.value);
        break;
      case "-":
        result.innerText = Number(firstNum.value) - Number(secondNum.value);
        break;
      case "*":
        result.innerText = Number(firstNum.value) * Number(secondNum.value);
        break;
      case "/":
        result.innerText = Number(firstNum.value) / Number(secondNum.value);
        break;
      default:
        alert("Invalid operator")
    }
  }
  