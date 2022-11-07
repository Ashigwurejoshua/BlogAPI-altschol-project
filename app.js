const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const postsRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')


dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
    .then(console.log(console.log('connected to mongoDB')))
    .catch((err) => console.log(err))

app.use('/BlogAPI/auth', authRoute)
app.use('/BlogAPI/users', usersRoute)
app.use('/BlogAPI/posts', postsRoute)
app.use('/BlogAPI/categories', categoryRoute)

app.listen(5000, () => {
    console.log('Backend is connected')
})