// services/reports/CashFlowService.js

import { load } from "../../storage/LocalDatabase.js";
import { chartOfAccounts } from "../../data/chartOfAccounts.js";

export default class CashFlowService {

    static generate() {

        const db = load();

        const operating = [];
        const investing = [];
        const financing = [];

        let operatingTotal = 0;
        let investingTotal = 0;
        let financingTotal = 0;

        db.ledger.forEach(entry => {

            // Only Cash and Bank entries affect cash flow
            if (
                entry.account !== "Cash on Hand" &&
                entry.account !== "Bank"
            ) {
                return;
            }

            // Positive = money received
            // Negative = money paid

            const amount = entry.debit - entry.credit;

            // Find the original transaction
            const transaction = db.transactions.find(t =>
                t.date === entry.date &&
                t.description === entry.description
            );

            if (!transaction) return;

            const oppositeAccount =
                transaction.debitAccount === entry.account
                    ? transaction.creditAccount
                    : transaction.debitAccount;

            const account =
                chartOfAccounts.find(a =>
                    a.name === oppositeAccount
                );

            if (!account) return;

            switch (account.type) {

                case "Revenue":
                case "Expense":

                    operating.push({

                        date: entry.date,
                        description: entry.description,
                        amount

                    });

                    operatingTotal += amount;

                    break;

                case "Asset":

                    if (
                        oppositeAccount !== "Cash on Hand" &&
                        oppositeAccount !== "Bank"
                    ) {

                        investing.push({

                            date: entry.date,
                            description: entry.description,
                            amount

                        });

                        investingTotal += amount;
                    }

                    break;

                case "Liability":
                case "Equity":

                    financing.push({

                        date: entry.date,
                        description: entry.description,
                        amount

                    });

                    financingTotal += amount;

                    break;
            }

        });

        return {

            operating,

            investing,

            financing,

            operatingTotal,

            investingTotal,

            financingTotal,

            netCashFlow:
                operatingTotal +
                investingTotal +
                financingTotal

        };

    }

}