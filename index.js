const express = require('express');
const app = express();

// root handler for landing page
app.get('/',(req, res) => {
    res.send({'hello':'there'});
    res.send("Hello this node express server responding");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

