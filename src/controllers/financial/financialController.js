const fillCommonData = require("../../helpers/commonReqData");

function loadPage(req, res,next) {
    res.render("financial/financial", fillCommonData({ title: "Financial" },req));
}

module.exports={loadPage}