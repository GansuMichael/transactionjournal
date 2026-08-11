// services/reports/BalanceSheetService.js

import TrialBalanceService from "../TrialBalanceService.js";

const equity =
    StatementOfChangesInEquityService.generate();

const totalEquity =
    equity.closingEquity;

export default class BalanceSheetService {

    static generate() {

        const tb = TrialBalanceService.generate();

        const assets = [];
        const liabilities = [];
        const equity = [];

        let totalAssets = 0;
        let totalLiabilities = 0;
        let totalEquity = 0;

        tb.accounts.forEach(account => {

            switch(account.type){

                case "Asset":

                    assets.push(account);

                    totalAssets += account.debit;

                    break;

                case "Contra Asset":

                    assets.push(account);

                    totalAssets -= account.credit;

                    break;

                case "Liability":

                    liabilities.push(account);

                    totalLiabilities += account.credit;

                    break;

                case "Equity":

                    equity.push(account);

                    totalEquity += account.credit;

                    break;

            }

        });

        return{

            assets,

            liabilities,

            equity,

            totalAssets,

            totalLiabilities,

            totalEquity,

            balanced:

                totalAssets ===

                (totalLiabilities + totalEquity)

        };

    }

}