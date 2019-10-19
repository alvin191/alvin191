$(document).ready(function () {
$("#dnhap").show();
$("#dky").hide();
$("#dangnhap").click(function () {
    $("#dnhap").show();
    $("#dky").hide();
});
$("#dangky").click(function () {
    $("#dnhap").hide();
    $("#dky").show();
});
});
