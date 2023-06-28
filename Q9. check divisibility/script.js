let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// print the number that are divisible by 3 but not by 2. Using a for loop and continue statement.

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 !== 0){
        continue;
    }
    document.write(arr[i]);
    document.write("<br>");
}
