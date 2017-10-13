/*
* @Author: 宏达
* @Date:   2017-10-13 09:48:44
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-13 17:40:09
*/
// 一种是给通过$创建出来的jQuery对象new aa(即原型对象)加方法，一种是给$构造函数本身加方法的。
// function $(slelect){
// 	return new aa(select);
// }
// $.isArray=function(){}
// function aa(select){
// 	if(typeof select =='string'){
// 		let reg=/^<[a-z][a-z1-6]{0-10}>$/;
// 		if(reg.test(select)){
// 			this[0]=document.createElement(select.slice(1,-1));
// 			this.length=1;
// 		}else{
// 			let sel=document.querySelectorAll(select);
// 	        for(let i=0;i<sel.length;i++){
//                 this[i]=sel[i];
// 	        }
// 	        this.length=sel.length;
// 		}	    
// 	}else if(typeof select =='function'){
//         document.addEventListener('DOMContentLoaded', function(){
//         	select();
//         },false);
// 	}else if(typeof select =='object'&& select.nodeType==1){
// 		this[0]=select;
// 		this.length=1;
// 	}
// }
// aa.prototype.css=function(attrObj){
//     this.each(function(index,obj){
//     	for(let j in attrObj){
//             obj.style[j]=attrObj[j];
//     	}
// 	})
// 	return this;
// }
// aa.prototype.html=function(value){
// 	this.each(function(index,obj){
// 		obj.innerHTML=value;
// 	})
// 	return this;
// }
// aa.prototype.each=function(callback){
// 	for(let i=0;i<this.length;i++){
// 		callback(i,this[i]);
// 	}
// }
// aa.prototype.click=function(callback){
// 	this.each(function(index,obj){
// 		obj.onclick=function(){
// 			callback.call(obj);
// 		}
// 	})
// 	return this;
// }
// aa.prototype.mouseout=function(callback){
// 	this.each(function(index,obj){
// 		obj.onmouseout=function(){
// 			callback.call(obj);
// 		}
// 	})
// 	return this;
// }
// aa.prototype.addClass=function(classes){
//     this.each(function(index,obj){
//     	obj.classList.add(classes);
//     })
//     return this;
// }
// aa.prototype.appendTo=function(selector){
//     let parents=document.querySelectorAll(selector);
//     let element=this[0];
//     this.length=parents.length;
//     for(let i=0;i<parents.length;i++){
//     	let copy=element.cloneNode(true);
//     	this[i]=copy;
//     	parents[i].appendChild(copy);
//     }
//     return this;
// }