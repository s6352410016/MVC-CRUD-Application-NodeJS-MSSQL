const sql = require('mssql');

const pool = sql.connect({
    user: 'sa',
    password: '5087',
    server: 'DESKTOP-ORDKDQR',
    database: 'REST_API_CRUD_MVC',
    options: {
        trustedConnection: true,
        trustServerCertificate: true
    }
} , (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Connecting to database...');
    }
})

module.exports = pool;