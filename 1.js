	function Tab(id){
	
		this.box = document.getElementById(id);
		this.div = this.box.getElementsByTagName('div');
		this.btn = this.box.getElementsByTagName('input');
	}
	
	Tab.prototype.clicks = function(){
		var _this = this;
		for(var i=0;i<this.btn.length;i++){
			this.btn[i].index = i;
			this.btn[i].addEventListener('click',function(){
				_this.clear(this.index);				
			});
		}
	}
	Tab.prototype.clear = function(index){
		for(var i=0;i<this.btn.length;i++){
			this.btn[i].className = '';
			this.div[i].className = '';
		}
		this.btn[index].className = 'active';
		this.div[index].className = 'show';
	}
