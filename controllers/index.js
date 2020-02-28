'use strict';

module.exports.controller = (app) => {
    // get homepage
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express',
            description: 'A great description in the world!'
        });
    });
}
