const express = require('express');
const app = express();

// root handler for landing page
app.get('/',(req, res) => {
    res.send({'hello':'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(5000);

