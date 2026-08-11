// js/storage.js

const TRANSACTION_KEY = "transactions";

export function getTransactions() {

    return JSON.parse(
        localStorage.getItem(TRANSACTION_KEY)
    ) || [];

}

export function saveTransaction(transaction) {

    const transactions = getTransactions();

    transactions.push(transaction);

    localStorage.setItem(
        TRANSACTION_KEY,
        JSON.stringify(transactions)
    );

}

export function resetDatabase() {

    localStorage.clear();

}

export function clearTransactions() {

    localStorage.removeItem(TRANSACTION_KEY);

}