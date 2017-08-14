
var app = {
    // Application Constructor
    initialize: function () {      
        $("#register").validate({
            rules: {
                "name": {
                    required: true,
                },
                "cellphone": {
                    phoneSA: true,
                    required: true
                },
                "email": {
                    required: true,
                    email: true
                },
                "password": {
                    required: true,
                    minlength: 5
                },
                "confirm_password": {
                    required: true,
                    equalTo: "#password"
                },
                "company": {
                    required: true,
                },
                "country": {
                    required: true,
                },
                "position": {
                    required: true,
                },
                "employeeNo": {
                    required: true,
                }
            },
            messages: {
                email: {
                    email: "Please enter a valid email address"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                confirm_password: {
                    required: "Please provide a confirm password",
                    equalTo: "Please enter the same password as above"
                }
            },
            submitHandler: function (form) {
                // Your function call 
                window.location = "home.html";
                //var form = $("#register").serialize();
                //console.log(form);
                //alert("David " + form);
                return false; // return true will submit form
            }
        });
    },

};

app.initialize();