import { SQLite } from 'expo-sqlite';

const database = SQLite.openDatabase('eventos.db');

function creatingTable() {
    database.transaction(tx => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS FAVORITOS (id INTEGER PRIMARY KEY, titulo_evento TEXT, url_imagem TEXT);"
        );
    });
}

function executingInsert(obj) {
    database.transaction(tx => {
        tx.executeSql(
            "INSERT INTO FAVORITOS (id, titulo_evento, url_imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
            [
                obj.id, obj.titulo_evento, obj.descricao, obj.url_imagem
            ]
        );
    });
}

function executingDelete(obj) {
    database.transaction(tx => {
        tx.executeSql("DELETE FROM FAVORITOS WHERE id = ?;", [obj.id]);
    });
}

function executingSelect(callback) {
    database.transaction(tx => {
        tx.executeSql("SELECT * FROM FAVORITOS;",
            [],
            (_, { rows }) => {
                const results = rows._array;
                if (results.length > 0) {
                    callback(results);
                } else{
                    callback([]);
                }
            });
    });
}

export { creatingTable, executingInsert, executingDelete, executingSelect };