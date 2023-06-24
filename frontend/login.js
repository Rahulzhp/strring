document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.getElementById('loginUsermail').value;
    var password = document.getElementById('loginPassword').value;

    var loginData = {
        email: email,
        password: password
    };

    // Send the POST request to the API endpoint
    fetch('https://light-bat-gown.cyclic.app/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(function (response) {
            return response.text()
            console.log(response)
            // if (response.ok) {
            //     // alert("Login successful")
            //     console.log('Login successful');
            //     // Redirect to the desired page or perform any other actions
            // } else {
            //     console.log('Login failed');
            //     // Handle error response
            // }
        })
        .then(function (res) {
            console.log(res)
            if (res == "sucess") {
                alert("Login Successful")
            } else {
                alert("nvalid Credentials")
                console.log('Login failed');
                // Handle error response
                throw new Error('Login failed');
            }
        })
        .catch(function (error) {
            console.log('Error:', error);
            // Handle any network errors
        });
});
