// controllers/JournalController.js

import Transaction from "../models/Transaction.js";
import PostingService from "../services/PostingService.js";
import DashboardController
from "./DashboardController.js";

export default class JournalController {

    static initialize() {

        const form = document.getElementById("journalForm");

        form.addEventListener("submit", this.saveTransaction);

    }

    static saveTransaction(event) {

        event.preventDefault();

        try {

            const transaction = new Transaction({

                id: Date.now(),

                date: document.getElementById("date").value,

                reference: document.getElementById("reference").value,

                description: document.getElementById("description").value,

                debitAccount: document.getElementById("debitAccount").value,

                creditAccount: document.getElementById("creditAccount").value,

                amount: Number(
                    document.getElementById("amount").value
                )

            });

            PostingService.post(transaction);

            DashboardController.refresh();

            alert("Transaction posted successfully.");

            event.target.reset();

            // Refresh UI (to be implemented in the next step)

            // DashboardController.refresh();
            // JournalTable.render();
            // LedgerTable.render();
            // TrialBalanceTable.render();

        }

        catch(error){

            alert(error.message);

        }

    }

}