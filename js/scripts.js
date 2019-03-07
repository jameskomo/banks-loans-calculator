//BACK-END LOGIC
$( "#submit" ).click(function() {
  $("#repaymentFrequency").on("change", function() {
    var repaymentFrequency = $(this).val();
    console.log(repaymentFrequency);
  }
  $("#select-bank").on("change", function() {
    var selectedLender = $(this).val();
    alert(selectedLender);
  }
});
