import doc, { fill } from "pdfkit";

const finAccountUIv2={

     toggleEditDeleteBtns(id){

        const editBtn= document.getElementById("finTransTableEditTd_"+id);
        const deleteBtn= document.getElementById("finTransTableDeleteTd_"+id);
        if(editBtn.classList.contains("hidden")&&deleteBtn.classList.contains("hidden")){
            editBtn.classList.remove("hidden");
            deleteBtn.classList.remove("hidden");
        }else{
            editBtn.classList.add("hidden");
            deleteBtn.classList.add("hidden");
        }


    },

    toggleEditAccForm(){
        const editFinAccForm=document.getElementById("editFinAcc");

        if(editFinAccForm.classList.contains("hidden")){
            editFinAccForm.classList.remove("hidden")}else{
            editFinAccForm.classList.add("hidden");
            }



    },
    // TODO: implement toggleForm function - copy data from table put into form
    toggleEditTransForm(id){
     fillTransForm(id);
   
    },
    toggleAddTransForm(btnTxt){
        getElementById(newTransactFormItems.submitBtnId).innerText=btnTxt;
    }
  


}

// form items ids (new transaction form)
// ? fin acc id is probably unnecesary
const newTransactFormItems= {

    accountIdInputId:"formNewTransFinAccIdInput",

    transIdInputId:"formNewTransIdInput",

    dateInputId:"formNewTransTransDateInput",
    amountInputId:"formNewTransTransValueInput",
    descriptionInputId:"formNewTransTransDescInput",
    groupNameInpuIdt:"finTransCategory",
   
    submitBtnId:"btnSubmitCreateNewTransact"

};
// transaciton table item ids (add id for row)  
// TODO: group name has id needs to be updated to contain name of the group
// Warning: date input needs to be reformated
const transactionTableItems={

    
    dateTdId:"finTransTableDateTdInput_",
    amountTdId:"finTransTableAmountTd_",
    descriptionTdId:"finTransTableDescTd_",
    groupIdTdId:"finTransTableGrpIdTd_"


}

function fillTransForm(id){
    const accountIdInputE=document.getElementById(newTransactFormItems.accountIdInputId);
    const transIdInputE=document.getElementById(newTransactFormItems.transIdInputId);
    const dateInputE=document.getElementById(newTransactFormItems.dateInputId);
    const amountInputE=document.getElementById(newTransactFormItems.amountInputId);
    const descriptionInputE=document.getElementById(newTransactFormItems.descriptionInputId);
    const groupNameInputE=document.getElementById(newTransactFormItems.groupNameInpuIdt);


    const dateTdE=document.getElementById(transactionTableItems.dateTdId+id);
    const amountTdE=document.getElementById(transactionTableItems.amountTdId+id);
    const descriptionTdE=document.getElementById(transactionTableItems.descriptionTdId+id);
    const groupIdTdE=document.getElementById(transactionTableItems.groupIdTdId+id);


  
        transIdInputE.value=id;
        accountIdInputE.value=accountIdInputE.value;
      
        amountInputE.value=amountTdE.innerText;
        descriptionInputE.value=descriptionTdE.innerText;
   

   

}