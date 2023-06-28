function checkCapitalornot() {
  const firstName = document.getElementById("user-name").value;
  const result = document.getElementById("result");

result.innerText = firstName.charAt(0) !== firstName.charAt(0).toUpperCase ? firstName.charAt(0).toUpperCase() + firstName.slice(1) : result.innerText

console.log(result.innerText);
};



  