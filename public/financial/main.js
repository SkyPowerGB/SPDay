import { newFinnAccformActions } from './scriptParts/newFinAccForm.js';

window.addEventListener("load",main);

const content=document.getElementById("siteContent");
function main(){
    newFinnAccformActions.setupEventListeners();

    document.addEventListener("click",(e)=>{
     
        if(e.target.classList.contains("fin-acc-details-btn")){
            const id=e.target.value;
         
            finAccOpenDetails(id);

            
        }

    });

    async function finAccOpenDetails(id) {
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
            content.innerHTML="";
            content.innerHTML=html;
           
        } catch (error) {
            console.error("Greška:", error);
        }
    }

    }


