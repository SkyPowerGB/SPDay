

// all are partial ids.. (dymic generated ids)

const toogleBtnsId= "transactGrpEditBtn_";
const toggleBtnsClass="transactGrpToggleEditBtnsA";
const editFormClass="transactGrpEditFormA";
const deleteFormClass="transactGrpDeleteFormA";

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

    const toggleBtns=document.getElementsByClassName(toggleBtnsClass);
    const editForms=document.getElementsByClassName(editFormClass);
    const deleteForms=document.getElementsByClassName(deleteFormClass);
    
    Array.from(editForms).forEach((form)=>{
        form.addEventListener("submit",sendEditForm);
    });
    Array.from(deleteForms).forEach((form)=>{
        form.addEventListener("submit",sendDeleteForm);
    });


}
async function sendDeleteForm(event){
event.preventDefault();
const form=event.target;
const formData=new FormData(form);
const formDataObj={};
for (const [key, value] of formData.entries()) {
    formDataObj[key] = value;}

    const result=await fetch("TransactionGroupManager/deleteTransactionGroup", {
        method: 'DELETE',
        body: JSON.stringify(formDataObj),
        headers: {
            'Content-Type': 'application/json'
        }
    });


}
async function sendEditForm(event){
event.preventDefault();
const form=event.target;
const formData=new FormData(form);
const formDataObj={};
for (const [key, value] of formData.entries()) {
    formDataObj[key] = value;}

    const result=await fetch("TransactionGroupManager/editTransactionGroup", {
        method: 'POST',
        body: JSON.stringify(formDataObj),
        headers: {
            'Content-Type': 'application/json'
        }
    });


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