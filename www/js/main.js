$(document).ready(function () {
   if(localStorage.name){
       $("#contactName").text(localStorage.name);
   } 
   if(localStorage.num){
       $("#contactPhone").text(localStorage.num);
   } 
});

$("form").submit(function (e) {
    localStorage.num = parseInt($("#num").val());
    localStorage.name = "";
    return false;
});

$("#pickContact").click(function (e) {
    if(navigator.contacts){
        navigator.contacts.pickContact(function (contact) {
            localStorage.num = contact.phoneNumbers[0].value;
            localStorage.name = contact.displayName;
            $("#contactName").text(localStorage.name);
            $("#contactPhone").text(localStorage.num);
            
        },
        function (error) {
           alert("Error:" + error); 
        });
    }else{
        alert("Sorry, this is only for the built app.");
    }
    e.stopPropagation();
});

function handleOpenURL(url){
    parts = url.split("/");
    if(parts[2] === "call"){
        setTimeout(function () {
            document.location = "tel:"+localStorage.num;
        },0);
    }
}