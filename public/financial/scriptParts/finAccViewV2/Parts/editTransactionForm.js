


// formDataIds
const formContainerId="newTransactionFormDiv";
const formId="formNewTrans";
const deleteCaseE="deleteTransaction";


const hiddenClass="hidden";


// elements to be filled
const formInputsIds={
    // 0 DEFAULT ELSE: EDIT
    formNewTransIdInput:"formNewTransIdInput",

    // items 
    // (ref to financial account)
    finAccIdinput: "formNewTransFinAccIdInput",
    // transaction date
    transDateInput:"formNewTransTransDateInput",
    // transaction amount
    transAmountInput:"formNewTransTransValueInput",
    // transaction description
    transDescInput:"formNewTransTransDescInput",
    // transaction group
    transGroupInput:"formNewTransGrpNmInput",
  
}

// label ids/txt for validaiton/edit modifications
const formLablesIds={
heding:"",
date:"",
amount:"",
desc:"",
group:"",

}
const formLabelsDefaultTxts={
header1:"Nova Transakcija",
date:"Datum:",
amount:"Iznos:",
desc:"Opis transakcije:",
group:"Grupa transakcije:",

}


// table / displaied data (need id for item)
const dataHoldingItemIds={
    id:"transactTabIdTd_",
    date:"finTransTableDateTdInput_",
    amount:"finTransTableAmountTd_",
    desc:"finTransTableDescTd_",
    group:"finTransTableGrpIdTd_",

}

// static objects {for containing items}

let formInputs={};
let formLabels={};
let form={};

// export object
const editTransactionForm={
delete:deleteCaseE,
showForm(){showForm();},
hideForm(){hideForm();},
fillFormEditV(id){fillFormEditV(id); },
setupEvents(callback){ setup(callback);},
showEditForm(id){ showEditForm(id);},



}

function fillFormEditV(id){

   const idInput= document.getElementById(formInputsIds.formNewTransIdInput);
   const dateInput= document.getElementById(formInputsIds.transDateInput);
   const amountInput= document.getElementById(formInputsIds.transAmountInput);
   const descInput= document.getElementById(formInputsIds.transDescInput);
   const grpInput=  document.getElementById(formInputsIds.transGroupInput);

   const idTd= document.getElementById(dataHoldingItemIds.id+id);
   const dateTd= document.getElementById(dataHoldingItemIds.date+id);
   const amountTd= document.getElementById(dataHoldingItemIds.amount+id);
   const descTd= document.getElementById(dataHoldingItemIds.desc+id);
   const grpTd= document.getElementById(dataHoldingItemIds.group+id);

   console.log("Editing transaction with id:",id);
   idInput.value=idTd.innerText.trim();
    dateInput.value=dateTd.value;
    amountInput.value=amountTd.innerText.trim();
    descInput.value=descTd.innerText.trim();
    grpInput.value=grpTd.innerText.trim();


  showForm();
}

// setup function (MAIN)
function setup(callback){

    formInputs.id=document.getElementById(formInputsIds.formNewTransIdInput);
    formInputs.finAccId=document.getElementById(formInputsIds.finAccIdinput);   
    formInputs.date=document.getElementById(formInputsIds.transDateInput);
    formInputs.amount=document.getElementById(formInputsIds.transAmountInput);
    formInputs.desc=document.getElementById(formInputsIds.transDescInput);
    formInputs.grpNm=document.getElementById(formInputsIds.transGroupInput);
    
    form.container=document.getElementById(formContainerId);
    form.form=document.getElementById(formId);
    
    form.form.addEventListener("submit",function(e){
        e.preventDefault();
        sendFormData(callback);
    });


  }




function showForm(){
if(form.container.classList.contains(hiddenClass)){
    form.container.classList.remove(hiddenClass);}
}
function hideForm(){
 if(!form.container.classList.contains(hiddenClass)){
    form.container.classList.add(hiddenClass);}
}
function showEditForm(id){
showForm();
}



async function sendFormData(reloadCallback) {
    const formData = new FormData(document.getElementById(formId));
    const data = Object.fromEntries(formData.entries())
    const url = "/Financial/newTransaction";

    try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        reloadCallback();
        const result = await response.json();
        console.log('Success:', result);

      } catch (err) {
        console.error('Fetch error:', err);
      }




      
}

export {editTransactionForm}

