const mongoose = require('mongoose');
let password = encodeURIComponent(process.env.DB_PASSWORD);
let userName = process.env.DB_USERNAME
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.jelqcob.mongodb.net/blog`);
        console.log(`DB connected successfully: ${connect.connection.host}`);

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;