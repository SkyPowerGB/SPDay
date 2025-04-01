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


    });
}


