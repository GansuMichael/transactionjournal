// ui/LedgerTable.js

export default class LedgerTable {

    constructor(containerId = "ledgerTable") {
        this.container = document.getElementById(containerId);
    }

    render(accounts = []) {

        if (!this.container) return;

        let html = `

        <table class="table">

        <thead>

            <tr>

                <th>Account</th>
                <th>Total Debit</th>
                <th>Total Credit</th>
                <th>Balance</th>

            </tr>

        </thead>

        <tbody>

        `;

        accounts.forEach(account=>{

            html += `

            <tr>

                <td>${account.name}</td>

                <td>${this.money(account.debit)}</td>

                <td>${this.money(account.credit)}</td>

                <td>${this.money(account.balance)}</td>

            </tr>

            `;

        });

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