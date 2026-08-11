// services/reports/FinancialReportService.js

import IncomeStatementService from "./IncomeStatementService.js";
import StatementOfChangesInEquityService from "./StatementOfChangesInEquityService.js";
import BalanceSheetService from "./BalanceSheetService.js";
import CashFlowService from "./CashFlowService.js";

export default class FinancialReportService {

    static generate() {

        const incomeStatement =
            IncomeStatementService.generate();

        const equityStatement =
            StatementOfChangesInEquityService.generate();

        const balanceSheet =
            BalanceSheetService.generate();

        const cashFlow =
            CashFlowService.generate();

        return {

            generatedAt: new Date(),

            incomeStatement,

            equityStatement,

            balanceSheet,

            cashFlow

        };

    }

}