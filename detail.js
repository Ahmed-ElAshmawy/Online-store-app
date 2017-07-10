var element;
onload = function(){
	 element=JSON.parse(localStorage.getItem("element"));
	 var div=document.querySelector('div');
	 div.innerHTML+="<div class='block'><img id='img"+element.name+"' style=width:100px src='"+element.images+"'/><p><strong>Product Name: </strong>" +element.name+"</p><strong>Product Price: </strong>"+element.price+"$</p><p><strong>Product Description: </strong>"+element.description+"</p> </div>";

};
//console.log(element);
function backm(){
	window.location.href = "Main.html";
}