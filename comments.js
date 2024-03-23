// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a port number
const port = 3000;
// 4. Create a route
app.get('/comments', (req, res) => {
    res.send('Comments');
});
// 5. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 6.
