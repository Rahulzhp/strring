//Signup Operation 

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('signupUsername').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    var userData = {
        name: name,
        email: email,
        password: password
    };

    //Send the POST request to the API endpoint
    fetch('https://light-bat-gown.cyclic.app/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(function (response) {
            return response.text()
            console.log(response)
            // if (response.ok) {
            //     // window.location.href = "login.html";
            //     // alert("Signup Successful")
            //     console.log('Signup successful');

            // } else {
            //     console.log('Signup failed');
            //     alert("Signup Unsuccessful")
            //     // Handle error response
            // }
        })
        .then(function (response) {
            // console.log(response)
            if (response == "success") {
                window.location.href = "login.html";
                alert("Signup Successful")
            } else {
                alert("Signup failed")
                console.log('Signup failed');
                // Handle error response
                throw new Error('Signup failed');
            }
        })
        .catch(function (error) {
            console.log('Error:', error);
            // Handle any network errors
        });
});


