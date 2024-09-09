const express = require('express');
const path = require('path');
const db = require('./backend/Config/db');
const { app, server } = require('./backend/Config/serverConfig');
const { port } = require('./backend/Config/envConfig');

app.use(express.static(path.join(__dirname, 'frontend')));

db();

app.use(express.json());
// const incomeRoutes = require('./backend/Routes/income.route');
const pageRoutes = require('./backend/Routes/homepage.route');
app.use('/', pageRoutes); // Routes to serve HTML pages

// Import and use routes for API endpoints
const incomeRoutes = require('./backend/Routes/income.route');
app.use('/api', incomeRoutes); // Routes for API endpoints

const signupRoute = require('./backend/Routes/signup.routes');
app.use('/api', signupRoute)

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
