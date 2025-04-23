

// all are partial ids.. (dymic generated ids)

const toogleBtnsId= "transactGrpEditBtn_";

const toggables={
    formsContainer :"transactionGrpForms_",
    displayContainer :"transactionGrpDisplay_",

}

const fomrsIds={
    transactGrpEditForm:"transactGrpEditForm_",
    transactGrpDeleteForm:"transactGrpDeleteForm_",
}

const dataFields={
    transactGrpName:"transactGrpName_",
    transactGrpId:"transactGrpId_",
}


function main(){
    console.log("transactGrpManagerScript.js loaded");



formOpen(1);

}
function sendDeleteForm(event){
event.preventDefault();
}
function sendEditForm(event){
event.preventDefault();
}


function formOpen(id){
const editForm=getGeneratedElement(fomrsIds.transactGrpEditForm,id);
const deleteForm=getGeneratedElement(fomrsIds.transactGrpDeleteForm,id);
editForm.value=id;
deleteForm.value=id;
editForm.addEventListener("submit",sendEditForm);
deleteForm.addEventListener("submit",sendDeleteForm);

}
function getGeneratedElement(elementId,id){
    return document.getElementById(elementId.trim()+id);
}

function toggleIdRel(elementId,id){
    const element=getGeneratedElement(elementId,id);
   if(element.classList.contains("hidden")){
        element.classList.remove("hidden");
    }else{
        element.classList.add("hidden");
    }
}


export {main};