import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@bancoagendamento.9dwc3ne.mongodb.net/,`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
  } catch (error) {
    console.log(error);
  }
}

conn();

export default conn;