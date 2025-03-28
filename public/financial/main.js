import { newFinnAccformActions } from './scriptParts/newFinAccForm.js';

window.addEventListener("load",main);


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
            // Pošaljite POST zahtjev sa ID-om
            const response = await fetch("/Financial/finAccDetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id }), // Pošaljite ID računa
            });
    
            // Ako odgovor nije uspješan, baciti grešku
            if (!response.ok) throw new Error("Nešto nije u redu sa serverom");
    
            // Ako je odgovor uspješan, zamijeniti trenutni sadržaj sa odgovorom od servera
            const html = await response.text(); // Dohvatiti HTML iz odgovora
            document.body.innerHTML = html; // Zamijeniti trenutni sadržaj stranice s novim HTML-om
        } catch (error) {
            console.error("Greška:", error);
        }
    }

    }


