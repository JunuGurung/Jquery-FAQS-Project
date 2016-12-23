$(".question").click(function(){
	$(this).next().fadeToggle("slow");
	console.log($(this).children().toggleClass("collapse"));
	// $("#a1").fadeToggle("slow");
	// $("#arrow-down1").toggleClass("collapse");
	// $("#arrow-up1").toggleClass("collapse");
	
	});

// $("#q2").click(function(){
// 	$("#a2").fadeToggle("slow");
// 	$("#arrow-down2").toggleClass("collapse");
// 	$("#arrow-up2").toggleClass("collapse");

// });

// $("#q3").click(function(){
// 	$("#a3").fadeToggle("slow");
// 	$("#arrow-down3").toggleClass("collapse");
// 	$("#arrow-up3").toggleClass("collapse");

// });

// $("#q4").click(function(){
// 	$("#a4").fadeToggle("slow");
// 	$("#arrow-down4").toggleClass("collapse");
// 	$("#arrow-up4").toggleClass("collapse");

// });
