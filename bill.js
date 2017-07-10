var Item=JSON.parse(localStorage.getItem("Item"));


var l=Item.length;
var totalpriceval=0;
        for (var i=0;i<l;i++)
		{

    		var table=document.querySelector('tbody');
    		table.innerHTML+="<tr><td>"+Item[i].name+"</td><td>"+Item[i].price+"</td><td>"+Item[i].number+"</td><td>"+Item[i].totalprice+"</td></tr>";
    		totalpriceval=totalpriceval+Item[i].totalprice;

		}
		table.innerHTML+="<tr><td class='total' colspan='3'>Total</td><td class='total' >"+totalpriceval+"</td></tr>";

function back(){
	window.location.href = "Main.html";
}

function confirm(){
	window.location.href = "Thanks.html";
}