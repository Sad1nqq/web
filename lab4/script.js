// Данные о товарах (бывший products.json)
const products = [
    { "id": 1, "name": "Книга 'Приключения Тома Сойера'", "price": 250, "packaging": [1, 5, 10] },
    { "id": 2, "name": "Ручка шариковая", "price": 50, "packaging": [1, 5, 10] },
    { "id": 3, "name": "Блокнот", "price": 100, "packaging": [1, 5, 10] },
    { "id": 4, "name": "Карандаш", "price": 30, "packaging": [1, 5, 10] },
    { "id": 5, "name": "Ластик", "price": 20, "packaging": [1, 5, 10] }
];

// Заполнение таблицы товарами
const productTable = document.getElementById("productTable");

// Проверка, что products определен
if (typeof products !== 'undefined' && Array.isArray(products)) {
    products.forEach(product => {
        let row = productTable.insertRow();
        let nameCell = row.insertCell();
        let priceCell = row.insertCell();
        let packagingCell = row.insertCell();
        let packagingRequiredCell = row.insertCell();
        let quantityCell = row.insertCell();

        nameCell.innerHTML = product.name;
        priceCell.innerHTML = product.price;

        // Выпадающий список для выбора упаковки
        let packagingSelect = document.createElement("select");
        packagingSelect.name = "packaging_" + product.id;
        product.packaging.forEach(packSize => {
            let option = document.createElement("option");
            option.value = packSize;
            option.text = packSize + " шт.";
            packagingSelect.add(option);
        });
        packagingCell.appendChild(packagingSelect);

        // Чекбокс для выбора упаковки
        let packagingCheckbox = document.createElement("input");
        packagingCheckbox.type = "checkbox";
        packagingCheckbox.name = "packagingRequired_" + product.id;
        packagingRequiredCell.appendChild(packagingCheckbox);

        // Поле для ввода количества
        let quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.name = "quantity_" + product.id;
        quantityInput.value = 0;
        quantityCell.appendChild(quantityInput);
    });
} else {
    console.error("Ошибка: Не удалось загрузить данные о товарах. Данные отсутствуют.");
    // Добавьте код для отображения сообщения об ошибке на странице
}

// Функция обработки заказа
function processOrder() {
    let subtotal = 0;
    let totalQuantity = 0;
    let packagingCost = 0;
    const packagingPrice = 10; // Фиксированная цена за упаковку

    products.forEach(product => {
        let quantity = parseInt(document.querySelector("input[name='quantity_" + product.id + "']").value);
        let packaging = parseInt(document.querySelector("select[name='packaging_" + product.id + "']").value);
        let packagingRequired = document.querySelector("input[name='packagingRequired_" + product.id + "']").checked;

        let itemQuantity = quantity * packaging; // Количество единиц товара
        subtotal += product.price * itemQuantity;
        totalQuantity += itemQuantity;

        if (packagingRequired && quantity > 0) {
            packagingCost += quantity * packagingPrice; // Цена за кол-во выбранных упаковок
        }
    });

    let discount = 0;
    if (totalQuantity > 30) {
        discount = subtotal * 0.2;
    }

    let delivery = document.getElementById("delivery").checked;
    let deliveryCost = 0;
    if (delivery) {
        deliveryCost = (subtotal - discount) * 0.05;
    }

    let total = subtotal - discount + packagingCost + deliveryCost;

    // Вывод результатов
    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("packagingCost").innerText = packagingCost.toFixed(2);
    document.getElementById("deliveryCost").innerText = deliveryCost.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}