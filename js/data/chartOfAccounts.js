// data/chartOfAccounts.js

export const chartOfAccounts = [

    // =====================
    // ASSETS (1000)
    // =====================

    {
        code: "1001",
        name: "Cash on Hand",
        type: "Asset",
        category: "Current Asset",
        normalBalance: "Debit",
        cashFlowCategory: "Operating"
    },

    {
        code: "1002",
        name: "Bank",
        type: "Asset",
        normalBalance: "Debit",
        cashFlowCategory: "Operating"
    },

    {
        code: "1003",
        name: "Accounts Receivable",
        type: "Asset",
        normalBalance: "Debit",
        cashFlowCategory: "Operating"
    },

    {
        code: "1004",
        name: "Feed Inventory",
        type: "Asset",
        normalBalance: "Debit",
        cashFlowCategory: "Operating"
    },

    {
        code: "1005",
        name: "Equipment",
        type: "Asset",
        normalBalance: "Debit",
        cashFlowCategory: "Investing"
    },

    {
        code: "1006",
        name: "Accumulated Depreciation",
        type: "Contra Asset",
        normalBalance: "Credit",
        cashFlowCategory: "Investing"
    },

    // =====================
    // LIABILITIES (2000)
    // =====================

    {
        code: "2001",
        name: "Accounts Payable",
        type: "Liability",
        normalBalance: "Credit",
        cashFlowCategory: "Operating"
    },

    {
        code: "2002",
        name: "Loan Payable",
        type: "Liability",
        normalBalance: "Credit",
        cashFlowCategory: "Financing"
    },

    // =====================
    // EQUITY (3000)
    // =====================

    {
        code: "3001",
        name: "Owner Capital",
        type: "Equity",
        normalBalance: "Credit",
        cashFlowCategory: "Financing"
    },

    {
        code: "3002",
        name: "Additional Capital",
        type: "Equity",
        normalBalance: "Credit",
        cashFlowCategory: "Financing"
    },

    {
        code: "3003",
        name: "Owner Drawings",
        type: "Equity",
        normalBalance: "Debit",
        cashFlowCategory: "Financing"
    },

    {
        code: "3004",
        name: "Retained Earnings",
        type: "Equity",
        normalBalance: "Credit",
        cashFlowCategory: "Financing"
    },

    {
        code: "3005",
        name: "Current Year Earnings",
        type: "Equity",
        normalBalance: "Credit",
        cashFlowCategory: "Financing"
    },

    // =====================
    // REVENUE (4000)
    // =====================

    {
        code: "4001",
        name: "Sales Revenue",
        type: "Revenue",
        normalBalance: "Credit",
        cashFlowCategory: "Operating"
    },

    {
        code: "4002",
        name: "Consulting Revenue",
        type: "Revenue",
        normalBalance: "Credit",
        cashFlowCategory: "Operating"
    },

    // =====================
    // EXPENSES (5000)
    // =====================

    {
        code: "5001",
        name: "Salary Expense",
        type: "Expense",
        normalBalance: "Debit",
        cashFlowCategory: "Operating"
    },

    {
        code: "5002",
        name: "Transportation Expense",
        type: "Expense",
        normalBalance: "Debit",
        cashFlowCategory: "Operating"
    },

    {
        code: "5003",
        name: "Depreciation Expense",
        type: "Expense",
        normalBalance: "Debit",
        cashFlowCategory: "Operating"
    },

    {
        code: "5004",
        name: "Office Supplies Expense",
        type: "Expense",
        normalBalance: "Debit",
        cashFlowCategory: "Operating"
    }

];