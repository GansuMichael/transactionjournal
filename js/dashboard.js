// js/dashboard.js

import { getTransactions } from "./storage.js";

export function renderDashboard() {

    const transactions = getTransactions();

    let cashBalance = 0;
    let bankBalance = 0;
    let revenueBalance = 0;
    let expenseBalance = 0;

    transactions.forEach(transaction => {

        const amount = Number(transaction.amount);

        // CASH
        if (transaction.debit === "Cash") {
            cashBalance += amount;
        }

        if (transaction.credit === "Cash") {
            cashBalance -= amount;
        }

        // BANK
        if (transaction.debit === "Bank") {
            bankBalance += amount;
        }

        if (transaction.credit === "Bank") {
            bankBalance -= amount;
        }

        // REVENUE
        // Any account containing "Sales" is treated as revenue
        if (
            transaction.credit &&
            transaction.credit.toLowerCase().includes("sales")
        ) {
            revenueBalance += amount;
        }

        // EXPENSE
        // Any debit account containing Expense, Cost or similar
        if (
            transaction.debit &&
            (
                transaction.debit.toLowerCase().includes("expense") ||
                transaction.debit.toLowerCase().includes("cost")
            )
        ) {
            expenseBalance += amount;
        }

    });

    const profitBalance =
        revenueBalance - expenseBalance;


    // Update Dashboard Cards

    const cashElement =
        document.getElementById("cashBalance");

    const bankElement =
        document.getElementById("bankBalance");

    const revenueElement =
        document.getElementById("revenueBalance");

    const expenseElement =
        document.getElementById("expenseBalance");

    const profitElement =
        document.getElementById("profitBalance");


    if (cashElement) {
        cashElement.textContent =
            formatCurrency(cashBalance);
    }

    if (bankElement) {
        bankElement.textContent =
            formatCurrency(bankBalance);
    }

    if (revenueElement) {
        revenueElement.textContent =
            formatCurrency(revenueBalance);
    }

    if (expenseElement) {
        expenseElement.textContent =
            formatCurrency(expenseBalance);
    }

    if (profitElement) {
        profitElement.textContent =
            formatCurrency(profitBalance);
    }

}


/**
 * Format Nigerian Naira
 */
function formatCurrency(amount) {

    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2
    }).format(amount);

}