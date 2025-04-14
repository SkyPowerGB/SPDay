import { newFinnAccformActions, finAccFunctions } from './scriptParts/finAccount.js';
import {finAccountUIv2} from './scriptParts/finAccView/improved/finAccUIcomponents.js';

window.addEventListener("load", main);

function main() {
    console.log("financial_script_ready");
    newFinnAccformActions.setupEventListeners();

    document.addEventListener("click", (e) => {

        if (e.target.classList.contains("fin-acc-details-btn")) {
            const id = e.target.value;
            console.log("open fin_acc details"+id);
            finAccFunctions.finAccOpenDetails(id);
        }

        if(e.target.classList.contains("fin-trans-edit-btns")){

           const id = e.target.value;
             finAccountUIv2.toggleEditDeleteBtns(id);
        }

        if(e.target.id==="finAccEditBtn"){
 
            finAccountUIv2.toggleEditAccForm();
        }


        if(e.target.id==="editFinAccPopupCloseBtn"){
            finAccountUIv2.toggleEditAccForm();
        }

        if(e.target.id=="editFinAccPopupClsBtn") 
        {
            finAccountUIv2.toggleEditAccForm();
        }

        if(e.target.id=="newTransactionBtn"){
            finAccountUIv2.toggleAddTransForm("Nova transakcija");
       
        }


        if(e.target.id=="popupBtnCloseTransactionForm"){
            finAccountUIv2.toogleAddTransFormD();
        }

        if(e.target.id=="btnCloseTransactionForm"){
            finAccountUIv2.toogleAddTransFormD();
        }

        if(e.target.classList.contains("finTransTableEditBtns")){
            finAccountUIv2.toggleAddTransForm("Uredi transakciju");
        }


        






        
    
    

    
    
    
    
    
    
    
    



    



    });
}


