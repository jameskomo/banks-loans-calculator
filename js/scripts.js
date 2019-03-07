function bankLoan(amount, term, interest) {
   var totalLoan = amount + (amount * interest / 100 * term / 12);
   return totalLoan;
}

function microLoan(amount, interest) {
     var totalMicroLoan = amount + (amount * interest / 100);
     return totalMicroLoan;
}

function appFee(amount, interest) {
 var appFees = 0;

   if (interest >= 10 && interest <= 12) {
     appFees = 0.05 * amount;
     return appFees;
   } else if (interest >= 13 && interest <= 14) {
     appFees = 0.10 * amount;
     return appFees;
   } else if (interest >= 15 && interest <= 17) {
     appFees = 0.12 * amount;
     return appFees;
   } else if (interest >= 18 && interest <= 20) {
     appFees = 0.17 * amount;
     return appFees;
   } else {
   return appFees;
   }
}


$(document).ready(function() {
 $('#check').click(function() {
   event.preventDefault();
   var loanAmount = parseInt($('#loan-amount').val());
   var loanTerm = parseInt($("#loan-term").val());
   var interestRate = parseFloat($("#lender-list option:selected").val());
   var lenderName = $("#lender-list option:selected").text();
   console.log(loanAmount);
   console.log(loanTerm);
   console.log(interestRate);
   console.log(lenderName);

   if(lenderName === "Mshwari" || lenderName === "Tala") {
     console.log(microLoan(loanAmount, interestRate));
   } else {
     var loanPlusFees = bankLoan(loanAmount, loanTerm, interestRate) + appFee(loanAmount, interestRate);
     console.log(loanPlusFees);
   }


   // var loanRequested = ;
   // console.log(loanRequested);
   // console.log(appFee(10000, kcb));



   // console.log(requestedLoan);
   // var applicationFee = appFee(loanAmount, lenderList);
   // var potentialLoan = requestedLoan + applicationFee;
   // var monthlyPayments = potentialLoan / 12;


 });
});
