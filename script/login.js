document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accNumber = document.getElementById("acc-number").value;
    const convertedAccNumber = parseInt(accNumber);
    const accPin = document.getElementById("acc-pin").value;
    const convertedAccPin = parseInt(accPin);
    //console.log(convertedAccNumber, convertedAccPin);

    if (accNumber.length===11 ) {
        if (convertedAccPin===1234){
            window.location.href="main.html"
           
        } console.log("incorrect pin");
    } else {
      console.log("Acc no incorrect");
    }
  });
