const nodemailer = require('nodemailer');

module.exports = function (app) {
    app.post("/api/login", function (req, res) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'austinpayitforward@gmail.com',
                pass: 'Ihatereact1!'
            }
        });

        let mailOptions = {
            from: 'austinpayitforward@gmail.com',
            to: 'diosdado.mario@gmail.com',
            subject: 'Testing',
            text: 'it works!'
        };

        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log('We got an error', err)
            } else {
                console.log('Email sent!');
            }
        });
    })
}