const session = require("express-session");
const model=require("../../models/medical/appointments");
const appointGroupModel=require("../../models/medical/appoitment_group");
const moment = require('moment');

async function loadPage(req, res, next) {
    try {
        const userId = req.session.userId; 
        if (!userId) {
            return res.status(400).send("User not authenticated.");
        }

        const data = await appointGroupModel.getGroups(userId); 
        const appoitmentsData=await model.getAllAppointmnets(userId);

        appoitmentsData.forEach(element => {
          let dt = element.appointment_date_time;
          element.formatted_date = moment(dt).format('DD.MM.YYYY HH:mm'); 
      });
      
      
        res.render("medical/medical", { groups: data,appoitmentsData:appoitmentsData }); 
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Error loading page.");
    }
}

async function addEditAppoitmentGroup(req, res, next) {
  try {
    const restult = await appointGroupModel.addGroup(
      req.session.userId,
      req.body.groupName
    );
  } catch (e) {}

  next();
}

async function addEditAppointments(req,res,next){
console.log(req.body);
res.redirect("/Medical");
let appointId=req.body.appointmentId;
let date=req.body.appointmentDate;
let desc=req.body.appointmentDesc;
let groupId=req.body.appointmentGroup;
model.createNewAppoitment(appointId,date,desc,groupId,  req.session.userId);


}

module.exports = { addEditAppoitmentGroup ,loadPage,addEditAppointments};
