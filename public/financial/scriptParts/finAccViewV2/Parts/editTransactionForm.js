const formContainerId="newTransactionFormDiv";
const formId="formNewTrans";
const deleteCaseE="deleteTransaction";
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
    transAmountInput:"formNewTransTransAmountInput",
    // transaction description
    transDescInput:"formNewTransTransDescInput",
    // transaction group
    transGroupInput:"formNewTransTransGroupInput",
  
}
const formLablesIds={

}
const formLabelsDefaultTxts={}


// table / displaied data (need id for item)
const dataHoldingItemIds={

}



const editTransactionForm={

    formContainerId,
 sendForm(callback){
sendFormData(callback);
},
showForm(){},
hideForm(){},
fillFormEditV(id){},
handleClicksEvent(target,callback){
},
setupEvents(callback){}



}

async function sendFormData(callback) {


callback();
}

export {editTransactionForm}

