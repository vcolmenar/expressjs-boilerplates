const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//Init middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/members', require('./routes/api/members'));
app.use('/api/pug', require('./routes/pug/pug-routes'));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));