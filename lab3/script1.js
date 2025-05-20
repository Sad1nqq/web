
function checkAge() {
    let age = prompt("Введите ваш возраст:");

    if (age !== null && !isNaN(age)) {
        age = Number(age);

        if (age < 18) {
            let parentsPermission = confirm("Родители разрешили?");

            if (parentsPermission) {
                let password = prompt("Введите пароль:");

                if (password === "Даем добро") {
                    alert("Добро пожаловать!");
                } else if (password === null) {
                    alert("Вход отменён");
                } else {
                    alert("Пароль неверен");
                }
            } else {
                alert("Доступ запрещен");
            }
        } else {
            alert("Добро пожаловать!");
        }
    } else {
        alert("Пожалуйста, введите корректный возраст.");
    }
}

window.onload = checkAge;