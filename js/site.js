/* CONTROL: */

 // Don't forget to wire up an event listener to activate the JS : The initial function name must match exactly with the addEventListener parameter
function getValues() {

    // retrieve user input
    let loanAmount = document.getElementById("loanAmount").value; 
    let term = document.getElementById("term").value;
    let interestRate = document.getElementById("interestRate").value;

    let returnObject = calculateTotals(loanAmount, term, interestRate);

    let payoffArray = calculatePayoffSchedule(returnObject);

    displayTotals(returnObject);

    displayScheduleTable(payoffArray);

}

/* LOGIC: */

function calculateTotals(loanAmount, term,interestRate) {

    // convert user input to Numbers; can be accomplished a number of ways, as shown below
    loanAmount = Number(loanAmount);
    term = (term * 1);
    interestRate = parseFloat(interestRate);

    let monthlyRate = interestRate/1200;
    let totalInterest = loanAmount * monthlyRate * term;
    let totalCost = loanAmount + totalInterest;
    let yourPayment = (loanAmount * monthlyRate)/(1-(1 + monthlyRate)**(-(term)));

    let remainingBalance = loanAmount;
    let interest = remainingBalance * monthlyRate;
    let principal = yourPayment - interest;
      
    let returnObject = {};

    returnObject.loanAmount = loanAmount;
    returnObject.term = term;   
    returnObject.monthlyRate = monthlyRate;
    returnObject.totalInterest = totalInterest;
    returnObject.totalCost = totalCost;
    returnObject.yourPayment = yourPayment;
    returnObject.remainingBalance = remainingBalance;
    returnObject.interest = interest;
    returnObject.principal = principal;


    return returnObject;

}


/* create amortization schedule table*/

function calculatePayoffSchedule(returnObject) {

    //create array to hold values for table rows
    let payoffArray = [];

    for (let i = 1; i <= returnObject.term; i++) {
 
        payoffArray.push(i, returnObject.yourPayment.toFixed(2), returnObject.principal.toFixed(2), returnObject.interest.toFixed(2), "tbd" , "tbd");
        
    }

    return payoffArray;

}

/* DISPLAY: */

function displayTotals(returnObject) {

    document.getElementById("yourPayment").innerHTML = ` $${returnObject.yourPayment.toFixed(2)}`;
    document.getElementById("totalPrincipal").innerHTML = ` $${returnObject.loanAmount.toFixed(2)}`;
    document.getElementById("totalInterest").innerHTML = ` $${returnObject.totalInterest.toFixed(2)}`;
    document.getElementById("totalCost").innerHTML = ` $${returnObject.totalCost.toFixed(2)}`;

}

/* Create a tabel template with the following columns:
Month (display numbers 1 through returnObject.term), Payment, Principle, Interest, Interest to date, Remaining Balance */

//To the document set the values of the table data (id="results") 
function displayScheduleTable(payoffArray) {

     // Get the table body element from the page
     let tableBody = document.getElementById("results");

     // Get the template element from the page
    let templateRow = document.getElementById("payoffTemplate");

     // Clear the table first
     tableBody.innerHTML = "";

     for (let index = 0; index < payoffArray.length; index += 6) {
        
        // Make a copy/fragment of the template row with importNode
        let tableRow = document.importNode(templateRow.content, true);
    
        // Get just the td and put them into an array to check its length
        let rowCols = tableRow.querySelectorAll("td");
    
        rowCols[0].classList.add(payoffArray[index]);
        rowCols[0].textContent = (payoffArray[index]);
        rowCols[1].classList.add(payoffArray[index+1]);
        rowCols[1].textContent = payoffArray[index+1];
        rowCols[2].classList.add(payoffArray[index+2]);
        rowCols[2].textContent = payoffArray[index+2];
        rowCols[3].classList.add(payoffArray[index+3]);
        rowCols[3].textContent = payoffArray[index+3];
        rowCols[4].classList.add(payoffArray[index+4]);
        rowCols[4].textContent = payoffArray[index+4];
        rowCols[5].classList.add(payoffArray[index+5]);
        rowCols[5].textContent = payoffArray[index+5];
       
        tableBody.appendChild(tableRow);

       }
}

/* Specifications:

Write a mortgage loan calculator application that takes in three parameters:
1. The amount of money loaned in dollars (balance)
2. The time over which the loan will be repaid, in months (term)
3. The percentage rate at which interest will accrue on the loan (rate)

The output should include the following:
1. The month (1 corresponding to the 1st
month of payment, through the total
number of months)
2. The payment amount
3. The principal paid this month
4. The interest paid this month
5. The total interest paid to date
6. The remaining loan balance at the end of
the month

Formulas Used:

Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(rised to the power of -Number of Months) )
Remaining Balance before the very first month equals the amount of the loan.
Interest Payment = Previous Remaining Balance * rate/1200
Principal Payment = Total Monthly Payment - Interest Payment
At end each month, Remaining Balance = Previous Remaining Balance - principal payments */


