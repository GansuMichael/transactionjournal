/* ==========================================
   JournalService.js
========================================== */

import Storage from "./storage.js";

export default class JournalService{

    static all(){

        return Storage.database().journal;

    }

    static save(entry){

        const database = Storage.database();

        entry.id = crypto.randomUUID();

        entry.createdAt = new Date().toISOString();

        database.journal.push(entry);

        Storage.save(database);

    }

    static delete(id){

        const database = Storage.database();

        database.journal =
            database.journal.filter(
                journal => journal.id !== id
            );

        Storage.save(database);

    }

    static find(id){

        return this
            .all()
            .find(journal => journal.id === id);

    }

}