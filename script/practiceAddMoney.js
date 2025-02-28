document.getElementById("cashOut").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("addMoney").style.display = "block";
  document.getElementById("cashOut").style.display = "none";
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("cashOut").style.display = "block";
  document.getElementById("addMoney").style.display = "none";
});

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addAmount = document.getElementById("add-amount").value;
    const convertedAddAmount = parseFloat(addAmount);
    const accNumber = document.getElementById("acc-number").value;
    const accPassword = document.getElementById("acc-password").value;
    const convertedAccPassword = parseInt(accPassword);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (accNumber.length === 11) {
      if (convertedAccPassword === 1234) {
        const sum = convertedMainBalance + convertedAddAmount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("pin Incorrect");
      }
    } else {
      alert("Acc no Incorrect");
    }
  });
