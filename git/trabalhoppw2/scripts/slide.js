$(document).ready(function(){
	$("#slide img:eq(0)").addClass("ativo");
	setInterval(slide,10000);
	slide();
	function slide(){
		var texto = $(".ativo").attr("alt");
		$("#slide").prepend("<p>"+texto+"</p>");

		if($(".ativo").next().size()){							
			$(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
			var texto = $(".ativo").attr("alt");
			$("#slide p").hide().html(texto).delay(500).fadeIn();
		}
		else{
			$(".ativo").fadeOut().removeClass("ativo");
			$("#slide img:eq(0)").addClass("ativo").fadeIn();
			var texto = $(".ativo").attr("alt");
			$("#slide p").hide().html(texto).delay(500).fadeIn();
		}
	}
})
