var newTodo;
$("input").slideToggle(0001);


$("input").on("keypress",function(event){
	if(event.which === 13){
		newTodo = $(this).val();
		$("ul").append("<li><span class='deleteButton'><i class='fa fa-trash'></i></span>"+newTodo+"</li>");
		$(this).val("");
	}

});

$("ul").on("click","li",function(){
	$(this).toggleClass("crossedOut");
});

$("ul").on("click",".deleteButton",function(event){
	$(this).parent().slideUp(100,function(){
		$(this).remove();
	});
		event.stopPropagation();
}); 

$(".fa-plus").on("click",function(){

	$("input").slideToggle(500);
});