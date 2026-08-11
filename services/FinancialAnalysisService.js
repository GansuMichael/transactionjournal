// services/FinancialAnalysisService.js

import FinancialReportService
from "./reports/FinancialReportService.js";

export default class FinancialAnalysisService {

    static analyze(){

        const report =
            FinancialReportService.generate();

        return{

            grossProfit:
                report.incomeStatement.totalRevenue,

            netProfit:
                report.incomeStatement.netProfit,

            cash:
                report.cashFlow.netCashFlow,

            totalAssets:
                report.balanceSheet.totalAssets,

            totalLiabilities:
                report.balanceSheet.totalLiabilities,

            equity:
                report.balanceSheet.totalEquity

        };

    }

}