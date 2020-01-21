Function.prototype.next = function(fn){
	var context = this;
	if(Object.prototype.toString.call(context) !== '[object Function]'){
		throw 'need a function context';
	}
	return function(){
		var r = context.apply(this,arguments);
		if(r === 'next'){
			return fn.apply(this,arguments);
		}
		return r
	}
}
Function.prototype.end = function(){
	var context = this;
	if(Object.prototype.toString.call(context) !== '[object Function]'){
		throw 'need a function context';
	}
	return context && (context() == 'next') ? true : false
}
/*function text(){
	var r = a.next(b).next(c).end();
	//r:true
}
function a(){
	return 'next'
}
function b(){
	return 'next'
}
function c(){
	return
}*/