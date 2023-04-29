const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    // cautch the valu which is type user login page
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;


    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");
    

    if( emailAddress == "" && passWord == ""){
        Swal.fire(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(emailAddress == Email && passWord == Password){
            Swal.fire(
                'Good job!',
                'login successful!',
                'success'
            );

            setTimeout(()=>{
                location.href='home.html';
                },1000);
               
        }else
        {
            Swal.fire(
                'Opps..!',
                'Something is wrong!',
                'error'
            );
        }
    };


};