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
