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
    let palindrome = checkPalindrom(userString);
    displayString(palindrome);
  }
}


    function checkPalindrom(userString) {   
     userString = userString.toLowerCase();
    userString = userString.replace(' ',' ')

    let palindrome = [];

    for (let i = userString.length - 1; i >= 0; i-- ){
    palindrome += userString[i];
 }
    if(palindrome == userString){
    palindrome = "Is a palindrome";
 }  else{
    palindrome = "Is NOT a palindrome";
 }
    return palindrome ;

}


function displayString(palindrome) {
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: <strong>${palindrome}</strong>`;
  document.getElementById("alert").classList.remove("invisible");
}
