// services/reports/IncomeStatementService.js

import TrialBalanceService from "../TrialBalanceService.js";

export default class IncomeStatementService {

    static generate() {

        const tb = TrialBalanceService.generate();

        let revenue = [];

        let expenses = [];

        let totalRevenue = 0;

        let totalExpenses = 0;

        tb.accounts.forEach(account => {

            if (account.type === "Revenue") {

                revenue.push(account);

                totalRevenue += account.credit;

            }

            if (account.type === "Expense") {

                expenses.push(account);

                totalExpenses += account.debit;

            }

        });

        const netProfit =

            totalRevenue - totalExpenses;

        return {

            revenue,

            expenses,

            totalRevenue,

            totalExpenses,

            netProfit

        };

    }

}