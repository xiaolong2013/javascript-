
//需要实现的是 观察者模式和事件绑定 及 bind
//以上需要手动实现
window.onload = function(){ 

     var oUl = document.getElementsByTagName("ul")[0];
     var on = document.getElementById("on");
	 var off = document.getElementById("off");
	 
	 function handler(e){ 
	    console.log(e.srcElement.nodeName);
	 }
	 
	 on.onclick = function(){ 
	    oUl.addEventListener("click", handler);
	 }
	 
	 off.onclick = function(){ 
	    oUl.removeEventListener("click", handler);   
	 }
	 
     var EventManage = { 
	     handler:{}
	 } 
	 
     function Sub(fnName,handler){ 
	    EventManage.handler[fnName] = handler;  
	 }
	 
	 function pub(fnName){ 
	    for(var i in EventManage.handler){ 
		    if(i == fnName){ 
			    EventManage.handler[i]();
			}
		}
	 };
	 
	 function Create(){ 
	     alert(123123);
	 }
	 
	 Sub("haha",Create);
	 
	 pub("haha");
}




