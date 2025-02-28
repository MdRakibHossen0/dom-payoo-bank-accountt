document.getElementById("cashOut").style.display = "none";
document.getElementById("addMoney").style.display = "none";
document.getElementById("Transaction-History").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("addMoney", "block");
  handleToggle("cashOut", "none");
  handleToggle("Transaction-History", "none");
});
document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("cashOut", "block");
  handleToggle("addMoney", "none");
  handleToggle("Transaction-History", "none");
});

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
