$(document).ready(function () {
	$("#Modal").on("click", showModal);
	$("#enter").on("click",enter);
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



	   


