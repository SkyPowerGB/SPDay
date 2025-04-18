const formContainerId="deleteConfirmForm";
const formId="deleteConfirmFormForm";

// elements to be filled
const formPartsIds={
    idToDeleteInput:"idToDeleteInput",
    deleteWhatInput:"deleteWhatInput",
}



const deleteConfirmForm={

    formContainerId,
 sendForm(callback){
sendFormData(callback);
},
showForm(id,type){ showForm(id,type);},
hideForm(){ hideForm();},

setupEvents(callback){setup(callback);}



}
function setup(callback){
const form=document.getElementById(formId);
form.addEventListener("submit",function(event){
    event.preventDefault();
   const formData=new FormData(form);
   const formDataObj={};
   formData.forEach((value,key)=>{
       formDataObj[key]=value;
   });
   
    sendFormData(callback,formDataObj);

});
}

function fillFormEditV(id,type){
document.getElementById(formPartsIds.idToDeleteInput).value=id;
document.getElementById(formPartsIds.deleteWhatInput).value=type;
}

const hiddenClass="hidden";
function showForm(id,type){
    const formContainer=document.getElementById(formContainerId);

    if(formContainer.classList.contains(hiddenClass)){
        formContainer.classList.remove(hiddenClass);
    }
    fillFormEditV(id,type);
}
function hideForm(){
    const formContainer=document.getElementById(formContainerId);
    if(!formContainer.classList.contains(hiddenClass)){
        formContainer.classList.add(hiddenClass);
    }
}


// remove logging
async function sendFormData(callback,obj) {
    try {
        const response = await fetch("finAccView/finAccViewDeleteActions", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
    
     
        if (response.ok) {
       
            const responseData = await response.json();
        
            console.log("Response Data:", responseData);
            
        
            if (responseData && responseData.OK === 1) {
                callback();  
            } else {
                console.log("Server error:", responseData);  
            }
        } else {
            console.log("Error: ", response.statusText);  
        }
    
    } catch (error) {
        console.log("Error sending delete form: ", error);  
    }

    
}

export {deleteConfirmForm}