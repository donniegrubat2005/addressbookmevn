const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require('dotenv').config();


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

 
 //const db_uri ="mongodb://localhost:27017/myphonebook";
 //require("./dbConfig/initDB");
 mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,
    useFindAndModify: false }
 );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
 })

const phonebookRoutes = require('./routes/phonebook');
//const usersRouter = require('./routes/users');

//app.use('/exercises', exercisesRouter);
app.use('/api/phonebooks', phonebookRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
