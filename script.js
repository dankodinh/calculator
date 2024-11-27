//Parsefloat innebär gör om text till ett flytt tal
const firstNumber = parseFloat(prompt("Ange ett första tal"));
const secondNumber = parseFloat(prompt("Ange ett andra tal"));
const operation = prompt ("(+, -, *, /?");


//Kontrollerar att inmatningen är korrekt
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Ange ett giltigt tal, försök igen!");
  } else {
    let result;

    switch(operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if  (secondNumber === 0) {
                alert("Divisionen med noll är inte tillåten.")
                result = null;
            } else {
                result = firstNumber / secondNumber;
            }
            break;
            default:
                alert("Ogiltigt räknesätt.")
                result = null;
    }

    //Om det finns ett resultat visas det!
        if (result !== null) {
            alert(`Resultatet är: ${result}`);
        }
}
