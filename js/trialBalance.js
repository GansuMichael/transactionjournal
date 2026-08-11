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

            debitTotal: 0,
            creditTotal: 0
        
        };

    });

    const transactions = getTransactions();

    // Calculate balances
    transactions.forEach(transaction => {

        balances[transaction.debit].debitTotal += transaction.amount;

        balances[transaction.credit].creditTotal += transaction.amount;

    });

    let totalDebit = 0;
    let totalCredit = 0;

    chartOfAccounts.forEach(account => {

        const debitTotal =
        balances[account.name].debitTotal;
    
        const creditTotal =
        balances[account.name].creditTotal;

        let debit = "";
        let credit = "";

        let balance = 0;

        if (debitTotal >= creditTotal) {
        
            balance = debitTotal - creditTotal;
        
            debit = balance.toLocaleString();
        
            totalDebit += balance;
        
        } else {
        
            balance = creditTotal - debitTotal;
        
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