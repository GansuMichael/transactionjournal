// ui/TrialBalanceTable.js

export default class TrialBalanceTable {

    constructor(containerId = "trialBalanceTable") {
        this.container = document.getElementById(containerId);
    }

    render(accounts = []) {

        if (!this.container) return;

        let totalDebit = 0;
        let totalCredit = 0;

        let html = `

        <table class="table">

        <thead>

            <tr>

                <th>Account</th>
                <th>Debit</th>
                <th>Credit</th>

            </tr>

        </thead>

        <tbody>

        `;

        accounts.forEach(account=>{

            const debit = account.balance > 0 ? account.balance : 0;
            const credit = account.balance < 0 ? Math.abs(account.balance) : 0;

            totalDebit += debit;
            totalCredit += credit;

            html += `

            <tr>

                <td>${account.name}</td>

                <td>${this.money(debit)}</td>

                <td>${this.money(credit)}</td>

            </tr>

            `;

        });

        html += `

        <tr class="total-row">

            <td><strong>Total</strong></td>

            <td><strong>${this.money(totalDebit)}</strong></td>

            <td><strong>${this.money(totalCredit)}</strong></td>

        </tr>

        `;

        html += `
        </tbody>
        </table>
        `;

        this.container.innerHTML = html;

    }

    money(value){

        return Number(value || 0).toLocaleString(undefined,{
            minimumFractionDigits:2,
            maximumFractionDigits:2
        });

    }

}