window.addEventListener("load",(e)=>{

  const backToLoginBtn=document.getElementById("backToLoginBtn");
  backToLoginBtn.addEventListener('click',()=>{
    window.location.href = "login.html";
  });

  $('#createAccBtn').click(function (event) {
    event.preventDefault();  

    
    var formData = {
        username: $('#userNameInput').val(),
        email: $('#emailInput').val(),
        password: $('#pswrdInput').val(),
        passwordRpt:$('#rptPswrdInput').val()
    };

   
    $.ajax({
        url: '/autentification/register',  
        type: 'POST',
        data: formData, 
        success: function (response) {
                window.location.href="/autentification/login.html",
            console.log(response);
        },
        error: function (xhr, status, error) {
          
            console.log(error);
        }


    });
});


});