/**changing text */
function check() {
  //get value of input text
  var user = document.getElementById("t1").value;
  //changing text value of HTML element-> innerText
  // == equality operator
  if (user == "") {
    document.getElementById("msg").innerText = "Please enter user name";
  }
}

/**Adding HTML element */
function comment() {
  var data = 'Comment:<input type="text" name="cname">';
  //adding HTML element -> innerHTML
  document.getElementById("com").innerHTML = data;
}

/**changing background color */
function changeBack(val) {
  if (val.value == "") {
    val.style.background = "pink";
    document.getElementById("err").innerText = "Please enter value";
  }
}
