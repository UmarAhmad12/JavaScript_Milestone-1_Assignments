function calcHighestMarks() {
  // get input value
  let firstMarks = document.getElementById("first-marks");
  let secondMarks = document.getElementById("second-marks");
  let thirdMarks = document.getElementById("third-marks");
  let fourthMarks = document.getElementById("fourth-marks");
  let fifthMarks = document.getElementById("fifth-marks");


  // calculate highest marks
  let marks = [parseInt(firstMarks.value), parseInt(secondMarks.value),parseInt(thirdMarks.value),parseInt(fourthMarks.value), parseInt(fifthMarks.value)];

  let highest = 0;
  for (let i = 0; i < marks.length; i++) {
    marks[i] > highest ?  highest = marks[i] : "null";
    document.getElementById("result").innerText = highest;
    }
  }

  


