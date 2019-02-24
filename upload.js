const IncomingForm = require('formidable').IncomingForm;

module.exports = function upload(req, res) {
    let form = new IncomingForm();

    form.on('file', (field, file) => {
        console.log('archivo subiendo: ' + file.path);

       // while(true) {}
    });

    form.on('end', () => {
        console.log('termino de subir');
        res.json();
    });

    form.parse(req);
};