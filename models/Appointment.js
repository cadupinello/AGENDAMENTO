import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  cpf: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  isFinished: {
    type: Boolean,
  }
})

export default appointmentSchema;