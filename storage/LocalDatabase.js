const DB="accounting_db";

export function load(){

return JSON.parse(

localStorage.getItem(DB)

)||{

transactions:[],

ledger:[],

accounts: [],

reports: {}


};

}

export function save(data){

localStorage.setItem(

DB,

JSON.stringify(data)

);

}