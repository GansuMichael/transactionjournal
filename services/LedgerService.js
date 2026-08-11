// services/LedgerService.js

import { load } from "../storage/LocalDatabase.js";
import { chartOfAccounts } from "../data/chartOfAccounts.js";

export default class LedgerService {

    static calculateBalances(ledger){

        Object.values(ledger).forEach(account=>{
    
            let runningBalance=0;
    
            account.entries.forEach(entry=>{
    
                if(account.account.normalBalance==="Debit"){
    
                    runningBalance += entry.debit;
    
                    runningBalance -= entry.credit;
    
                }
    
                else{
    
                    runningBalance += entry.credit;
    
                    runningBalance -= entry.debit;
    
                }
    
                entry.balance=runningBalance;
    
            });
    
            account.balance=runningBalance;
    
        });
    
    }
    

    static getLedger() {

        const db = load();

        const ledger = {};

        chartOfAccounts.forEach(account => {

            ledger[account.name] = {

                account: account,

                entries: [],

                balance: 0

            };

        });

        db.ledger.forEach(entry => {

            const accountLedger =
                ledger[entry.account];

            if (!accountLedger) return;

            accountLedger.entries.push(entry);

        });

        return ledger;

    }

    static build(){

        const ledger=this.getLedger();
    
        this.calculateBalances(ledger);
    
        return ledger;
    
    }

}