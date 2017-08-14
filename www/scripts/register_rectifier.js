
var app = {
    // Application Constructor
    initialize: function () {      
        $("#register").validate({
            rules: {
                "company": {
                    required: true,
                },
                "location": {
                    required: true,
                },
                "type_of_rectifier": {
                    required: true,
                },
                "rmu_cellphone": {
                    phoneSA: true,
                    required: true
                },
                "voltage": {
                    required: true,
                },
                "current": {
                    required: true,
                },
                "ac": {
                    required: true,
                },
                "phase": {
                    required: true,
                },
                "serial_number": {
                    required: true,
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