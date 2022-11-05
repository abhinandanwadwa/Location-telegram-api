const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8181;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hi!');
});

app.listen(PORT, () => {
    console.log(`The App is running at http://localhost:${PORT}`);
});