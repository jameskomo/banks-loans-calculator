function bankLoan(amount, term, interest) {
  var totalLoan = amount + (amount * interest / 100) * term / 12;
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

    if (lenderName === "Mshwari" || lenderName === "Tala") {
      var totalAmountPayable = Math.round(microLoan(loanAmount, interestRate));
      var interestPayable = totalAmountPayable - loanAmount;
      var monthlyPayments = Math.round(totalAmountPayable / loanTerm);

      $("#loanProvider").text(lenderName);
      $("#requestedAmount").text(loanAmount);
      $("#loanTerm").text(loanTerm);
      $("#monthlyPayments").text(monthlyPayments);
      $("#totalInterest").text(interestPayable);
      $("#totalAmountPayable").text(0);
      $("#applicationCost").text(0);
      $("#annualInterest").text(totalAmountPayable);

      // alert(totalAmountPayable);
    }
    if (lenderName !== "Mshwari" || lenderName !== "Tala") {
      var appFees = Math.round(appFee(loanAmount, interestRate));
      var loanPlusInterest = bankLoan(loanAmount, loanTerm, interestRate);
      var loanPlusFees = loanPlusInterest + appFees;
      var bankMonthlyPayments = Math.round(loanPlusFees / loanTerm);
      var bankInterestPayable = loanPlusFees - loanAmount;
      console.log(loanPlusFees);

      $("#loanProvider").text(lenderName);
      $("#requestedAmount").text(loanAmount);
      $("#loanTerm").text(loanTerm);
      $("#monthlyPayments").text(bankMonthlyPayments);
      $("#totalInterest").text(bankInterestPayable);
      $("#totalAmountPayable").text(interestRate + "%");
      $("#applicationCost").text(appFees);
      $("#annualInterest").text(loanPlusFees);
      $('#loanResults').show();
      $('#clearTable').show();


    }


    $('#clearTable').click(function() {
      $("#loanProvider").text("");
      $("#requestedAmount").text("");
      $("#loanTerm").text("");
      $("#monthlyPayments").text("");
      $("#totalInterest").text("");
      $("#totalAmountPayable").text("");
      $("#applicationCost").text("");
      $("#annualInterest").text("");
      $('#loanResults').hide();
      $('#clearTable').hide();
    });




  });
});
