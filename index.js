const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./routes/dialogFlowRoutes')(app);

//error rectified the parameter inside listen is port and not 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
