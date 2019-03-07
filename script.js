$("#hp").hide();
$(".hooray").hide();
$("#SM3").hide();
$(".kp").hide();
$("#krb").hide();

$("button").click(function(){
    $("#sm").append("Now double click here...");
});
$("#sm").dblclick(function(){
    $("#hp").show();
    $("#sm").text("Touch to make the Flying Dutchman go away");
    $("#sm").css("font-family", " ZCOOL Kuaile");
});
$("#hp").hover(function(){
    $("#sm").text("You did it! Now click on the treasure you're almost there");
    $("#hp").hide();
});
$("#treasure").click(function(){
    $("body").css("background-image", "url('https://i.gifer.com/7lAV.gif')");
    $("#sm").hide();
    $("#SM3").show();
    $("#SM3").css("color", "black");
});
$("h1").click(function(){
    $("p").hide();
    $("h2").hide();
    $("img").hide();
    $("button").hide();
    $(".hooray").show();
    $(".hooray").css("color", "black");
});
$(".hooray").click(function() {
    $(".kp").show();
    $(".hooray").hide();
    $("#krb").show();
    $("#krb").css("color", "black");
});

