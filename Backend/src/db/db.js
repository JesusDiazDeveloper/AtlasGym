
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL server as id ' + connection.threadId);

    connection.query('CREATE DATABASE IF NOT EXISTS atlas_gym', (err, result) => {
        if (err) {
            console.error('Error creating database: ' + err.stack);
            return;
        }
        console.log('Database ensured');

        connection.changeUser({ database: 'atlas_gym' }, (err) => {
            if (err) {
                console.log('Error switching to atlas_gym db:' + err.stack);
                return;
            }


            // Creo un arreglo con todos los querys para crear las tablas, 
            // y los recorro 1 por 1 ejecutandolos
            const sqlFilePath = path.join(__dirname, 'AtlasGym.sql');
            const querysForCreateTables = fs.readFileSync(sqlFilePath, 'utf8').split(';');

            querysForCreateTables.forEach((query)=>{
                if(query.trim()){
                    connection.query(query , (err, result) => {
                        if(err){
                            console.error('Error executing query: ' + query + ' - ' + err.stack);
                        }
                    })
                }
            })

            console.log('Tables Created');
            
        });
    });
});

module.exports = connection;