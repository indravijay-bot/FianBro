const express = require('express');
const path = require('path');
const db = require('./backend/Config/db');
const { app, server } = require('./backend/Config/serverConfig');
const { port } = require('./backend/Config/envConfig');


app.use(express.static(path.join(__dirname, 'frontend')));


db();



app.use(express.json());


const pageRoutes = require('./backend/Routes/homepage.route');
const incomeRoutes = require('./backend/Routes/income.route');
const signupRoute = require('./backend/Routes/signup.routes');
const loginRoute = require('./backend/Routes/login.routes');
const chatRoutes = require('./backend/Routes/chat.route');
const logoutRoute = require('./backend/Routes/logout.route');
const dashboardRoute = require('./backend/Routes/dashboard.routes');
const expenseRoutes = require('./backend/Routes/expense.route');


app.use('/', pageRoutes);
app.use('/api', incomeRoutes);
app.use('/api', expenseRoutes);
app.use('/api', signupRoute);
app.use('/api', loginRoute);
app.use('/api', logoutRoute);
app.use('/api',dashboardRoute);
app.use('/api', chatRoutes);


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
