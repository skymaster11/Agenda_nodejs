const dbConnection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConnection();

    app.get('/', (req, res) => { 
        connection.query('SELECT * FROM personas', (err, result) => {
            console.log(result);
            res.render('agenda/agenda', {
                personas: result
            });
        });
    });

    app.post('/agenda', (req, res) => {
        const {nombre, correo, telefono} = req.body;
        connection.query('INSERT INTO personas SET?', {
            nombre,
            correo,
            telefono,
    }, (err, result) => {
        res.redirect('/');
    });
});

    app.get('/agenda/:id_agenda', (req, res) => {
        const {id_agenda} = req.params;
        connection.query('DELETE FROM personas WHERE id_agenda = ?', [id_agenda], (err, result) => {
            res.redirect('/');
        });
    });
}