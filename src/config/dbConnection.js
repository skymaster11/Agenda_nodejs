const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'b0brcbvmvqcfvfxtxb5p-mysql.services.clever-cloud.com',
        user: 'uf51tkrsr0kk4pf2',
        password: 'yOq9ZcMtmPV8ZtbpO5e0',
        database: 'b0brcbvmvqcfvfxtxb5p'
    });
}
