// js/trialBalance.js

import { getTransactions } from "./storage.js";
import { chartOfAccounts } from "../data/chartOfAccounts.js";

export function renderTrialBalance() {

    const tbody =
        document.querySelector("#trialBalanceTable tbody");

    tbody.innerHTML = "";

    const balances = {};

    // Initialize all accounts
    chartOfAccounts.forEach(account => {

        balances[account.name] = {

            type: account.normalBalance,

            amount: 0

        };

    });

    const transactions = getTransactions();

    // Calculate balances
    transactions.forEach(transaction => {

        balances[transaction.debit].amount += transaction.amount;

        balances[transaction.credit].amount += transaction.amount;

    });

    let totalDebit = 0;
    let totalCredit = 0;

    chartOfAccounts.forEach(account => {

        const balance =
            balances[account.name].amount;

        if (balance === 0) return;

        let debit = "";
        let credit = "";

        if (account.normalBalance === "Debit") {

            debit = balance.toLocaleString();
            totalDebit += balance;

        } else {

            credit = balance.toLocaleString();
            totalCredit += balance;

        }

        tbody.innerHTML += `
        <tr>

            <td>${account.name}</td>

            <td>${debit}</td>

            <td>${credit}</td>

        </tr>
        `;

    });

    document.getElementById("totalDebit").textContent =
        "₦" + totalDebit.toLocaleString();

    document.getElementById("totalCredit").textContent =
        "₦" + totalCredit.toLocaleString();

    if (totalDebit !== totalCredit) {

        alert("Trial Balance is NOT balanced!");

    }

}