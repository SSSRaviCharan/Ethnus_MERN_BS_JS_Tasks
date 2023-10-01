function sortString() {
  const inputString = document.getElementById("inputString").value;
  const sortedString = inputString.split("").sort().join("");
  document.getElementById(
    "result"
  ).innerText = `Alphabetical order of the string: ${sortedString}`;
}
