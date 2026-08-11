// services/reports/StatementOfChangesInEquityService.js

import TrialBalanceService from "../TrialBalanceService.js";
import IncomeStatementService from "./IncomeStatementService.js";

export default class StatementOfChangesInEquityService {

    static generate() {

        const tb = TrialBalanceService.generate();
        const income = IncomeStatementService.generate();

        let openingCapital = 0;
        let additionalCapital = 0;
        let drawings = 0;
        let retainedEarnings = 0;

        tb.accounts.forEach(account => {

            switch (account.account) {

                case "Owner Capital":
                    openingCapital = account.credit;
                    break;

                case "Additional Capital":
                    additionalCapital = account.credit;
                    break;

                case "Owner Drawings":
                    drawings = account.debit;
                    break;

                case "Retained Earnings":
                    retainedEarnings = account.credit;
                    break;

            }

        });

        const closingEquity =
            openingCapital +
            additionalCapital +
            retainedEarnings +
            income.netProfit -
            drawings;

        return {

            openingCapital,

            additionalCapital,

            retainedEarnings,

            netProfit: income.netProfit,

            drawings,

            closingEquity

        };

    }

}