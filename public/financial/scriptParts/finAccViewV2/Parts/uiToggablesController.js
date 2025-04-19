 import {editTransactionForm} from "./editTransactionForm.js";
 import {editAccountForm} from "./editAccountForm.js";
 import {deleteConfirmForm} from "./deleteConfirmForm.js";

 // SETUP UI TOGGABLES --------------------------------------
 // toggalbe elements ids (some are dynamic)
const toggableElementIds={ 
    // need id to function to toggle
   transTableEditPartial:"finTransTableEditTd_",
   transTableDeletePartial:"finTransTableDeleteTd_"


}
// click events ids/classes 
// classes for dynamic elements 
const clickElementClasses={
    finTransTabToggleEditBtns:"fin-trans-edit-btns",
    finTransTabEditBtns:"finTransTableEditBtns",
    finTransTabDeleteBtns:"finTransTableDeleteBtns",


}

// ids for static elements
const clickElementIds={
    // fin account form 
    finAccOpenEditForm:"finAccEditBtn",
    editFinAccPopupCloseBtn:"editFinAccPopupCloseBtn",
    editFinAccPopupClsBtn:"editFinAccPopupClsBtn",

    // transaction form
    newTransactionBtn:"newTransactionBtn",
    popupBtnCloseTransactionForm:"popupBtnCloseTransactionForm",
    btnCloseTransactionForm:"btnCloseTransactionForm",
   
    // delete confirm form
    confirmDeleteCloseBtn:"confirmDeleteCloseBtn",
    confirmDeleteCloseBtnT:"confirmDeleteCloseBtnT",
}
const hiddenClass="hidden";
//------------------------------------------------------------

function toggableHandleClickEvents(e,reloadCallback,finAccId){

    
const target=e.target;
const targetId=target.id;
const targetValue=target.value;

  switch(targetId){
    case clickElementIds.finAccOpenEditForm:
        editAccountForm.showForm(finAccId);
     break;
    case clickElementIds.editFinAccPopupCloseBtn:
        editAccountForm.hideForm();
     break;
    case clickElementIds.editFinAccPopupClsBtn:
        editAccountForm.hideForm();
        break;  
    case clickElementIds.newTransactionBtn:
        editTransactionForm.showForm();
        break;
    case clickElementIds.popupBtnCloseTransactionForm:
        editTransactionForm.hideForm();
        break;
    case clickElementIds.btnCloseTransactionForm:
        editTransactionForm.hideForm();
        break;
    case clickElementIds.confirmDeleteCloseBtn:
        deleteConfirmForm.hideForm();
        break;
    case clickElementIds.confirmDeleteCloseBtnT:
        deleteConfirmForm.hideForm();
        break;
  

}

   // open edit/delete buttons for transaction table
  if(target.classList.contains(clickElementClasses.finTransTabToggleEditBtns)){
      console.log(target.value);
      const value=target.value;
      
    toggle((toggableElementIds.transTableEditPartial)+value);
    toggle((toggableElementIds.transTableDeletePartial)+value);

  }

  // show edit transact form
  if(target.classList.contains(clickElementClasses.finTransTabEditBtns)){
     editTransactionForm.fillFormEditV(targetValue);
  }
  // show delete transact form
  if(target.classList.contains(clickElementClasses.finTransTabDeleteBtns)){
       deleteConfirmForm.showForm(targetValue,editTransactionForm.delete);
  }

   

}

// click events handlers
function toggle(elementId){
    console.log("toggle",elementId);
    const element=document.getElementById(elementId);

    if(element.classList.contains(hiddenClass)){  
       element.classList.remove(hiddenClass)
    }else{
       element.classList.add(hiddenClass)
    }
}
function setupFormsEvents(callback){
    editTransactionForm.setupEvents(callback);
    editAccountForm.setupEvents(callback);
    deleteConfirmForm.setupEvents(callback);
}


export { toggableHandleClickEvents,setupFormsEvents };