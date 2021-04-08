import mysql from "mysql"
import { CARD_CELL } from "../const/const"
var seed = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19973232abc',
    port: 3306,
    database: 'seed'
});
seed.connect();
/*
seed.connect();
var sql = 'SELECT * FROM card_cell '
var sql2 = 'INSERT INTO card_cell(cell_id,name) VALUES (?,?)';
var sql3 = 'UPDATE card_cell SET cell_id =? ,name = ? WHERE  id= ?';
var sql4 = 'DELETE FROM card_cell where id=7';
var cell = ["yy", "fil"]
var newcell = ["bbll", "bbbid", 2]
seed.query(sql2, cell, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');
})
seed.query(sql3, newcell, function (err, result) {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE success', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});
seed.query(sql4, function (err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE success', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});
seed.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log(result);
});
seed.end()*/

let get_seed = async function (): Promise<any> {
    let sql = 'SELECT * FROM card_cell '
    return new Promise(function (resolve, reject) {
        seed.query(sql, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
    )
}
let add_seed = async function (cell: CARD_CELL): Promise<any> {
    let sql = 'INSERT INTO card_cell(cell_id,name) VALUES (?,?)';
    return new Promise(function (resolve, reject) {
        let data = [cell.id, cell.name]
        seed.query(sql, data, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
    )
}
const SEED = { getData: get_seed, addData: add_seed }
export { SEED }
    // seed.end()
