 import {editTransactionForm} from "./editTransactionForm.js";
 import {editAccountForm} from "./editAccountForm.js";
 import {deleteConfirmForm} from "./deleteConfirmForm.js";

 // SETUP UI TOGGABLES --------------------------------------
const toggableElementIds={ 



}
// click events ids/classes
const clickElementClasses={


}
const clickElementIds={
    finAccEditBtn:"finAccEditBtn",
    editFinAccPopupCloseBtn:"editFinAccPopupCloseBtn",
    editFinAccPopupClsBtn:"editFinAccPopupClsBtn",
}
const hiddenClass="hidden";
//------------------------------------------------------------

function toggableHandleClickEvents(e,reloadCallback){
    
const target=e.target;
const targetId=target.id;
const targetValue=target.value;






}
function toggle(elementId){
    const element=document.getElementById(elementId);
    if(element.classList.contains(hiddenClass)){  
       element.classList.remove(hiddenClass)
    }else{
       element.classList.add(hiddenClass)
    }
}



export { toggableHandleClickEvents };