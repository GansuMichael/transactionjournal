// js/accounts.js

import { chartOfAccounts }
from "../data/chartOfAccounts.js";

export function loadAccounts() {

    const debit =
        document.getElementById("debitAccount");

    const credit =
        document.getElementById("creditAccount");

    chartOfAccounts.forEach(account => {

        const option1 =
            document.createElement("option");

        option1.value = account.name;

        option1.textContent =
            `${account.code} - ${account.name}`;

        debit.appendChild(option1);

        const option2 =
            document.createElement("option");

        option2.value = account.name;

        option2.textContent =
            `${account.code} - ${account.name}`;

        credit.appendChild(option2);

    });

}

export { chartOfAccounts };