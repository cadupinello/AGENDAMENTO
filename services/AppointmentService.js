import appointmentSchema from "../models/Appointment.js";
import mongoose from "mongoose";
import AppointmentFactory from "../factories/AppointmentFactory.js";

const Appo = mongoose.model("Appo", appointmentSchema);

class AppointmentService {

  async Create(name, email, cpf, description, date, time) {
    const appointment = new Appo({
      name,
      email,
      cpf,
      description,
      date,
      time,
      isFinished: false,
    });

    try {
      await appointment.save();
      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  } 

  async GetAll(showFinished) {
    console.log(showFinished)
    if(showFinished) {
      return await Appo.find();
    } else {
      var appos = await Appo.find({isFinished: false});
      var appointments = [];
      
      appos.forEach(appointment => {
        if(appointment.date != undefined || appointment.date != null) {
          appointments.push(AppointmentFactory.Build(appointment) );

        }

      })
      
      return appointments;
    }
  }

  async GetById(id) {
    try {
      var event = await Appo.findById({"_id": id});
      return event; 

    }catch (error) {
      console.log(error);
    }

    }
  }

export default new AppointmentService();