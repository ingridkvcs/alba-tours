const emailInput = $("#email-input")[0];

$("#newsletter").on('submit', function (e) {
    e.preventDefault();
    window.alert(emailInput.value + " has been successfully subscribed to our newsletter!");
});