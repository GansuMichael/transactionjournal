export default class Account {

    constructor({

        code,

        name,

        type,

        normalBalance

    }){

        this.code = code;

        this.name = name;

        this.type = type;

        this.normalBalance = normalBalance;

        this.balance = 0;

    }

}