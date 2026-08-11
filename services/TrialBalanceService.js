// services/TrialBalanceService.js

import LedgerService from "./LedgerService.js";

export default class TrialBalanceService {

    static generate() {

        const ledger = LedgerService.build();

        const trialBalance = [];

        let totalDebit = 0;
        let totalCredit = 0;

        Object.values(ledger).forEach(accountLedger => {

            const account = accountLedger.account;
            const balance = accountLedger.balance;

            // Ignore zero-balance accounts
            if (balance === 0) return;

            const row = {

                code: account.code,

                account: account.name,

                type: account.type,

                debit: 0,

                credit: 0

            };

            if (account.normalBalance === "Debit") {

                row.debit = balance;
                totalDebit += balance;

            } else {

                row.credit = balance;
                totalCredit += balance;

            }

            trialBalance.push(row);

        });

        return {

            accounts: trialBalance,

            totalDebit,

            totalCredit,

            balanced: totalDebit === totalCredit

        };

        if (totalDebit !== totalCredit) {

            throw new Error(
                `Trial Balance is out of balance.
                 Debit: ${totalDebit}
                 Credit: ${totalCredit}`
            );
        
        }

    }

}