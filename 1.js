	function Tab(id){
	
		this.box = document.getElementById(id);
		this.div = this.box.getElementsByTagName('div');
		this.btn = this.box.getElementsByTagName('input');
		this.num = 0;
		this.timer = 0;
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
	Tab.prototype.play = function(){
		var _this = this;
		this.timer = setInterval(function(){
			_this.num++;
			_this.num %= _this.btn.length;
			_this.clear(_this.num);
		},1000);
	}
	
	
