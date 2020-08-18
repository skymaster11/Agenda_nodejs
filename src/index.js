const app = require('./config/server');

require('./app/routes/agenda')(app);

app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});