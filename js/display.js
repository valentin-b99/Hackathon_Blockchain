$(document).ready(function() {
    $('.table').DataTable({
        "lengthChange": false
    });

    $("#homebutton").click(function() {
        $("#home").removeClass("dispnone");
        $("#transaction").addClass("dispnone");
        $("#history").addClass("dispnone");
        $("#homebutton").addClass("active");
        $("#transactionbutton").removeClass("active");
        $("#historybutton").removeClass("active");
    });
    $("#transactionbutton").click(function() {
        $("#home").addClass("dispnone");
        $("#transaction").removeClass("dispnone");
        $("#history").addClass("dispnone");
        $("#homebutton").removeClass("active");
        $("#transactionbutton").addClass("active");
        $("#historybutton").removeClass("active");
    });
    $("#historybutton").click(function() {
        $("#home").addClass("dispnone");
        $("#transaction").addClass("dispnone");
        $("#history").removeClass("dispnone");
        $("#homebutton").removeClass("active");
        $("#transactionbutton").removeClass("active");
        $("#historybutton").addClass("active");
    });
});