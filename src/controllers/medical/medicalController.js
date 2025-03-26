const session = require("express-session");
const appointmentModel=require("../../models/medical/appointments");
const appointGroupModel=require("../../models/medical/appoitment_group");
const moment = require('moment');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const fillCommonData = require("../../helpers/commonReqData");


async function loadPage(req, res, next) {
    try {
        const userId = req.session.userId; 
        if (!userId) {
            return res.status(400).send("User not authenticated.");
        }

        const data = await appointGroupModel.getGroups(userId); 
        const appoitmentsData=await appointmentModel.getAllAppointments(userId);
        
        appoitmentsData.forEach(element => {
          let dt = element.appointment_date_time;
      
          
          element.formatted_date = moment(dt).format('DD.MM.YYYY HH:mm'); 
      

          element.inputFormat = moment(dt).format('YYYY-MM-DD HH:mm');
      });
      
      console.log(req.spd_userData);
        res.render("medical/medical", fillCommonData({ groups: data,appoitmentsData:appoitmentsData },req)); 
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Error loading page.");
    }
}

async function addEditAppoitmentGroup(req, res, next) {
  try {
    let gid= req.body.id;
    let data=req.body.groupName;

    if(gid==0){
    const restult = await appointGroupModel.addGroup(
      req.session.userId,
      data
    
    );}else{
       
      const result=await appointGroupModel.updateGroup(req.body.id,data);
      
    }
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

appointmentModel.createNewAppoitment(appointId,date,desc,groupId,  req.session.userId);


}


async function deleteAppointments(req,res,next){ 
console.log(req.body);
 let result=req.body;
 let id=result.deleteElementId;
 let type=result.deleteElementType;
  if(type=="appointment"){

    await appointmentModel.deleteAppointment(id);
  }else{
    await appointGroupModel.deleteGroup(id);
  }



  res.redirect("/Medical");
 }


async function dataExport(req,res,next){
  console.log("Data Export");
console.log(req.body);
data= req.body;
const grpIdList=data.inputGroupIdList;
const FromDate=data.inputDateFrom;
const ToDate=data.inputDateTo;
let pdfName=data.inputPDFname;
const doc = new PDFDocument();
doc.pipe(res);
res.setHeader('Content-Type', 'application/pdf');
res.setHeader('Content-Disposition', `attachment; filename="${pdfName}.pdf"`);

if(pdfName==""){
  pdfName="export_unnamed";
}

for(i=0;i<grpIdList.length;i++){
  if(grpIdList[i]==","||grpIdList[i]==" "){
    continue;
  }

  let grpId=parseInt(grpIdList[i]);
  let result=await appointmentModel.getAllAppointmentsFromToByGroup(parseInt(grpId),FromDate,ToDate);
  result.forEach(element => {
    doc.fontSize(16).text(`Grupa ID: ${grpId}`, { underline: true });
    let formattedDate = moment(element.appointment_date_time).format(
      "DD.MM.YYYY HH:mm"
    );
    doc.fontSize(12).text(`Termin: ${element.appointment_desc} - Datum: ${formattedDate}`)

  });

  console.log(result);

}
  doc.end();


}



module.exports = {dataExport, addEditAppoitmentGroup ,loadPage,addEditAppointments,deleteAppointments};
