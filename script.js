document.getElementById("colorInput").addEventListener("input", function(event){
    // Get the selected color from input
    const selectedColor = event.target.value

    // update color text
    document.getElementById("colorCode").textContent = selectedColor

    // update background color of display
    document.getElementById("colorDisplay").style.backgroundColor = selectedColor
})