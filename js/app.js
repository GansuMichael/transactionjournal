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

import { renderDashboard } from "./dashboard.js";

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadAccounts();

        initializeJournal();

        renderJournal();

        renderLedger();

        renderTrialBalance();

        renderDashboard();

        JournalController.initialize();

        DashboardController.refresh();

        console.log("Accounting System Ready.");

    }
);
