document.getElementById('colorButton').addEventListener('click', function() {
    const colorBox = document.getElementById('colorBox');
    const colors = ['#ffcccb', '#add8e6', '#ffb6c1', '#87ceeb', '#ff69b4', '#b0e0e6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
});

