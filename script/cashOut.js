document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accNumber = document.getElementById("acc-number-cashOut").value;
    const amountCashOut = getInputValueByID("amount-cashOut");
    const mainBalance = getInnerTextByID("main-balance");
    const cashOutPin = getInputValueByID("acc-cash-out-pin");
   if (mainBalance<amountCashOut){
    alert('not enough balance')
    return;
   }
     if (accNumber.length === 11) {
       if (cashOutPin === 1234) {
         const sum = mainBalance - amountCashOut;
         setInnerTextByIDandValue("main-balance", sum);

         const container = document.getElementById("transaction-container");
         const div = document.createElement("div");
        div.innerHTML = `
        <h1>CashOut Money</h1>
      <h3>${amountCashOut} </h3> 
      <p> CashOutNumber:${accNumber}</p>


        
        `;

        
         container.appendChild(div);
       } else {
         alert("pin incorrect");
       }
     } else {
     }
  });
