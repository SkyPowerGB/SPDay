
// new Fin account form
const newFinnAccformActions = {
    setupEventListeners() {
        const newFinAccShwFormBtn = document.getElementById("newFinAccShwFormBtn");
        const newFinnAccFormCloseBtn = document.getElementById("newFinnAccFormCloseBtn");

        newFinAccShwFormBtn.addEventListener("click",()=> this.toggleForm);
        newFinnAccFormCloseBtn.addEventListener("click",()=> this.toggleForm);
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
let btnNewTransactionGrp=null;

//forms buttons
let btnCloseTransactionGrpForm=null;
let btnCloseTransactionForm=null;

// popup btns
let popupBtnCloseTransactionGrpForm=null;
let popupBtnCloseTransactionForm=null;


// popup forms
let newTransactionForm=null;
let newTransactionGrpForm=null;


//fin acc page action functions


// trans form
function showNewTransactionForm(){
    if(newTransactionForm.classList.contains("hidden")){
        newTransactionForm.classList.remove("hidden");
    }
}

function hideNewTransactionForm(){
    if(!newTransactionForm.classList.contains("hidden")){
        newTransactionForm.classList.add("hidden");
    }
}
//----------------------------------------------------------
// trans group form
function showNewTranasactionGrpForm(){
    if(newTransactionGrpForm.classList.contains("hidden")){
        newTransactionGrpForm.classList.remove("hidden");
    }

}

function hideNewTransactionGrpForm(){
    if(!newTransactionGrpForm.classList.contains("hidden")){
        newTransactionGrpForm.classList.add("hidden");
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
                body: JSON.stringify({ id: id }),
            });

            if (!response.ok) throw new Error("Nešto nije u redu sa serverom");

            const html = await response.text();
            document.getElementById(contentElementId).innerHTML = html;
            this.addAccDetailsEvents();
        } catch (error) {
            console.error("Greška:", error);
        }
    },


 // SETUP VARS ADD E-listeners  (LOAD ACC Details script-part)
    addAccDetailsEvents() {

        console.log("add acc detail events");

        // TRANSACTION -----------------------------------------------------------------------------

        //buttons
        btnNewTransaction=document.getElementById("newTransactionBtn");
        btnCloseTransactionForm=document.getElementById("btnCloseTransactionForm");  
        popupBtnCloseTransactionForm=document.getElementById("popupBtnCloseTransactionForm");

        //form
        newTransactionForm=document.getElementById("newTransactionForm");

        //events
        btnNewTransaction.addEventListener("click",showNewTransactionForm);
      
        btnCloseTransactionForm.addEventListener("click",hideNewTransactionForm);
        popupBtnCloseTransactionForm.addEventListener("click",hideNewTransactionForm);

        // TRANSACTION GROUP -----------------------------------------------------------------------------
        //buttons
        btnNewTransactionGrp=document.getElementById("newTransactionGrpBtn");
        btnCloseTransactionGrpForm=document.getElementById("btnCloseTransactionGrpForm");
        popupBtnCloseTransactionGrpForm=document.getElementById("popupBtnCloseTransactionGrpForm");

        //form
        newTransactionGrpForm=document.getElementById("newTransactionGrpForm");

        //events
        btnNewTransactionGrp.addEventListener("click",showNewTranasactionGrpForm);

        btnCloseTransactionGrpForm.addEventListener("click",hideNewTransactionGrpForm);
        popupBtnCloseTransactionGrpForm.addEventListener("click",hideNewTransactionGrpForm);




      
    }


};

export { newFinnAccformActions, finAccFunctions };
