var urlParams = new URLSearchParams(window.location.search);
var selectedNumber = urlParams.get('number');
var resultText = document.getElementById('resultText');

if (selectedNumber) {
    resultText.textContent = "You chose " + selectedNumber + " out of 5.";
} else {
    resultText.textContent = "No number selected.";
}
