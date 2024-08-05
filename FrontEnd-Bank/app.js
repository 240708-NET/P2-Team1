

document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');

            if (loginForm) {
                loginForm.addEventListener('submit', (event) => {
                    event.preventDefault(); // Prevents the default form submission behavior

                    console.log('Form submission intercepted.');

                    const username = document.getElementById('username').value;
                    const pin = document.getElementById('pin').value;

                    console.log('Username:', username);
                    console.log('PIN:', pin);

                    // Redirect to the account information page
                    window.location.href = 'account.html'; // Redirect to the account page
                });
            }
        });




document.addEventListener('DOMContentLoaded', () => {
    // Replace with actual data from server or API
    const username = 'Harold Ponce'; 
    const accountNumber = '123456789'; 

    // Set the username and account number in the HTML
    document.getElementById('username').textContent = username;
    document.getElementById('accountNumber').textContent = accountNumber;

    // Add event listeners for account item redirections
    const checkingItem = document.getElementById('checking');
    const savingsItem = document.getElementById('savings');

    if (checkingItem) {
        checkingItem.addEventListener('click', () => {
            window.location.href = 'checkings.html'; 
        });
    }

    if (savingsItem) {
        savingsItem.addEventListener('click', () => {
            window.location.href = 'savings.html'; 
        });
    }
});



// app.js

function updateBalance(newBalance) {
    document.getElementById('balance').textContent = newBalance.toFixed(2);
}

function getCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return now.toLocaleDateString(undefined, options);
}

function addTransaction(type, amount) {
    const transactionsDiv = document.getElementById('transactions');
    const transaction = document.createElement('div');
    const date = getCurrentDate();
    transaction.textContent = `${date} - ${type}: $${amount.toFixed(2)}`;
    transactionsDiv.appendChild(transaction);
}

function deposit() {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    
    if (!isNaN(amount) && amount > 0) {
        let currentBalance = parseFloat(document.getElementById('balance').textContent);
        currentBalance += amount;
        updateBalance(currentBalance);
        addTransaction('Deposit', amount);
        amountInput.value = ''; 
    } else {
        alert('Please enter a valid amount to deposit.');
    }
}

function withdraw() {
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    
    if (!isNaN(amount) && amount > 0) {
        let currentBalance = parseFloat(document.getElementById('balance').textContent);
        if (amount <= currentBalance) {
            currentBalance -= amount;
            updateBalance(currentBalance);
            addTransaction('Withdraw', amount);
            amountInput.value = ''; 
        } else {
            alert('Insufficient funds.');
        }
    } else {
        alert('Please enter a valid amount to withdraw.');
    }
}