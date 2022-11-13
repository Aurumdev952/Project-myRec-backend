const mongoose = require('mongoose');

const atlas_url = "mongodb+srv://aurumdev:fidele95@cluster0.mnvdota.mongodb.net/?retryWrites=true&w=majority";
const local_url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(atlas_url, { useNewUrlParser: true, useUnifiedTopology: true });
        // const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`mongoDB connected to${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;