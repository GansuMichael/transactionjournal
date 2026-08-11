/* ==========================================
   LedgerService.js
========================================== */

import Storage from "./storage.js";

export default class LedgerService{

    /**
     * Post journal into ledger
     */
    static post(entry){

        const database = Storage.database();

        // Debit Line
        database.ledger.push({

            id: crypto.randomUUID(),

            account: entry.debitAccount,

            accountName: entry.debitAccountName,

            date: entry.date,

            reference: entry.reference,

            description: entry.description,

            debit: Number(entry.amount),

            credit: 0,

            balance: 0

        });

        // Credit Line
        database.ledger.push({

            id: crypto.randomUUID(),

            account: entry.creditAccount,

            accountName: entry.creditAccountName,

            date: entry.date,

            reference: entry.reference,

            description: entry.description,

            debit: 0,

            credit: Number(entry.amount),

            balance: 0

        });

        this.calculateBalances(database);

        Storage.save(database);

    }

    /**
     * Calculate running balances
     */
    static calculateBalances(database){

        const balances = {};

        database.ledger.forEach(line=>{

            if(!balances[line.account]){

                balances[line.account] = 0;

            }

            balances[line.account] += line.debit;

            balances[line.account] -= line.credit;

            line.balance = balances[line.account];

        });

    }

    /**
     * Get all ledger entries
     */
    static all(){

        return Storage.database().ledger;

    }

    /**
     * Filter by account
     */
    static account(accountCode){

        return this
            .all()
            .filter(line => line.account === accountCode);

    }

}