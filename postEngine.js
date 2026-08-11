/* ==========================================
   PostingEngine.js
   Accounting Posting Engine
========================================== */

import JournalService from "./JournalService.js";
import LedgerService from "./LedgerService.js";

export default class PostingEngine {

    /**
     * Validate a journal entry.
     */
    static validate(entry){

        if(!entry.date)
            throw new Error("Transaction date is required.");

        if(!entry.reference)
            throw new Error("Reference is required.");

        if(!entry.description)
            throw new Error("Description is required.");

        if(!entry.debitAccount)
            throw new Error("Debit account is required.");

        if(!entry.creditAccount)
            throw new Error("Credit account is required.");

        if(entry.debitAccount === entry.creditAccount)
            throw new Error("Debit and Credit accounts cannot be the same.");

        if(Number(entry.amount) <= 0)
            throw new Error("Amount must be greater than zero.");

        return true;
    }

    /**
     * Post transaction
     */
    static post(entry){

        this.validate(entry);

        JournalService.save(entry);

        LedgerService.post(entry);

        console.log("Posting completed.");

        return true;

    }

}