var request=new XMLHttpRequest();
request.open("GET","http://test.w34.co/json/");
var data;

request.onreadystatechange =function(){
    if (this.readyState==4 && this.status==200)
    {
        data= JSON.parse(this.response);
        var l=data.length;

        for (var i=0;i<l;i++)
		{
    		var table=document.querySelector('div');
    		table.innerHTML+="<div class='block'><img id='img"+data[i].name+"' onclick='detail(\""+i+"\")' style=width:100px src='"+data[i].images+"'/><p><strong>Product Name: </strong>" +data[i].name+"</p><strong>Product Price: </strong>"+data[i].price+"$</p><button  id='dec"+data[i].name+"' onclick='minu(\""+data[i].name+"\")'' type='button'>-</button> <input value='0' class='input' id='inp"+data[i].name+"' typr='text' readonly><button id='plus"+data[i].name+"' type='button' onclick='plus(\""+data[i].name+"\")''>+</button> </div>";

		}

    }
}
request.send();

function minu (name){
	var val=document.getElementById("inp"+name).value;
	if (val>0)
		{document.getElementById("inp"+name).value--;}
	else{
		alert("Value Ca not be < 0");
	}
}
function plus (name){
	document.getElementById("inp"+name).value++;
			
}

function order(){
	var values;
	var arrobj=[];
	 for (var i=0;i<data.length;i++)
		{
			values=document.getElementById("inp"+data[i].name).value;
			if(values>0)
			{
				data[i].number=values;
				data[i].totalprice=values*data[i].price;
				arrobj.push(data[i]);
			}
		}
	localStorage.setItem("Item", JSON.stringify(arrobj));
	window.location.href = "Bill.html";
}

function detail(key){

	localStorage.setItem("element", JSON.stringify(data[key]));
	window.location.href = "Details.html";
}