document.getElementById("pizza-form").onsubmit = validate;

function validate() {

    var isValid = true;

    //Clear all error messages
    var errors = document.getElementsByClassName("err");
    for (var i=0; i<errors.length; i++) {
        errors[i].style.visibility = "hidden";
    }

    //Check first name
    var first = document.getElementById("firstName").value;
    if (first == "") {
        var errFirst = document.getElementById("err-fname");
        errFirst.style.visibility = "visible";
        isValid = false;
    }

    //Check last name
    var last = document.getElementById("lastName").value;
    if (last == "") {
        var errLast = document.getElementById("err-lname");
        errLast.style.visibility = "visible";
        isValid = false;
    }

    //Check size
    var size = document.getElementById("size").value;
    if (size == "none") {
        var errSize = document.getElementById("err-size");
        errSize.style.visibility = "visible";
        isValid = false;
    }

    //Validate pickup or delivery
    var method = document.getElementsByName("method");
    var methodValue = "";
    for (var i=0; i<method.length; i++) {
        if (method[i].checked) {
            methodValue = method[i].value;
        }
    }

    if (methodValue == "") {
        var errPickup = document.getElementById("err-method");
        errPickup.style.visibility = "visible";
        isValid = false;
    }

    //Check for an address
    var address = document.getElementById("address").value;
    if (address == "" && methodValue == "delivery") {
        var errAddress = document.getElementById("err-address");
        errAddress.style.visibility = "visible";
        isValid = false;
    }

    //Check for toppings
    var toppings = document.getElementsByName("toppings[]");
    var checked = 0;
    for (var i=0; i<toppings.length; i++) {
        if (toppings[i].checked) {
            checked++;
        }
    }
    if(checked == 0) {
        var errTopping = document.getElementById("err-topping");
        errTopping.style.visibility = "visible";
        isValid = false;
    }

    return isValid;
}
