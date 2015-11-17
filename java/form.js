var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var regexName = /^[a-öA-Ö]{3,20}$/;
var regexPhone = /^(0)\s*(7[0236])\s*(\d{4})\s*(\d{3})$/;
var regexLastName = /^[a-öA-Ö]{3,25}$/;
var regexPostNummer = /^\d{3} \d{2}$/;



$('#invalid_errand').hide();
$('#invalid_phone').hide();
$('#invalid_name').hide();
$('#invalid_email').hide();
$("#Valid").hide();
$('#invalid_last').hide();
$('#invalid_postNummer').hide();





$("#form").submit(function(form) { // när användaren trycker på submit

    var errand = $("#errand").val();
    var email = $('#emailBox').val();
    var name = $('#firstNameBox').val();
    var phone = $('#phoneNumberBox').val();
    var lastName = $('#lastNameBox').val();
    var postNummer = $("#postNummerBox").val();

    console.log(errand);
    console.log(phone);
    console.log(email);
    console.log(name);
    console.log(lastName);
    console.log(postNummer);

    console.log("hej");
    
    
    var validPostNummer = regexPostNummer.test(postNummer);
    console.log(validPostNummer);
    var validEmail = regexEmail.test(email);
    console.log(validEmail);
    var validName = regexName.test(name);
    console.log(validName);
    var validLastName = regexLastName.test(lastName);
    console.log(validLastName);
    var validPhone = regexPhone.test(phone);
    console.log(validPhone);


    if (validPostNummer) {
        console.log("Postnummer är validerad");
        $('#invalid_postNummer').hide();
    }
    else {
        console.log("Postnummer ej godkänd");
        $('#invalid_postNummer').show();
    }
    if (validEmail) {
        console.log("email är validerad");
        $('#invalid_email').hide();
    }
    else {
        console.log("email ej godkänd");
        $('#invalid_email').show();
    }

    if (validName) {
        console.log("namn är validerad");
        $('#invalid_name').hide();
    }
    else {
        console.log("namn ej godkänd");
        $('#invalid_name').show();
    }
    if (validLastName) {
        console.log("efternamn är validerad");
        $('#invalid_last').hide();
    }
    else {
        console.log("efternamn ej godkänd");
        $('#invalid_last').show();
    }

    if (validPhone) {
        console.log("telefon är validerad");
        $('#invalid_phone').hide();
    }
    else {
        console.log("telefon ej validerad");
        $('#invalid_phone').show();
    }
    if (errand === "Ingen") {
        $("#invalid_errand").show();
    }
    else {
        $("#invalid_errand").hide();
    }





    if (validEmail && validName && validPhone && validPostNummer && validLastName && errand !== "Ingen") {
        $(".popupOverlay").show();
        $(".conf").show();
        $(".confirmName").empty(name);
        $(".confirmStorlek").empty(errand);
        $(".confirmPostNummer").empty(postNummer);
        $(".confirmEmail").empty(email);
        $(".confirmPhone").empty(phone);
        $(".confirmLastName").empty(lastName);
        $(".confirmPostNummer").append(postNummer);
        $(".confirmStorlek").append(errand);
        $(".confirmLastName").append(lastName);
        $(".confirmName").append(name);
        $(".confirmEmail").append(email);
        $(".confirmPhone").append(phone);
        $(".confirmMe").click(function() {
            $(".confirmMe").submit();
            $("#Valid").show();
            $(".popupOverlay").hide();
            $(".conf").hide();
            console.log("ditt formulär har skickats!");
        });
    }
    else {
        $("#Valid").hide();
    }


    $(".cancel").click(function() {
        $(".popupOverlay").hide();
        $(".conf").hide();
        $("#Valid").hide();
    });


    event.preventDefault();

});