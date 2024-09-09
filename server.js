const db = require('./backend/Config/db');
const { app, server } = require('./backend/Config/serverConfig');
const { port } = require('./backend/Config/envConfig');


db();

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
