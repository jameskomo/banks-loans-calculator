function bankLoan(amount, term, interest) {
    var totalLoan = amount + (amount * interest / 100 ) * term / 12;
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
      var totalAmountPayable = Math.round(microLoan(loanAmount, interestRate));
      var interestPayable = totalAmountPayable - loanAmount;
      var monthlyPayments = Math.round(totalAmountPayable/loanTerm);

      $("#loan-provider").text(lenderName);
      $("#monthly-payments").text(monthlyPayments);
      $("#total-interest").text(interestPayable);
      $("#total-amount-payable").text(totalAmountPayable);
      $("#application-cost").text(0);
      $("#annual-interest").text(0);

      // alert(totalAmountPayable);
    }
    if (lenderName !== "Mshwari" || lenderName !== "Tala"){
      var appFees = Math.round(appFee(loanAmount, interestRate));
      var loanPlusInterest = bankLoan(loanAmount, loanTerm, interestRate);
      var loanPlusFees = loanPlusInterest + appFees;
      var bankMonthlyPayments = Math.round(loanPlusFees/loanTerm);
      var bankInterestPayable = loanPlusFees - loanAmount;
      console.log(loanPlusFees);

      $("#loan-provider").text(lenderName);
      $("#monthly-payments").text(bankMonthlyPayments);
      $("#total-interest").text(bankInterestPayable);
      $("#total-amount-payable").text(loanPlusFees);
      $("#application-cost").text(appFees);
      $("#annual-interest").text(interestRate + "%");
    }


    $('#tableView').click(function() {
      var insertInformation = function () {
        var table = document.getElementById("loanResults");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);



        cell1.innerHTML = "loanAmount";
        cell2.innerHTML = "totalAmountPayable";
        cell3.innerHTML = "interestPayable";
        cell4.innerHTML = "loanTerm";
    };
  });




  });
});
