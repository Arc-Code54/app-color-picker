document.getElementById("colorInput").addEventListener("input", function(event){
    // Get the selected colr from input
    let selectedColor = event.target.value

    // update color texxt
    document.getElementById("colorCode").textContent = selectedColor

    // update background color of display
    document.getElementById("colorDisplay").style.backgroundColor = selectedColor
})