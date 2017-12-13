$.getJSON("jsonT/produto.json", function(text){ 
	var d = JSON.stringify(text);
    var e = JSON.parse(d);
    var txt = "";
   for(var i = 0; i < e.length; ++i){
   		txt += "<li> <div><a href='produto.html'> <img class='prod' src='" + e[i].imagem + "'></a></div> <div><a class='lp' href='produto.html'><span class='nomepro'>" + e[i].nome + "</span></a></div> <div><a class='lp' href='produto.html'><span class='preçopro'>" + e[i].preço+ "</span></a></div> <div><span class='avaliaçao'>Avaliação:</span></div> <div><img class='star' src='imagens/icones/starrank" + e[i].star + ".png'></div> <div><span class='prodcat'>" + e[i].categoria + "</span></div></li>";
   }
   document.getElementById("listapro").innerHTML = txt;
});