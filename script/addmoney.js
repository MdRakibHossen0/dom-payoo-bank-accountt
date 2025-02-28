document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("add-amount");
    const pin = getInputValueByID("acc-password");
    const account = document.getElementById("acc-number").value;
    const mainBalance = getInnerTextByID("main-balance");
    const allBank = document.getElementById("all-bank").value;

    if (amount < 0) {
      alert("Input Positive Number");
      return;
    }
    if (account.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIDandValue("main-balance", sum);

        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.classList.add("bg-red-200");
        div.innerHTML = `
     
      <h1 class="text-blue-400">Added Money </h1>
      <h3>${amount}</h3>
      <p>account number:${account}</p>

      `;
        container.appendChild(div);
      } else {
        console.log("Pin incorrect");
      }
    } else {
      console.log("Acc No incorrect");
    }
  });
