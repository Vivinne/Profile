$(document).ready(function () {
	$("#Modal").on("click", showModal);
	$("#enter").on("click", enter);
	$("#Danger").on("click", Danger);
	$("#Basic").on("click", Basic);
	$("#Default").on("click", Default);
	$("#Primary").on("click", Primary);
	$("#Success").on("click", Success);
	$("#Info").on("click", Info);
	$("#Warning").on("click", Warning);
});
function showModal(){
	$("#mymodal").modal("show");
};

function enter() {
	var name = $("#a").val();
	var age = $("#b").val();
	var a = "安妞~" + age +　"歲的" +　name;
	if( $("#aa").prop("checked") ){ 
           alert( "原來你喜歡吃"+$("#aa").val() );
       }
       if( $("#bb").prop("checked") ){
           alert( "原來你喜歡吃"+$("#bb").val() );
       }
       if( $("#cc").prop("checked") ){
           alert( "原來你喜歡吃"+$("#cc").val() );
       }
       if( $("#dd").prop("checked") ){
           alert( "原來你喜歡吃"+$("#dd").val() );
       };
	$("#a").val("");
	$("#b").val("");
	$("#aa").prop("checked", false);
	$("#bb").prop("checked", false);
	$("#cc").prop("checked", false);
	$("#dd").prop("checked", false);
}

function Danger() {
	alert("Don't tcuch me!!!!!");
};

function Basic() {
	var name1 = prompt("What your name?");
	alert("Hello" + name1);
};

function Default() {
	alert("................................................................................");
};

function Primary() {
	var bts = prompt("Do you know BTS?(Anser yes or no)");
	if (bts != "no") {
		alert("ARMY!!!!!");
	} else {
		if (bts = "no") {
			alert("oh....................");
		}
	};
};

function Success() {
	alert("If you think you are beaten, you are;If you think you dare not, you don't.If you'd like to win, but you think you can't,It is almost a certain - you won't.If you think you'll lose, you're lost;For out in this world we findSuccess begins with a fellow's willIt's all in the state of mind.If you think you're outclassed, you are;You've got to think high to rise.You've got to be sure of yourself You can ever win the prize.Life's battles don't always goTo the stronger or faster man;But sooner or later the man who Is the one who thinks he can!")};

function Info() {
	var email = prompt("Please give me your e-mail.");
	alert("this is mine.  bts0613army.luv.u@gmail.com");
};

function Warning() {
	alert("Warning.Warning.Warning.Warning.Warning.");
};
