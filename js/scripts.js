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
