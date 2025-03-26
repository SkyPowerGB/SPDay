window.addEventListener('load', function() {
console.log("commonScript.js loaded");

const userInfoNm=document.getElementById("userInfoNm");
const userMenuDropdown=document.getElementById("userMenuDropdown");

userInfoNm.addEventListener("click",function(){
    toggleUserDropdown();
});


function toggleUserDropdown(){
    console.log("toggleUserDropdown");
    if(!userMenuDropdown.classList.contains("hidden")){  userMenuDropdown.classList.add("hidden");return;}
    userMenuDropdown.classList.remove("hidden");

}


});