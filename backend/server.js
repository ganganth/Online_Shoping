const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {logger, logEvents} = require('./middleware/logger');
const error = require('./middleware/error');
const corsOptions = require('./config/corsOptions');
require('./config/db');
const app = express();

// establish the mongoDB connection


// log every request middleware
app.use(logger);

// CORS middleware
app.use(cors(corsOptions));

// cookie parser middleware
app.use(cookieParser());

// JSON body parser middleware
app.use(express.json({limit: '30mb'}));

// api routes
app.use('/api/auth', require('./routes/authRoutes'));

// error handling middleware
app.use(error);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
