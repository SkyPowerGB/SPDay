window.addEventListener("load",(e)=>{

    console.log("loaded");
     const btnAddGroup=document.getElementById("btnAddGroup");
     const btnAddAppoitment=document.getElementById("btnAddAppoitment");

     const appoitmentAddForm=document.getElementById("appoitmentAddForm");
     const appoitmentAddGroupForm=document.getElementById("appoitmentAddGroupForm");
    
     const btnCloseAppoitmentAddForm=document.getElementById("btnCloseAppoitmentAddForm");
     
     const bntCloseAppoitmentAddGroupForm=document.getElementById("bntCloseAppoitmentAddGroupForm");
  
     btnAddGroup.addEventListener("click",()=>{
    showAppoitmentGrpForm();
      hideAppoitmentForm();

     });

     btnAddAppoitment.addEventListener("click",()=>{
   showAppoitmentForm();
  hideAppoitmentGrpForm();
     });

     btnCloseAppoitmentAddForm.addEventListener("click",()=>{
        hideAppoitmentForm();
     });

     bntCloseAppoitmentAddGroupForm.addEventListener("click",()=>{
        hideAppoitmentGrpForm();
     });








     function showAppoitmentForm(){
       
        if(appoitmentAddForm.classList.contains("hidden")){
            appoitmentAddForm.classList.remove("hidden");
          }
     }
     function hideAppoitmentForm(){
        if(!appoitmentAddForm.classList.contains("hidden")){
            appoitmentAddForm.classList.add("hidden");
          }
     }
     function showAppoitmentGrpForm(){
   
        if(appoitmentAddGroupForm.classList.contains("hidden")){
            appoitmentAddGroupForm.classList.remove("hidden");
          }
     }
     function hideAppoitmentGrpForm(){

        if(!appoitmentAddGroupForm.classList.contains("hidden")){
            appoitmentAddGroupForm.classList.add("hidden");
          }
     }

});