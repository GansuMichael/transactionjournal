// services/PostingService.js

import LedgerEntry from "../models/LedgerEntry.js";
import { load, save } from "../storage/LocalDatabase.js";
import ValidationService
from "./ValidationService.js";


export default class PostingService {

    static post(transaction) {

        const db = load();

        ValidationService.validate(
            transaction,
            db
        );

        // Save Journal Transaction
        db.transactions.push(transaction);

        // Debit Entry
        const debitEntry = new LedgerEntry({

            account: transaction.debitAccount,

            date: transaction.date,

            description: transaction.description,

            debit: transaction.amount,

            credit: 0

        });

        // Credit Entry
        const creditEntry = new LedgerEntry({

            account: transaction.creditAccount,

            date: transaction.date,

            description: transaction.description,

            debit: 0,

            credit: transaction.amount

        });

        // Save Ledger Entries
        db.ledger.push(debitEntry);
        db.ledger.push(creditEntry);

        save(db);

        return true;

    }

}