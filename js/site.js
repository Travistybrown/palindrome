function getValue() {
 document.getElementById("alert").classList.add("invisible");
let userString = document.getElementById("userString").value;
if (userString == "") {
      swal.fire({
      icon: "error",
      backdrop: false,
      title: "Error",
      text: "Make a input in the bar!",
    });
  } else {
    let returnObj = checkPalindrom(userString);
    displayString(returnObj);
  }
}


    function checkPalindrom(userString) {   
        const regex = /[^a-z0-9]/gi;
     userString = userString.toLowerCase();
    userString = userString.replace(regex, '')

    let palindrome = [];
    let returnObj = {}

    for (let i = userString.length - 1; i >= 0; i-- ){
    palindrome += userString[i];
 }
    if(palindrome == userString){
    returnObj.msg = "well done! You entered a Plaindrome!" ;
 }  else{
     returnObj.msg = "Sorry! You did not enter a Palindrome!"  ;
 }
    returnObj.reversed = palindrome ;

    return returnObj

}


function displayString(returnObj) {
 let palAlert = document.getElementById("alert");
 let alertHdr = document.getElementById("alertHeader");
 if (returnObj.msg.includes("Sorry")) {
   palAlert.classList.remove("alert-success");
   palAlert.classList.add("alert-danger");
 } else {
   palAlert.classList.remove("alert-danger");
   palAlert.classList.add("alert-success");
 }
 //write to the page
 alertHdr.innerHTML = returnObj.msg;
 document.getElementById("msg").innerHTML = `Your phrase reversed is: <strong>${returnObj.reversed}</strong>`;
 //show the alert box
 palAlert.classList.remove("invisible");

}

