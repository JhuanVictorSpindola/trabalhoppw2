$(document).ready(function($){
	$("#form-cadastrar").validate({
	// Define as regras
		rules:{
			nome:{
				// campoNome será obrigatório (required) e terá tamanho mínimo (minLength)
				required: true, minlength: 2
			},
			email:{
				// campoEmail será obrigatório (required) e precisará ser um e-mail válido (email)
				required: true, email: true
			},
			senha:{
			    // campoMensagem será obrigatório (required) e terá tamanho mínimo (minLength)
			    required: true, minlength: 7
			}
		},
		// Define as mensagens de erro para cada regra
		messages:{
			nome:{
				required: "Digite o seu nome",
			    minlength: "O seu nome deve conter, no mínimo, 2 caracteres"
			},
			email:{
			    required: "Digite o seu e-mail",
			   	email: "Digite um e-mail válido"
			},
			senha:{
			    required: "Digite a sua senha",
			    minlength	: "A sua senha deve conter, no mínimo, 7 caracteres"
			}
		}
	});			
});