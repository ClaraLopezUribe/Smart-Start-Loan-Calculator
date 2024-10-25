/* CONTROL: */

 // Don't forget to wire up an event listener to activate the JS : Match the function name exactly as it appears in the addEventListener parameter
function getValues() {

    // retrieve user input
    let loanAmount = document.getElementById("loanAmount").value; 
    let term = document.getElementById("term").value;
    let interestRate = document.getElementById("interestRate").value;

    /*  let remainingBalance = remainingBalance(loanAmount);
    let interestPayment = interestPayment(remainingBalance);
    let principalPayment = principalPayment();

    interestPaid(previousBalance)
    interestToDate()*/

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


/* create amortization schedule */

/* iteration 0 remaining balance = loanAmount
    interation 1 remaining balance = loanAmount - principalPayment
    iteration 2 remaining balance = previous remaining balance - principalPayment */

function calculatePayoffSchedule(returnObject) {

    

    //create object to hold new values for table???
    let payoffArray = [];

    for (let i = 1; i <= returnObject.term; i++) {
 
        payoffArray.push(i, returnObject.yourPayment.toFixed(2), returnObject.principal.toFixed(2), returnObject.interest.toFixed(2), "tbd" , "tbd");
        
    }

    return payoffArray;

}

   /* //let remainingBalance = returnObject.loanAmount;
    //let interest = returnObject.loanAmount * returnObject.monthlyRate;
    //let principal = yourPayment - interest;

    // calculate remaining balance. before 1st month this = loanAmount)
    for (let i = 1; i <= returnObject.term; i++) {
       
        returnObject.remainingBalance -= returnObject.principal;

        return payoffObject;

    }


    //for loop to calculate each month's interest
    for (let i = 1; i <= returnObject.term; i++) {

    }

*/

/* DISPLAY: */

function displayTotals(returnObject) {

    document.getElementById("yourPayment").innerHTML = ` $${yourPayment.toFixed(2)}`;
    document.getElementById("totalPrincipal").innerHTML = ` $${loanAmount.toFixed(2)}`;
    document.getElementById("totalInterest").innerHTML = ` $${totalInterest.toFixed(2)}`;
    document.getElementById("totalCost").innerHTML = ` $${totalCost.toFixed(2)}`



/* Create a tabel template with the following columns:
Month (display numbers 1- termInMonths), Payment, Principle, Interest, Interest to date, Remaining Balance

To the document set the values of the table data (id="results") */

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


