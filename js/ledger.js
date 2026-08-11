// js/ledger.js

import { getTransactions } from "./storage.js";
import { chartOfAccounts } from "../data/chartOfAccounts.js";

export function renderLedger() {

    const tbody =
        document.querySelector("#ledgerTable tbody");

    tbody.innerHTML = "";

    const transactions = getTransactions();

    // Store balances for each account
    const balances = {};

    chartOfAccounts.forEach(account => {
        balances[account.name] = 0;
    });

    transactions.forEach(transaction => {

        // Debit Entry
        balances[transaction.debit] += transaction.amount;

        tbody.innerHTML += `
        <tr>

            <td>${transaction.debit}</td>

            <td>${transaction.date}</td>

            <td>${transaction.description}</td>

            <td>₦${transaction.amount.toLocaleString()}</td>

            <td>-</td>

            <td>₦${balances[transaction.debit].toLocaleString()}</td>

        </tr>
        `;

        // Credit Entry
        balances[transaction.credit] -= transaction.amount;

        tbody.innerHTML += `
        <tr>

            <td>${transaction.credit}</td>

            <td>${transaction.date}</td>

            <td>${transaction.description}</td>

            <td>-</td>

            <td>₦${transaction.amount.toLocaleString()}</td>

            <td>₦${balances[transaction.credit].toLocaleString()}</td>

        </tr>
        `;

    });

}