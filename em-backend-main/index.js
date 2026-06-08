const express = require('express');

const dotenv = require('dotenv');
const app = express();
const commonMiddleware = require('./middleware/commonMid')
dotenv.config();
const PORT = process.env.PORT;
const userRoute = require('./routes/user')
const vendorRoute = require('./routes/vendor')
const connectDB = require('./db')

const cors = require('cors');


app.use(cors());


// commonMiddleware(app);
app.use('/user', userRoute);
app.use('/vendor', vendorRoute);

connectDB()

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})





