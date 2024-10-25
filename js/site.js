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

    let yourPayment = calculateTotals(loanAmount, term, interestRate);


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

    displayTotals(yourPayment, loanAmount, totalInterest, totalCost);

    return yourPayment;
}


// create amortization schedule calculations

/* function remainingBalance(loanAmount) {


Remaining Balance before the very first month equals the amount of the loan.
remainingBalance = previousBalance - principalPaid
    
    iteration 0 remaining balance = loanAmount
    interation 1 remaining balance = loanAmount - principalPayment
    iteration 2 remaining balance = previous remaining balance - principalPayment
    
    }

*/

/*function principalPayment() {

    yourPayment - interestPayment

    principalPaid = monthlyPayment - interestPaid
}

function interestPayment(remainingBalance, monthlyRate) {

    remainingBalance * monthlyRate
} */


/* DISPLAY: */

function displayTotals(yourPayment, loanAmount, totalInterest, totalCost) {

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