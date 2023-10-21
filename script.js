var selectedNumber;

function selectNumber(number) {
    selectedNumber = number;
const selectedCircles = document.querySelectorAll(".selected");
    document.querySelectorAll("num-circles").forEach(circle => {
        // circle.classList.remove("selected");
        
        circle.addEventListener("click", function () {
    // Reset the background color of all selected circles to blue
    selectedCircles.forEach(function (chosen) {
        chosen.style.backgroundColor = "";
    });

    // Change the background color of the clicked circle to red
    circle.style.backgroundColor = "hsl(216, 12%, 54%)";
});
});
    document.querySelector(".num-circles:nth-child(" + number + ")").classList.add("selected");
}

function submitSelection() {
    if (selectedNumber) {
        window.location.href = "thankYou.html?number=" + selectedNumber;
    } else {
        alert("Please rate us.");
    }
}
const selectedCircles = document.querySelectorAll(".selected");
// Add a click event listener to each selected circle
selectedCircles.forEach(function (circle) {
circle.addEventListener("click", function () {
    // Reset the background color of all selected circles to blue
    selectedCircles.forEach(function (chosen) {
        chosen.style.backgroundColor = "";
    });

    // Change the background color of the clicked circle to red
    circle.style.backgroundColor = "hsl(216, 12%, 54%)";
});
});



