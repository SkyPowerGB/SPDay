import { toggableHandleClickEvents,setupFormsEvents } from "./Parts/uiToggablesController.js";
let globalId;
const contentElementId = "siteContent";
// starting funciton for opening partial view
function finAccViewMain(id) {
globalId=id;
loadContent();
const contentElement=document.getElementById(contentElementId);
contentElement.addEventListener("click", events);
}

// main function for fin acc partial view
function events(e){

toggableHandleClickEvents(e,callBacks.reloadPage);
}

// callback obj for fin acc page actions
const callBacks={

    reloadPage(){
     loadContent();
    }

}

// load content function for partial view
 async function loadContent(){
    
        try {
           
            const response = await fetch("/Financial/finAccDetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ finAccId: globalId, submitType: "loadPage" }),
            });

            if (!response.ok) throw new Error("Nešto nije u redu sa serverom");

            const html = await response.text();
            document.getElementById(contentElementId).innerHTML = html;
            setupFormsEvents(callBacks.reloadPage);
      
        } catch (error) {
            console.error("Greška:", error);
        }
 

}

export { finAccViewMain };


