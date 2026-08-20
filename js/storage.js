// js/storage.js

const TRANSACTION_KEY = "transactions";

/**
 * Get all accounting transactions
 */
export function getTransactions() {

    try {

        const data =
            localStorage.getItem(TRANSACTION_KEY);

        if (!data) {
            return [];
        }

        const transactions =
            JSON.parse(data);

        return Array.isArray(transactions)
            ? transactions
            : [];

    } catch (error) {

        console.error(
            "Error reading transactions:",
            error
        );

        return [];

    }

}


/**
 * Save a new accounting transaction
 */
export function saveTransaction(transaction) {

    if (!transaction) {
        console.error(
            "Cannot save empty transaction."
        );

        return false;
    }

    const transactions =
        getTransactions();

    transactions.push(transaction);

    try {

        localStorage.setItem(
            TRANSACTION_KEY,
            JSON.stringify(transactions)
        );

        return true;

    } catch (error) {

        console.error(
            "Error saving transaction:",
            error
        );

        return false;

    }

}


/**
 * Delete all application data
 */
export function resetDatabase() {

    localStorage.clear();

}


/**
 * Delete only accounting transactions
 */
export function clearTransactions() {

    localStorage.removeItem(
        TRANSACTION_KEY
    );

}