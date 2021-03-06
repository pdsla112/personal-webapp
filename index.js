const express = require('express');
const app = express();
app.disable('x-powered-by');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require("helmet");

require('dotenv').config();

app.use(helmet({
    contentSecurityPolicy: false,
  }));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});