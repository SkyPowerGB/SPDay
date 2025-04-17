const formContainerId="editFinAcc";
const formId="finAccEditFormForm";
const deleteCaseE="deleteFinAcc";
// elements to be filled
// finAccEditForm
const formPartsIds={
    idInputId:"finAccEditFormIdInput",
    nameInputId:"finAccEditFormNameInput",
    typeInputId:"finAccEditFormTypeInput",   
    currencyInputId:"finAccEditFormCurrencyInput",
    balanceInputId:"finAccEditFormBalanceInput", 
}

// table / displaied data (need id for item)
const dataHoldingItemIds={}



const editAccountForm={

sendForm(callback){
sendFormData(callback);},
showForm(id){showForm(id);},
hideForm(){hideForm();},
setupEvents(reloadCallback){setup(reloadCallback);},



}
let formContainer;

function setup(reloadCallback){
     formContainer=document.getElementById(formContainerId); 
}
const hiddenClass="hidden";


function fillFormEditV(id){

}
function showForm(id){
    fillFormEditV(id);
    if(formContainer.classList.contains(hiddenClass)){
        formContainer.classList.remove(hiddenClass);
    }
}
function hideForm(){
    if(!formContainer.classList.contains(hiddenClass)){
        formContainer.classList.add(hiddenClass);
    }
}




async function sendFormData(callback) {


    callback();
    }

export {editAccountForm}