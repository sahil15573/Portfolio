function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#FF69B4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}