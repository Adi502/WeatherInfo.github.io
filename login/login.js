
function submitForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const data = {
        email: email,
        password: password
    };
    console.log(JSON.stringify(data));
    fetch('http://localhost:3000/login', {
        method: 'POST',
        
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
        
    })
    .then(response => response.json())
    .then(data => {
        if(data.result==true){
            window.location.href = "../main/main.html";
        }else{
                 alert("Invalid Password");
            }
    })
    .catch(error => {
        // Handle any errors that occur during the fetch.
        console.error('Error:', error);
    });
}
