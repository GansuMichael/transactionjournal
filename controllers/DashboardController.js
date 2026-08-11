// controllers/DashboardController.js

import { load } from "../storage/LocalDatabase.js";
import { chartOfAccounts } from "../data/chartOfAccounts.js";

export default class DashboardController {

    static refresh() {

        const db = load();

        const summary = {

            cash: 0,

            bank: 0,

            revenue: 0,

            expenses: 0,

            assets: 0,

            liabilities: 0,

            equity: 0

        };

        db.ledger.forEach(entry => {

            const account =
                chartOfAccounts.find(
                    a => a.name === entry.account
                );

            if (!account) return;

            const balance =
                entry.debit - entry.credit;

            switch (account.type) {

                case "Asset":
                    summary.assets += balance;
                    break;

                case "Liability":
                    summary.liabilities += (-balance);
                    break;

                case "Equity":
                    summary.equity += (-balance);
                    break;

                case "Revenue":
                    summary.revenue += (-balance);
                    break;

                case "Expense":
                    summary.expenses += balance;
                    break;

            }

            if (entry.account === "Cash on Hand") {

                summary.cash += balance;

            }

            if (entry.account === "Bank") {

                summary.bank += balance;

            }

        });

        const profit =
            summary.revenue - summary.expenses;

        document.getElementById("cashBalance").textContent =
            "₦" + summary.cash.toLocaleString();

        document.getElementById("bankBalance").textContent =
            "₦" + summary.bank.toLocaleString();

        document.getElementById("revenueBalance").textContent =
            "₦" + summary.revenue.toLocaleString();

        document.getElementById("expenseBalance").textContent =
            "₦" + summary.expenses.toLocaleString();

        document.getElementById("profitBalance").textContent =
            "₦" + profit.toLocaleString();

    }

}