// Retrieve saved background color from local storage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    localStorage.setItem('bgColor', newColor); }


document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);
