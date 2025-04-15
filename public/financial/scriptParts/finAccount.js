

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
      
        } catch (error) {
            console.error("Greška:", error);
        }
    },


};

export { newFinnAccformActions, finAccFunctions };
