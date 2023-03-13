import { Router } from "express";
import mongoose from "mongoose";
import AppointmentService from "../services/AppointmentService.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
})

router.get("/cadastro", (req, res) => {
  res.render("create")
})

router.post("/create", async (req, res) => {
  var status = await AppointmentService.Create(
    req.body.name, 
    req.body.email, 
    req.body.cpf, 
    req.body.description, 
    req.body.date, 
    req.body.time
  );
  
  if (status) {
    res.redirect("/");
    console.log("Cadastro realizado com sucesso!");
  } else {
    res.redirect("Ocorreu uma falha!");
  }
})

router.get('/getcalendar', async (req, res) => {
  var appointment = await AppointmentService.GetAll(false)
  res.json(appointment);
})

router.get('/event/:id', async (req, res) => {
  var appointment = await AppointmentService.GetById(req.params.id)
  console.log(appointment)
  res.render('event', { appo: appointment });
})

export default router;