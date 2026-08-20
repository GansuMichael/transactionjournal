// js/journal.js

import {
    saveTransaction,
    getTransactions
} from "./storage.js";

import { renderLedger } from "./ledger.js";

import {
    renderTrialBalance
}
from "./trialBalance.js";

import { renderDashboard } from "./dashboard.js";

export function initializeJournal() {

    const form =
        document.getElementById("journalForm");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const transaction = {

            id: Date.now(),

            date:
                document.getElementById("date").value,

            reference:
                document.getElementById("reference").value,

            description:
                document.getElementById("description").value,

            debit:
                document.getElementById("debitAccount").value,

            credit:
                document.getElementById("creditAccount").value,

            amount:
                Number(document.getElementById("amount").value)

        };

        // Basic validation
        if (transaction.debit === transaction.credit) {
            alert("Debit and Credit accounts cannot be the same.");
            return;
        }

        if (transaction.amount <= 0) {
            alert("Amount must be greater than zero.");
            return;
        }

        saveTransaction(transaction);

        form.reset();

        renderJournal();

        renderLedger();

        renderTrialBalance();

        renderDashboard();

    });

}

export function renderJournal() {

    const tbody =
        document.querySelector("#journalTable tbody");

    tbody.innerHTML = "";

    const transactions =
        getTransactions();

    transactions.forEach(t => {

        tbody.innerHTML += `
        <tr>

            <td>${t.date}</td>

            <td>${t.reference}</td>

            <td>${t.description}</td>

            <td>${t.debit}</td>

            <td>${t.credit}</td>

            <td>₦${t.amount.toLocaleString()}</td>

        </tr>
        `;

    });

}