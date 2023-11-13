let balance = 0;

function addTransaction(e) {
    e.preventDefault();
    const transactionType = document.getElementById("transactionType");
    const transactionInput = document.getElementById("transactionInput");
    const amountInput = document.getElementById("amountInput");
    const transactionsList = document.getElementById("transactions");
    const balanceElement = document.getElementById("balance");

    const type = transactionType.value;
    const transaction = transactionInput.value;
    const amount = parseFloat(amountInput.value);

    if (!transaction || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid transaction and amount.");
        return;
    }

    if (type === "expense") {
        balance -= amount;
    } else {
        balance += amount;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${transaction}:</strong> $${amount}`;
    listItem.innerHTML += ` <button onclick="removeTransaction(this)">Remove</button>`;

    transactionsList.appendChild(listItem);

    balanceElement.textContent = `Balance: $${balance}`;

    transactionInput.value = "";
    amountInput.value = "";
}
function removeTransaction(element) {
    const listItem = element.parentNode;
    listItem.remove();
}