import { loadAccounts } from "./accounts.js";

import {
    initializeJournal,
    renderJournal
} from "./journal.js";

import { renderLedger } from "./ledger.js";

import { renderTrialBalance }
from "./trialBalance.js";

import JournalController
from "./controllers/JournalController.js";

import DashboardController
from "./controllers/DashboardController.js";

import Dashboard from "./ui/Dashboard.js";
import JournalTable from "./ui/JournalTable.js";
import LedgerTable from "./ui/LedgerTable.js";
import TrialBalanceTable from "./ui/TrialBalanceTable.js";

const dashboard = new Dashboard();
const journalTable = new JournalTable();
const ledgerTable = new LedgerTable();
const trialBalanceTable = new TrialBalanceTable();

// Example data
dashboard.render({
    totalJournal: 25,
    totalDebit: 125000,
    totalCredit: 125000,
    totalAccounts: 12
});

journalTable.render(journalEntries);

ledgerTable.render(ledgerAccounts);

trialBalanceTable.render(ledgerAccounts);

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadAccounts();

        initializeJournal();

        renderJournal();

        renderLedger();

        renderTrialBalance();

        JournalController.initialize();

        DashboardController.refresh();

        console.log("Accounting System Ready.");

    }
);
