const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const annotationsRouter = require('./routes/annotations');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/annotations', annotationsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
