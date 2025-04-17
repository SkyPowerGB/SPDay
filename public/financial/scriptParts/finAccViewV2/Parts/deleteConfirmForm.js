const formContainerId="deleteConfirmForm";
const formId="deleteConfirmFormForm";

// elements to be filled
const formPartsIds={
    idToDeleteInput:"idToDeleteInput",
    deleteWhatInput:"deleteWhatInput",
}

// table / displaied data (need id for item)
const dataHoldingItemIds={}



const deleteConfirmForm={

    formContainerId,
 sendForm(callback){
sendFormData(callback);
},
showForm(id,type){ showForm(id,type);},
hideForm(){ hideForm();},

setupEvents(){setup();}



}
function setup(){

}

function fillFormEditV(id,type){
document.getElementById(formPartsIds.idToDeleteInput).value=id;
document.getElementById(formPartsIds.deleteWhatInput).value=type;
}

const hiddenClass="hidden";
function showForm(id,type){
    const formContainer=document.getElementById(formContainerId);

    if(formContainer.classList.contains(hiddenClass)){
        formContainer.classList.remove(hiddenClass);
    }
    fillFormEditV(id,type);
}
function hideForm(){
    const formContainer=document.getElementById(formContainerId);
    if(!formContainer.classList.contains(hiddenClass)){
        formContainer.classList.add(hiddenClass);
    }
}



async function sendFormData(callback) {


    callback(); }

export {deleteConfirmForm}