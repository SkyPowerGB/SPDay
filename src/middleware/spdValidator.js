function validate(settingsObj,paramNames){
    return function (req, res, next) {
    const body = req.body;
      paramNames.forEach(param => {
       const data= body[param];
       req[valid]=true;
        if(settingsObj[settingsParamsNames.notNull]&&data==null){
          
            req[valid]=false;
     
        }
        if(settingsObj[settingsParamsNames.minLength]&&data.length<settingsObj[settingsParamsNames.minLength]){
            req[valid]=false;
        }

        if(settingsObj[settingsParamsNames.maxLength]&&data.length>settingsObj[settingsParamsNames.maxLength]){
            req[valid]=false;
        }
        if(settingsObj[settingsParamsNames.regex]&&data.match(settingsObj[settingsParamsNames.regex])==null){
            req[valid]=false;
        }
        if(settingsObj[settingsParamsNames.type]&&typeof data!=settingsObj[settingsParamsNames.type]){
            req[valid]=false;
        }

      });


      next();
    }
}


const valid="spdValidatorOutput";

const ouptutDataObjResults={

}

const settingsParamsNames={
    notNull:"notNull",
    minLength:"minLength",
    maxLength:"maxLength",
    regex:"regex",
    type:"type"
}
module.exports={
    validate,
    valid,
    ouptutDataObjResults,
    settingsParamsNames
}