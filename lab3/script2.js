function createGrid(width, height) {
    let grid = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i % 2 === 0) {
                grid += (j % 2 === 0) ? '* ' : '  ';
            } else {
                grid += (j % 2 === 0) ? '# ' : '  ';
            }
        }
        grid += '\n'; 
    }
    return grid;
}
const gridWidth = parseInt(prompt("Введите ширину решётки: "), 10);
const gridHeight = parseInt(prompt("Введите высоту решётки: "), 10);
if (!isNaN(gridWidth) && gridWidth > 0 && !isNaN(gridHeight) && gridHeight > 0) {
    const gridString = createGrid(gridWidth*2, gridHeight);
    alert(gridString); 
} else {
    alert("Пожалуйста, введите корректные размеры.");
}