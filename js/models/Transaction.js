export default class Transaction {

    constructor({

        id,

        date,

        reference,

        description,

        debitAccount,

        creditAccount,

        amount

    }) {

        this.id = id;

        this.date = date;

        this.reference = reference;

        this.description = description;

        this.debitAccount = debitAccount;

        this.creditAccount = creditAccount;

        this.amount = Number(amount);

    }

}