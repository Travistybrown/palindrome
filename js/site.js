function getValue() {
  // Hides the Results class list is the class on that string with the id in it and whatever is in that class in impacted
  document.getElementById("alert").classList.add("invisible");
  // get the user input
  let userString = document.getElementById("userString").value;

  if (userString == "") {
      swal.fire({
      icon: "error",
      backdrop: false,
      title: "Palindrome",
      text: "It is a Palindrome",
    });
  } else {
    // reverse the user input
    // let revString = ReverseAStringJS(userString); // this is for the java script version
    let palindrome = checkPalindrom(userString);
    // display the reversed user input}
    displayString(palindrome);
  }
}

//reverse the string
function checkPalindrom(userString) {
 userString = userString.toLowerCase();
userString = userString.replace(' ',' ')

  let palindrome = [];

 for (let i = userString.length - 1; i >= 0; i-- ){
    palindrome += userString[i];
 }
 if(palindrome == userString){
    palindrome = "Is a palindrome";
 } else{
    palindrome = "Is NOT a palindrome";
 }
    return palindrome ;

}

// reverse the string js style
function ReverseAStringJS() {
  // split string into an array
  let usrArray = userString.split("");

  // the reverse function only works on a Array and it reverse the array made by the split above
  let revArray = usrArray.reverse();

  // return the array to a string
  let revString = revArray.join("");

  return revString; //return lets revString be able to be used outside of thse paramaters; it is abouslety neccesary
}
// display the string
function displayString(palindrome) {
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: <strong>${palindrome}</strong>`;
  document.getElementById("alert").classList.remove("invisible");
}
