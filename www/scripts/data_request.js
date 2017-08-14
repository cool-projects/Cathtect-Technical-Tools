
var app = {
	// Application Constructor
	initialize: function () {
		//set cellphone number
		$("#rectifier").change(function () {
			$("#sendto").val($(this).val());
		})
		ReadSMSonArrive();
		function ReadSMSonArrive() {
			//read sms on arrive
			if (!SMS) { alert('SMS plugin not ready'); return; }
			if (SMS) SMS.startWatch(function () {
				console.log('watching started');
			}, function () {
				console.log('failed to start watching');
			});

			document.addEventListener('onSMSArrive', function (e) {
				var sms = e.data;
				console.log(sms);
				alert(sms);
			});
		}

		//validate
		$("#frmMessage").validate({
			rules: {
				"sendto": {
					phoneSA: true,
				},
				"textmsg": {
					required: true,
				},
			},
			submitHandler: function (form) {
				//send sms
				var sendto = $('input#sendto').val().trim();
				var textmsg = $('textarea#textmsg').val();
				if (sendto.indexOf(";") >= 0) {
					sendto = sendto.split(";");
					for (i in sendto) {
						sendto[i] = sendto[i].trim();
					}
				}
				if (SMS) SMS.sendSMS(sendto, textmsg, function () { alert('Request send successfully.'); }, function (str) { alert(str + ' David the king'); });
				$("#rectifier").prop("selectedIndex", 0);
				$('#sendto').val("");
				//$('#textmsg').val("");

				return false; // return true will submit form
			}
		});

	},

};

app.initialize();