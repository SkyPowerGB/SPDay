//import { newFinnAccformActions, finAccFunctions } from './scriptParts/finAccount.js';
//import {finAccountUIv2} from './scriptParts/finAccView/improved/finAccUIcomponents.js';
//import {finAccFormsMain} from './scriptParts/finAccView/improved/finAccForms.js'
import {finAccViewMain} from "./scriptParts/finAccViewV2/finAccViewMain.js"

window.addEventListener("load", main);

function main() {

 
    console.log("financial_script_ready");
//    newFinnAccformActions.setupEventListeners();

    document.addEventListener("click", (e) => {

        // OPEN FIN ACC DETAILS  BTN

        if (e.target.classList.contains("fin-acc-details-btn")) {
            const id = e.target.value;
       
            console.log("open fin_acc details"+id);
            finAccViewMain(id);

       //     finAccFunctions.finAccOpenDetails(id);
        }

        /*
        // FIN ACC EDIT BTN

        if(e.target.id==="finAccEditBtn"){
 
            finAccountUIv2.toggleEditAccForm();
        }

        // CLOSE EDIT/NEW FIN ACC POPUP

        if(e.target.id==="editFinAccPopupCloseBtn"){
            finAccountUIv2.toggleEditAccForm();
        }

        if(e.target.id=="editFinAccPopupClsBtn") 
        {
            finAccountUIv2.toggleEditAccForm();
        }

        // NEW TRANSACTION BTN
        if(e.target.id=="newTransactionBtn"){
            finAccountUIv2.toggleAddTransForm("Nova transakcija");
       
        }

        // CLOSE POPOUP TRANSACT FORM

        if(e.target.id=="popupBtnCloseTransactionForm"){
            finAccountUIv2.toogleAddTransFormD();
        }

        if(e.target.id=="btnCloseTransactionForm"){
            finAccountUIv2.toogleAddTransFormD();
        }


        
        // transact table open edit btn
        if(e.target.classList.contains("fin-trans-edit-btns")){

            const id = e.target.value;
              finAccountUIv2.toggleEditDeleteBtns(id);
         }

        // tranact table EDIT BTNS
        if(e.target.classList.contains("finTransTableEditBtns")){
            finAccountUIv2.toggleAddTransForm("Uredi transakciju");
            finAccountUIv2.fillTransForm(e.target.value);
        }

        //transact table DELETE BTNd

        if(e.target.classList.contains("finTransTableDeleteBtns")){
            const id = e.target.value;
             finAccountUIv2.toggleFinTransDeleteForm(id);
        }
        
        console.log(e.target.classList);
        console.log(e.target.id);
        
        if(e.target.id==="confirmDeleteCloseBtn"||e.target.id==="confirmDeleteCloseBtnT"){
        
           finAccountUIv2.toggleFinTransDeleteForm();
        }


        finAccFormsMain(e);

        

*/



        
    
    

    
    
    
    
    
    
    
    



    



    });


}


