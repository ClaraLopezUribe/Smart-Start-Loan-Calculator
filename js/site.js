/* CONTROL: */

 // Don't forget to wire up an event listener to activate the JS : Match the function name exactly as it appears in the addEventListener parameter
function getValues() {

    // retrieve user input
    let loanAmount = document.getElementById("loanAmount").value; 
    let term = document.getElementById("term").value;
    let interestRate = document.getElementById("interestRate").value;

    // convert user input to Numbers; can be accomplished a number of ways, as shown below
    loanAmount = Number(loanAmount);
    term = (term * 1);
    interestRate = parseFloat(interestRate);

    calculateTotals(loanAmount, term, interestRate);
    
}

function calculateTotals(loanAmount, term,interestRate) {

    let monthlyRate = interestRate/1200;
    let yourPayment = (loanAmount * monthlyRate)/(1-(1 + monthlyRate)**(-(term)));
    let totalInterest = loanAmount * monthlyRate * term;
    let totalCost = loanAmount + totalInterest;

    displayTotals(yourPayment, loanAmount, totalInterest, totalCost);
}

function displayTotals(yourPayment, loanAmount, totalInterest, totalCost) {

    document.getElementById("yourPayment").innerHTML = ` $${yourPayment.toFixed(2)}`;
    document.getElementById("totalPrincipal").innerHTML = ` $${loanAmount.toFixed(2)}`;
    document.getElementById("totalInterest").innerHTML = ` $${totalInterest.toFixed(2)}`;
    document.getElementById("totalCost").innerHTML = ` $${totalCost.toFixed(2)}`

}



    
/*    let remainingBalance = remainingBalance(loanAmount);
    let interestPayment = interestPayment(remainingBalance);
    let principalPayment = principalPayment();

    
} */

/*function principalPayment() {

    yourPayment - interestPayment
}

function remainingBalance(remainingBalance) {

    remainingBalance - principalPayment

}

function interestPayment(remainingBalance, monthlyRate) {

    remainingBalance * monthlyRate
} */



/* Terminology






let totalCost = document.getElementById("totalCost");



Month (eg. 1-60)
Begining Balance
Payment
Interest
Ending Balance


/*Formulas Used:

Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(rised to the power of -Number of Months) )
Remaining Balance before the very first month equals the amount of the loan.
Interest Payment = Previous Remaining Balance * rate/1200


monthlyPayment = (loanAmount, rate, termInMonths)
remainingBalance = previousBalance - principalPaid
interestPaid = previousBalance * rate

principalPaid = monthlyPayment - interestPaid
interestPaid(previousBalance)
interestToDate()
*/


/* LOGIC:





*/

/* DISPLAY:

Create a tabel template with the following columns:
Month (display numbers 1- termInMonths), Payment, Principle, Interest, Interest to date, Remaining Balance

To the document set the values of the table data



*/


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
At end each month, Remaining Balance = Previous Remaining Balance - principal payments

 */


/* Note Truth in Lending

The Truth in Lending Act (TILA) requires financial institutions to disclose credit terms to protect consumers. This includes information about loan costs, credit card practices, and more. TILA also gives consumers certain rights, such as a right of rescission and a grace period between receiving a monthly statement and the due date. 
Here are some of the requirements of the Truth in Lending Act: 
Loan cost information
Lenders must provide information about loan costs so that consumers can compare loans. This includes the interest rate, finance charges, annual percentage rate, and other costs that make up the total loan amount. 
Disclosures
TILA disclosures are often included in the loan contract and should be reviewed before signing. They may include the number of payments, monthly payment, late fees, and whether the borrower can prepay the loan without penalty. 
Right of rescission
Consumers have a right of rescission that allows them to back out of a loan within three days without losing money. This helps protect consumers from high-pressure sales tactics. However, the right of rescission does not apply to home loans, refinances, or consolidations unless the amount exceeds the unpaid balance. 
Credit card requirements
Credit card issuers must give consumers at least a 45-day notice before raising interest rates and a 21-day grace period between the statement and due date. They must also disclose that consumers who only make minimum payments will pay more interest and take longer to pay off their balance. 
TILA also protects consumers from inaccurate credit billing and credit card practices, rate caps on certain loans, and limitations on home equity lines of credit. */