
//需要实现的是 观察者模式和事件绑定 及 bind
//以上需要手动实现
window.onload = function(){ 

     var oUl = document.getElementsByTagName("ul")[0];
     var on = document.getElementById("on");
	 var off = document.getElementById("off");
	 var sub = document.getElementById("sub");
	 var canSub = document.getElementById("cancelSub");
	 var trigger = document.getElementById("trigger");
	 var once = document.getElementById("once");
	 
	 function handler(e){ 
	    console.log(e.srcElement.nodeName);
	 }
	 
	 on.onclick = function(){ 
	    oUl.addEventListener("click", handler);
	 }
	 
	 off.onclick = function(){ 
	    oUl.removeEventListener("click", handler);   
	 }
	 
	 
	 trigger.onclick = function(){ 
	     pub("haha"); 
	 }
	 
	 sub.onclick = function(){ 
	     Sub("haha",Create);
	     Sub("haha",Create);
	 }
	 
	 canSub.onclick = function(){ 
	     disSub("haha");
	 }
	 
	 //定义一个事件管理的对象
	 var EventManage = {
          //定义成数组的目的是为了绑定多个相同的事件		 
	      handler:[]
	 } 
	 
	 //订阅
     function Sub(fnName,handler){ 
	      var obj = {};
		  //这样写是变量方式 但是 var obj = {fnName:handler}的话 就把fnName当成key了,而不是变量fnName;
		  obj[fnName] = handler;
		  //把事件对象放进事件管理对象中
		  EventManage.handler.push(obj);
	 }
	 
	 //取消订阅
	 function disSub(fnName){ 
	    for(var i=0;i<EventManage.handler.length;i++){ 
		    for(var j in EventManage.handler[i]){
				if(j == fnName){ 
				   EventManage.handler[i][j] = undefined;
				}
			}
		}   
	 }
	 
	 
	 //发布
	 function pub(fnName){ 
	    for(var i=0;i<EventManage.handler.length;i++){ 
		    for(var j in EventManage.handler[i]){
				if(j == fnName){ 
				   var fn = EventManage.handler[i][j];
				   //因为fn可能是null 所以先判断一下这个函数是否存在
				   //如果存在就执行
				   fn && fn();
				}
			}
		}
	 };
	 
	 //只执行一次 
	 window.once = function(fnName){ 
	      pub(fnName);		 
		  //删除队列 
	      EventManage.handler = [];
	 }
	 
	 //需要执行的函数
	 function Create(){ 
	     alert(123123);
	 }
}




