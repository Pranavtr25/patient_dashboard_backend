require('dotenv').config()
const mongoose = require('mongoose')

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log(`connected to the database successfully`)
    } catch (error) {
        console.log(`error in connecting database \n ${error}`)
    }
}

module.exports = connect