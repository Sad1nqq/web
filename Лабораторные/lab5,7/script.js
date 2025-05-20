const employees = [];

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const surname = document.getElementById('surname').value;
    const contractDate = new Date(document.getElementById('contractDate').value);
    const contractDuration = parseInt(document.getElementById('contractDuration').value);
    const birthDate = new Date(document.getElementById('birthDate').value);
    
    const endDate = new Date(contractDate);
    endDate.setFullYear(endDate.getFullYear() + contractDuration);
    
    const zodiac = getZodiacSign(birthDate);
    
    employees.push({
        surname,
        contractDate,
        contractDuration,
        endDate,
        zodiac
    });
    
    displayEmployees();
    this.reset();
});

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = `${employee.surname}: Дата окончания контракта - ${employee.endDate.toLocaleDateString()}, Месяц - ${employee.endDate.toLocaleString('default', { month: 'long' })}, День недели - ${employee.endDate.toLocaleString('default', { weekday: 'long' })}, Знак зодиака - ${employee.zodiac}`;
        employeeList.appendChild(li);
    });
}

function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Месяцы начинаются с 0

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Водолей";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Рыбы";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Овен";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Телец";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Близнецы";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Рак";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Лев";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Дева";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Весы";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Скорпион";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Стрелец";
    return "Козерог"; // Если ни одно из условий не выполнено, значит, это Козерог
}

document.getElementById('checkButton').addEventListener('click', function() {
    const yearToCheck = parseInt(document.getElementById('checkYear').value);
    const contractEndList = document.getElementById('contractEndList');
    contractEndList.innerHTML = '';
    
    employees.forEach(employee => {
        if (employee.endDate.getFullYear() === yearToCheck) {
            const li = document.createElement('li');
            li.textContent = employee.surname;
            contractEndList.appendChild(li);
        }
    });
});