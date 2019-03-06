var Lenders = function(name, interest, lender) {
  this.name = name;
  this.interest = interest;
  this.lender = lender;
};

var barclays = new Lenders("Barclays", 18, "Bank");
var kcb =  new Lenders("KCB", 13, "Bank");
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
  var institution = facility.lenderCheck();

  if(institution == "Bank"){
    var interestAmount = amount * facility.interest/100 * term/12;
    var totalLoan = amount + interestAmount;
    return totalLoan;
  }

  if(institution == "Micro Lender") {
    var interestMicro = amount * facility.interest/100;
    var totalMicroLoan = amount + interestMicro;
    return totalMicroLoan;
  }
}

function appFee(amount, lender) {
  var lenderType = lender.lenderCheck();
  var lenderInterest = lender.lenderInterest();
  var appFees = 0;

  if (lenderType == "Bank") {
    if (lenderInterest >= 10 && lenderInterest <= 12){
      appFees = 0.05*amount;
      return appFees;
    } else if (lenderInterest >= 13 && lenderInterest <= 14){
      appFees = 0.10*amount;
      return appFees;
    } else if (lenderInterest >= 15 && lenderInterest <= 17){
      appFees = 0.12*amount;
      return appFees;
    } else if (lenderInterest >= 18 && lenderInterest <= 20){
      appFees = 0.17*amount;
      return appFees;
    }
  }

    var lenderName = lender.lenderName();

    if (lenderType == "Micro Lender"){
      if (lenderName == "Tala") {
        appFees = 100;
        return appFees;
      } else if (lenderName == "Mshwari") {
        appFees = 150;
        return appFees;
      }
    }
  }
