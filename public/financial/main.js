import { newFinnAccformActions, finAccFunctions } from './scriptParts/finAccount.js';

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
           console.log("element clicked"+e.target.value);
           const id = e.target.value;
     
          const editBtn= document.getElementById("finTransTableEditTd_"+id);
          const deleteBtn= document.getElementById("finTransTableDeleteTd_"+id);
          if(editBtn.classList.contains("hidden")){
            editBtn.classList.remove("hidden");
            deleteBtn.classList.remove("hidden");
        }else{
            editBtn.classList.add("hidden");
            deleteBtn.classList.add("hidden");
        }

        
    
    

    
    
    
    
    
    
    
    }



    



    });
}


