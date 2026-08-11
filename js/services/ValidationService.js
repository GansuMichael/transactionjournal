// services/ValidationService.js

import { chartOfAccounts }
from "../data/chartOfAccounts.js";

export default class ValidationService {

    static validate(transaction, db) {

        // Date
        if (!transaction.date) {
            throw new Error("Transaction date is required.");
        }

        // Reference
        if (!transaction.reference) {
            throw new Error("Reference number is required.");
        }

        // Unique reference
        const exists = db.transactions.find(
            t => t.reference === transaction.reference
        );

        if (exists) {
            throw new Error("Reference number already exists.");
        }

        // Description
        if (!transaction.description.trim()) {
            throw new Error("Description is required.");
        }

        // Amount
        if (
            isNaN(transaction.amount) ||
            transaction.amount <= 0
        ) {
            throw new Error("Amount must be greater than zero.");
        }

        // Debit/Credit accounts
        if (
            transaction.debitAccount ===
            transaction.creditAccount
        ) {
            throw new Error(
                "Debit and Credit accounts cannot be the same."
            );
        }

        const debitExists =
            chartOfAccounts.find(
                a => a.name === transaction.debitAccount
            );

        const creditExists =
            chartOfAccounts.find(
                a => a.name === transaction.creditAccount
            );

        if (!debitExists) {
            throw new Error("Invalid debit account.");
        }

        if (!creditExists) {
            throw new Error("Invalid credit account.");
        }

        return true;

    }

}