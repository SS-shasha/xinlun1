function lunbo(){
		var container=document.getElementById("container");
		var banner=document.getElementById("banner");
		var li= document.querySelectorAll("#banner li");
		var spanNode=document.querySelectorAll("#buttons span");
		
		var prev=document.getElementById("prev1");
		var next=document.getElementById("next1");
		
		var index=1;
		
		var timer=0;
		
	    banner.style.left="-370px";
				
		function animate(offset){
	        banner.style.transition="0.5s";
	        banner.style.left= -parseInt(offset)*index + "px";
        }

        next.onclick = function(){
			
			if(index==spanNode.length){
				index=0;
				banner.style.transition="0s";
				banner.style.left="0px";
				
			}
	       index++;
	       console.log("索引index:"+index);
		   
	       animate(370);
		   
		   showButton();
        }
        prev.onclick = function(){
			if(index==1){
				index=li.length-1;
				banner.style.transition="0s";
				
				banner.style.left=-parseInt(370)*index + "px";}
			
	        index--;
	        
	       animate(370);
	        showButton();
        }
		
		function showButton(){
			for( var i=0; i<spanNode.length;i++){
				spanNode[i].className="";
			}
			console.log("小圆点的index值:"+index);
			spanNode[index-1].className="on";
		}
		
		function play(){
			timer=setInterval(function(){
				next.onclick();
			},1500);
			
		}
		play();
		container.onmouseover= function(){
			clearInterval(timer);
		}
		
		container.onmouseout= function(){
			play();
		}
		
		function ButtonImage(){
			for(var i=0; i<spanNode.length;i++){
				spanNode[i].onclick= function(){
					var myIndex=parseInt(this.getAttribute("index"));
					index = myIndex;
			
	                animate(370);
					showButton();
				}
			}
		}
		ButtonImage();
}	
	
	
	function lunbo1(){
		var container=document.getElementById("container1");
		var banner=document.getElementById("banner1");
		var li= document.querySelectorAll("#banner1 li");
		var spanNode=document.querySelectorAll("#buttons1 span");
		
		var prev=document.getElementById("prev2");
		var next=document.getElementById("next2");
		
		var index=1;
		
		var timer=0;
		
		banner.style.left="-280px";
		
		function animate(offset){
	        banner.style.transition="0.5s";
	        banner.style.left= -parseInt(offset)*index + "px";
        }

        next.onclick = function(){
			
			if(index==spanNode.length){
				index=0;
				banner.style.transition="0s";
				banner.style.left="0px";
				
			}
	       index++;
	       console.log("索引index:"+index);
	       animate(280);
		   
		   //showButton();
        }
        prev.onclick = function(){
			if(index==1){
				index=li.length-1;
				banner.style.transition="0s";
				banner.style.left=-parseInt(280)*index + "px";;
			}
	        index--;
	        animate(280);
	        showButton();
        }
		
		function showButton(){
			for( var i=0; i<spanNode.length;i++){
				spanNode[i].className="";
			}
			console.log("小圆点的index值:"+index);
			spanNode[index-1].className="on";
		}
		
		function play(){
			timer=setInterval(function(){
				next.onclick();
			},1500);
			
		}
		play();
		container.onmouseover= function(){
			clearInterval(timer);
		}
		
		container.onmouseout= function(){
			play();
		}
		
		function ButtonImage(){
			for(var i=0; i<spanNode.length;i++){
				spanNode[i].onclick= function(){
					var myIndex=parseInt(this.getAttribute("index"));
					index = myIndex;
					animate(280);
					showButton();
				}
			}
		}
		ButtonImage();
}// JavaScript Document

function highlightPage(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	var nav1=document.getElementById("nav1");
	var links=nav1.getElementsByTagName("a");
	var linkurl;
	for(var i=0;i<links.length;i++){
		linkurl=links[i].getAttribute("href");
		if(window.location.href.indexOf(linkurl)!=-1){
			links[i].className="here";
		}
	}
}
	

addLoadEvent(lunbo1());
addLoadEvent(lunbo());
addLoadEvent(highlightPage());

