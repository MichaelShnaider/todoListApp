var newTodo;



$("input").on("keypress",function(event){
	if(event.which === 13){
		newTodo = $(this).val();
		$("ul").append("<li><span class='deleteButton'><i class='fa fa-trash'></i></span>"+newTodo+"</li>");
		$(this).val("");
		init();
		
		/*var h = document.querySelector(".container").style.marginBottom;
		document.querySelector(".container").style.marginBottom = "40px";*/
	}

});


	


$("input").on("mouseenter",function(event){
	$(this).focus();
});

$("ul").on("click","li",function(){
	$(this).toggleClass("crossedOut");
});

$("ul").on("click",".deleteButton",function(event){
	$(this).parent().slideUp(100,function(){
		$(this).remove();
		init();
	});
		event.stopPropagation();

}); 

$(".fa-plus").on("click",function(){

	$("input").slideToggle(500);
});
