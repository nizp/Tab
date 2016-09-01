document.addEventListener('DOMContentLoaded',fn);
function fn(){
	function Tab(){
		this.div = document.getElementsByTagName('div');
		this.btn = document.getElementsByTagName('input');
	}
	
	Tab.prototype.clicks = function(){
		for(var i=0;i<this.btn.length;i++){
			this.btn[i].addEventListener('click',function(){
								
			});
		}
	}
	
}
