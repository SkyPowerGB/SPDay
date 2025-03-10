const session = require("express-session");
const appointGroupModel = require("../models/appoitment_group");

async function loadPage(req, res, next) {
    try {
        const userId = req.session.userId; 
        if (!userId) {
            return res.status(400).send("User not authenticated.");
        }

        const data = await appointGroupModel.getGroups(userId); 
      
        res.render("medical", { groups: data }); 
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

module.exports = { addEditAppoitmentGroup ,loadPage};
