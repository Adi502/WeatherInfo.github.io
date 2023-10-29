function submitForm() {
    const username = document.getElementById("name").value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const data = {
        name: username,
        email: email,
        password: password
    };
    console.log(JSON.stringify(data));
    fetch('http://localhost:3000/signup', {
        method: 'POST',
        
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
        
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server (e.g., display a success message).
        console.log(JSON.stringify(data));
    })
    .catch(error => {
        // Handle any errors that occur during the fetch.
        console.error('Error:', error);
    });
}
