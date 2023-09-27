function reverseNumber() {
  const inputNumber = document.getElementById("inputNumber").value;

  if (isNaN(inputNumber)) {
    alert("Enter a valid number.");
    return;
  }

  const reversedNumber = parseInt(
    inputNumber.toString().split("").reverse().join("")
  );

  document.getElementById(
    "result"
  ).innerText = `Reversed number: ${reversedNumber}`;
}
