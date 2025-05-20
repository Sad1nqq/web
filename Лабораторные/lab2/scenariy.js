function calculateAndDisplayCircleArea() {
    const radiusInput = prompt("Введите радиус круга:");
    const radius = parseFloat(radiusInput);

    if (radiusInput !== null && !isNaN(radius) && radius > 0) {
        const area = Math.PI * radius ** 2;
        alert(`Площадь круга с радиусом ${radius} равна ${area}`);
    } else {
        alert("Пожалуйста, введите корректный радиус.");
    }
}
