const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port;
app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("We were connected to MONGO"))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`)
})


//zyjwoT-rarsaf-bowvo9   inwdwebdesign
//mongodb+srv://inwdwebdesign:<password>@cluster0.7f6axnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongodb+srv://natashakhromykh:<password>@cluster0.9q0c6zy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0