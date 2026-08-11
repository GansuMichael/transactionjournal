export default class LedgerEntry{

    constructor({

        account,

        date,

        description,

        debit=0,

        credit=0

    }){

        this.account=account;

        this.date=date;

        this.description=description;

        this.debit=debit;

        this.credit=credit;

    }

}