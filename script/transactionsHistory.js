document
  .getElementById("transactions-box")
  .addEventListener("click", function () {
    //    document.getElementById("addMoney").style.display = "none";
    //    document.getElementById("cashOut").style.display = "none";
    handleToggle("addMoney", "none");
    handleToggle("cashOut", "none");
    handleToggle("Transaction-History", "block");
  });
