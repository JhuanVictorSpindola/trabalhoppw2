$(document).ready(function(){
	$("#slide div:eq(0)").addClass("ativo");
	prox();

	function prox(){
		if($(".ativo").next().size()){							
			$(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
		}
		else{
			$(".ativo").fadeOut().removeClass("ativo");
			$("#slide div:eq(0)").addClass("ativo").fadeIn();
		}
	}
	function prev(){
		if($(".ativo").prev().size()){							
			$(".ativo").fadeOut().removeClass("ativo").prev().fadeIn().addClass("ativo");
		}
		else{
			$(".ativo").fadeOut().removeClass("ativo");
			$("#slide div:eq(1)").addClass("ativo").fadeIn();
		}
	}
})