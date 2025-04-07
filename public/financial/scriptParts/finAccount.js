

// new Fin account form
const newFinnAccformActions = {
    setupEventListeners() {
        const newFinAccShwFormBtn = document.getElementById("newFinAccShwFormBtn");
        const newFinnAccFormCloseBtn = document.getElementById("newFinnAccFormCloseBtn");

        newFinAccShwFormBtn.addEventListener("click", this.toggleForm);
        newFinnAccFormCloseBtn.addEventListener("click", this.toggleForm);
    },

    toggleForm() {
        const newFinAccForm = document.getElementById("newFinAccForm");
        const newFinAccShwFormBtn = document.getElementById("newFinAccShwFormBtn");

        if (newFinAccForm.classList.contains("hidden")) {
            newFinAccForm.classList.remove("hidden");
            newFinAccShwFormBtn.classList.add("hidden");
        } else {
            newFinAccShwFormBtn.classList.remove("hidden");
            newFinAccForm.classList.add("hidden");
        }
    }
};

// output element for partial view
const contentElementId="siteContent";


// ASIGMENT VARS
let btnNewTransaction=null;


//forms buttons

let btnCloseTransactionForm=null;

// popup btns

let popupBtnCloseTransactionForm=null;


// popup forms divs
let newTransactionFormDiv=null;
let newTransactionGrpFormDiv=null;

// popup forms
let formNewTrans;



//fin acc page action functions


// trans form
function showNewTransactionForm(){
    if(newTransactionFormDiv.classList.contains("hidden")){
        newTransactionFormDiv.classList.remove("hidden");
    }
}

function hideNewTransactionForm(){
    if(!newTransactionFormDiv.classList.contains("hidden")){
        newTransactionFormDiv.classList.add("hidden");
    }
}

// fin acc page main function
 const finAccFunctions = {
    async finAccOpenDetails(id) {
        try {
            const response = await fetch("/Financial/finAccDetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ finAccId: id, submitType: "loadPage" }),
            });

            if (!response.ok) throw new Error("Nešto nije u redu sa serverom");

            const html = await response.text();
            document.getElementById(contentElementId).innerHTML = html;
            this.addAccDetailsEvents(id);
        } catch (error) {
            console.error("Greška:", error);
        }
    },


 // SETUP VARS ADD E-listeners  (LOAD ACC Details script-part)
    addAccDetailsEvents(id) {

        // transaction group select
        new TomSelect('#transactionGroupSelect', {
            create: true,    
            maxItems: 1,     
            sortField: {
                field: 'text',
                direction: 'asc'
            }
        });

        console.log("add acc detail events");

        // TRANSACTION -----------------------------------------------------------------------------

        //buttons
        btnNewTransaction=document.getElementById("newTransactionBtn");
        btnCloseTransactionForm=document.getElementById("btnCloseTransactionForm");  
        popupBtnCloseTransactionForm=document.getElementById("popupBtnCloseTransactionForm");

        //formDIV
        newTransactionFormDiv=document.getElementById("newTransactionFormDiv");

        //form
        formNewTrans=document.getElementById("formNewTrans");

        //events
        btnNewTransaction.addEventListener("click",showNewTransactionForm);
      
        btnCloseTransactionForm.addEventListener("click",hideNewTransactionForm);
        popupBtnCloseTransactionForm.addEventListener("click",hideNewTransactionForm);

      formNewTrans.addEventListener("submit",async(e)=>{
            e.preventDefault();
            console.log("form prevented");
            const formData = new FormData(formNewTrans); 
      
             
    try {
        // Using async/await with fetch
        const response = await fetch('/Financial/newTransaction', {
          method: 'POST',
          body: formData 
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        finAccOpenDetails(id);
     
        console.log('Success:', data);
        
      } catch (error) {
        console.error('Error:', error);
       
      }

        })

       

      
    }


};

export { newFinnAccformActions, finAccFunctions };
