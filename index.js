const express = require('express');
const app = express();

const confiq = require('./confiq/keys');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect(confiq.mongoURI,{useNewUrlParser:true});

require('./models/Registration');
app.use(bodyParser.json())

require('./routes/dialogFlowRoutes')(app);

//error rectified the parameter inside listen is port and not 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
