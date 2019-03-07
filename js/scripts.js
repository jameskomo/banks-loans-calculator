
function bankLoan(amount, term, interest) {
    var totalLoan = amount + (amount * interest / 100 * term / 12);
    return totalLoan;
}

function microLoan(amount, interest) {
      var totalMicroLoan = amount + (amount * interest / 100);
      return totalMicroLoan;
}

function appFee(amount, interest) {


//BACK-END LOGIC
$( "#submit" ).click(function() {
  $("#repaymentFrequency").on("change", function() {
    var repaymentFrequency = $(this).val();
    console.log(repaymentFrequency);

var Lenders = function(name, interest, lender) {
  this.name = name;
  this.interest = interest;
  this.lender = lender;
};

var barclays = new Lenders("Barclays", 18, "Bank");
var kcb = new Lenders("KCB", 13, "Bank");
var equity = new Lenders("Equity", 14, "Bank");
var coop = new Lenders("Cooperative", 15, "Bank");
var mshwari = new Lenders("Mshwari", 7.5, "Micro Lender");
var tala = new Lenders("Tala", 15, "Micro Lender");

Lenders.prototype.lenderCheck = function() {
  return this.lender;
};

Lenders.prototype.lenderInterest = function() {
  return this.interest;
};

Lenders.prototype.lenderName = function() {
  return this.name;
};

function loan(amount, term, facility) {
  var institution = facility.lender;

  if (institution == "Bank") {
    var interestAmount = amount * facility.interest / 100 * term / 12;
    var totalLoan = amount + interestAmount;
    return totalLoan;

  }
  $("#select-bank").on("change", function() {
    var selectedLender = $(this).val();
    alert(selectedLender);
  }

}

function appFee(amount, lender) {
  var lenderType = lender.lender;
  var lenderInterest = lender.interest;
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
  // $('[data-toggle="tooltip"]').tooltip();
  $('#check').click(function() {
    event.preventDefault();
    var loanAmount = $('#loan-amount').val();
    var loanTerm = $("#loan-term").val();
    var lenderList = $("#lender-list option:selected").val();
    console.log(loanAmount);
    console.log(loanTerm);
    console.log(lenderList);
    var loanRequested=[loanAmount, loanTerm, typeOf(lenderList)];
    console.log(loanRequested);



    // var requestedLoan = loan(loanAmount, loanTerm, lenderList);
    console.log(requestedLoan);
    var applicationFee = appFee(loanAmount, lenderList);
    var potentialLoan = requestedLoan + applicationFee;
    var monthlyPayments = potentialLoan / 12;

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


// function loan(amount, term, facility) {
//   var institution = facility.lender;
//   let totalLoan = [];
//   let totalMicroLoan = [];
//   if (institution == "Bank") {
//     var interestAmount = amount * facility.interest / 100 * term / 12;
//     totalLoan.push(amount + interestAmount);
//   }
//   return totalLoan;
//
//   if (institution == "Micro Lender") {
//     var interestMicro = amount * facility.interest / 100;
//     totalMicroLoan.push(amount + interestMicro);
//   }
//   return totalMicroLoan;
// }

// function cheapestLender(amount, term, facility) {
//   var institution = facility.lender;
//   var cheapLender = facility.interest;
//   let bankInterest = 0;
//   let totalBankLoan = 0;
//   let microinterest = 0;
//   let totalMicroLoan = 0;
//
//   if (institution == "Bank" && cheapLender < 14) {
//     bankInterest = amount * facility.interest / 100 * term / 12;
//     totalBankLoan = amount + bankInterest;
//     return totalBankLoan;
//   }
//
//   if (institution == "Micro Lender" && cheapLender < 10) {
//     microinterest = amount * facility.interest / 100;
//     totalMicroLoan = amount + microinterest;
//     return totalMicroLoan;
//   }
// }

// console.log(loan(10000,12,equity));
