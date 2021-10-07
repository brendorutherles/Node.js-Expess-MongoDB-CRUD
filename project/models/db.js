const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://brendo:brendo1996@cluster0.hb9h9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" DB_USER="brendo" DB_PASS="brendo1996', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./boletim.model');
