// ui/Dashboard.js

export default class Dashboard {

    constructor(containerId = "dashboard") {
        this.container = document.getElementById(containerId);
    }

    render(summary = {}) {

        if (!this.container) return;

        const {
            totalJournal = 0,
            totalDebit = 0,
            totalCredit = 0,
            totalAccounts = 0
        } = summary;

        this.container.innerHTML = `

        <div class="dashboard-grid">

            <div class="card">
                <h3>Journal Entries</h3>
                <h1>${totalJournal}</h1>
            </div>

            <div class="card">
                <h3>Total Debit</h3>
                <h1>${this.money(totalDebit)}</h1>
            </div>

            <div class="card">
                <h3>Total Credit</h3>
                <h1>${this.money(totalCredit)}</h1>
            </div>

            <div class="card">
                <h3>Accounts</h3>
                <h1>${totalAccounts}</h1>
            </div>

        </div>

        `;
    }

    money(value) {

        return Number(value).toLocaleString(undefined,{
            minimumFractionDigits:2,
            maximumFractionDigits:2
        });

    }

}