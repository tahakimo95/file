$(document).ready(function () {
	
	'use strict';
	
	  // let's do the magic!
	
	
	$(".taha").click(function () {
		
		$(".color-option").toggle(1000);
	});
	
	var colorLi = $(".color-option ul li");

	colorLi
		.eq(0).css('background', '#007bff').end()
		.eq(1).css('background', '#28a745').end()
		.eq(2).css('background', '#dc3545').end()
		.eq(3).css('background', '#ffc107');
	
	colorLi.click(function () {
		
		$("link[href*='them']").attr("href", $(this).attr("data-value"));
		
		//console.log($(this).attr("data-value"));
	});
	
	
	
	
	
	
	
});


$(function () {
	
	'use strict';
	
	$("html").niceScroll();
	
});







$(function () {
	
	'use strict';
	
	
	
	var button = $(".tlev");
	
	$(window).scroll(function () {
		
		$(this).scrollTop() >= 200 ? button.slideDown() : button.slideUp();
	});
	
	button.click(function () {
		$("html,body").animate({scrollTop :0}, 500);
	});
});






























































/*$(function () {
    'use strict';

    $(".normal").on("click", function () {
        $(this).hide();
    });
    $(".normal").on("mouseenter mouseleave", function () {
        $(this).toggleClass("prpr");
    });
    $("p").on("mypragra", function (event, myHeigth, myWidth, myBack, myColor) {
        $(this).height(myHeigth).width(myWidth);
        $(this).css({
            backgroundColor: myBack,
            color: myColor
        });
    });
    $("button").on("click", function () {
        $("p").trigger("mypragra", ["200px", "300px", "red", "#FFF"]);
    });
});*/

/*$(function () {

    'use strict';

	$(".add").on("click", function () {

		$("span").wrap("<div></div>");
	});

	$(".remove").on("click", function () {

		$("span").unwrap();
	});

});

*/











  /*  $(":header").not().css({transition: 'all 1s ease-in-out', background: '#5e50a1', color: '#FFF', fontFamily: 'sans-serif'}); */























/*var i, x;

Mainloop:

for (i = 1; i < 5; i++) {

    ChildLoop:

        for (x = 15; x < 20; x++) {

            if (x === 19) {

                continue ChildLoop;
            }


        console.log(i +" => " + x);
    }


}

*/






/* Evets

var myInput = document.getElementById("input"),

    myDiv = document.getElementById("div"),

    myCrunci = document.getElementById("crunci");

myCrunci.onchange = function () {

    "use strict";

    myDiv.innerHTML = " Worth " + myInput.value * myCrunci.value + " Egyption pound ";

};
*/



/*
Scop

var x = 1;

function testprent() {

        var x = 5;

    function testchild() {

        var cloc = x + 3;

        console.log(cloc);
        console.log(x);
    }

        console.log(x);

    return testchild();

}

testprent(); // 5 + 3 = 8

console.log(x + 9); // 1 + 9 = 10 */























/*
Switch

var season = prompt(" Whats your season for you ");

switch (season) {

case "winter":

    alert("winter Is Gold");

    break;

case "summer":

    alert("summer Is hot");

    break;

case "autumn":

    alert("autumn Is very good");

    break;


case "spring":

    alert("spring Is amazing");

    break;

default:

    alert("you didnt enter a season name");

    break;

}


*/



























/*

( Function )

function sayHi() {

    var amount = document.getElementById("doller").value,

        result = amount * 3.75,

        Message = document.getElementById("Message");


    if (amount === "") {

    Message.innerHTML = "لازم تكتب حاجة ";

    } else if (isNaN(amount)) {

    Message.innerHTML = " لازم تكتب رقم ";

    } else if (amount === "0") {

    Message.innerHTML = " مش لازم تكتب صفر ";

    } else if (amount < 0) {

    Message.innerHTML = " مينفعش يكون رقم بل السالب ";

    } else if (amount > 10000) {

    Message.innerHTML = " الرقم دا مش مسموح نحسوب فى ادات بيز ";

    } else {

    Message.innerHTML = +amount + "$ doller is worth " + result + " ryal";
    }

    }
    */




/*var ticketPrice = 1900;

if (ticketPrice < 1950) {

    console.log("yest its cheep")

} else if(ticketPrice == 2000) {

    console.log("yes its Good price")

} else {

    console.log("no its expensive");

}
*/

// document.getElementById("price").innerHTML = z;
