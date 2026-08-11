// ui/JournalTable.js

export default class JournalTable {

    constructor(containerId = "journalTable") {
        this.container = document.getElementById(containerId);
    }

    render(entries = []) {

        if (!this.container) return;

        let html = `

        <table class="table">

            <thead>

                <tr>

                    <th>Date</th>
                    <th>Reference</th>
                    <th>Account</th>
                    <th>Description</th>
                    <th>Debit</th>
                    <th>Credit</th>

                </tr>

            </thead>

            <tbody>

        `;

        entries.forEach(entry => {

            html += `

            <tr>

                <td>${entry.date}</td>
                <td>${entry.reference}</td>
                <td>${entry.account}</td>
                <td>${entry.description}</td>
                <td>${this.money(entry.debit)}</td>
                <td>${this.money(entry.credit)}</td>

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