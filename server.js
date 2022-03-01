require('dotenv').config();
const express = require('express');
require('./DB');
const cors = require('cors');
const employeeRouter = require('./Routes/employee');
const res = require('express/lib/response');
const app = express();
app.use(express.json());
app.use(cors());
app.use('employees', employeeRouter);
app.get('/', (req, res) => res.send("server is running"))
app.listen(process.env.PORT, () => console.log(`server is running on port`)
);

