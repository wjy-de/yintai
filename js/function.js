// getClass(classname，range) 获取指定类名的元素
// classname是你指定要获取元素的classname
// range 指定的范围  是一个具体的对象
// 思路：
// 1、判断浏览器是否支持
      // document.getElementsByClassName
// 2、获取所有的元素
// 3、元素的类名是否等于指定的类名
// 4、符合条件用数组来存储。
// 5、返回数组
function getclass(classname,range){
  range=range||document;
  // 三元表达式的方法
  // range=range?range:document;
  // range=range==undefined?document:range;
	if (document.getElementsByClassName) {
        // w3c使用
        return range.getElementsByClassName(classname);
	}
	else{
       var a=range.getElementsByTagName('*');
       var arr=[];
       for (var i =0; i<a.length; i++) {
        // 当前元素的className中是否包含指定的类名
       	if (checkclass(a[i].className,classname)) {
       	arr.push(a[i]);
       }
   }
   return arr;
	}
}
function checkclass(classStr,classname){
  var arr=classStr.split(" ");
   for (var i = 0; i <arr.length; i++) {
       if (arr[i]==classname) {
        return true;
       }
   }
   return false;
}

// $函数
// 1、初始化范围
// 2、selecter去空   标签名
// 3、判断第一个字符
// 4、获取元素
function $(selecter,range){
  if(typeof selecter=="function"){
    window.onload=function(){
      selecter();
    }
  }else if(typeof selecter=="string"){
    range=range?range:document;
  // selecter=selecter.trim();
  if (selecter.charAt(0)==".") {
    return getclass(selecter.substring(1),range);
  }
  else if (selecter.charAt(0)=="#") {
    return range.getElementById(selecter.substring(1))
  }
  else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
    return range.getElementsByTagName(selecter);
  }else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(selecter)){//创建元素
    return document.createElement(selecter.slice(1,-1));
  }

  }
}
//设置或者获取文本
// getContent(obj,value)
// obj指定对象 value 设置的文本
// 1、判断获取与设置
//       参数个数
//       value
// 2、获取
//      判断浏览器是否支持属性
  //      return obj.innerText
  //      return obj.textContent 
// 3、设置
//    判断浏览器是否支持属性
//        IE obj.innerText=value
//        w3c obj.textContent=value;
function getContent(obj,value){
  if (value) {
        if (obj.innerText) {
             obj.innerText=value;
        }
        else{
              obj.textContent=value;
        }
  }
  else{
       if (obj.innerText) {
            return obj.innerText;
        }
        else{
            return obj.textContent;
        }
  }
}

// getStyle(obj,attr) 获取指定元素的样式
  // obj指定对象 attr样式属性
  // 1、判断浏览器是否支持
  // 2、返回属性值
function getStyle(obj,attr){
  if (window.getComputedStyle) {
    return getComputedStyle(obj,null)[attr];
  }
   else {
    return obj.currentStyle[attr];
   }
}


/*getChilds(obj,type) 获取指定对象的子元素集合
obj指定的对象
获取子元素节点的类型
true 获取的是元素节点 
false 获取元素节点和有意义的文本
1、先获取所有子元素
2、节点类型1*/
function getChilds(obj,type){
  type=type==undefined?true:type;
  var childs=obj.childNodes;
  var arr=[];
  if(type){
    for (var i=0;i<childs.length;i++) {
      if (childs[i].nodeType==1) {
        arr.push(childs[i]);
      }
    }
  }else{
  for (var i = 0; i<childs.length; i++) {
    if (childs[i].nodeType==1||childs[i].nodeType==3&&
      childs[i].nodeValue.replace(/^\s*|\s*$/g,"")) {
      arr.push(childs[i]);
    }
  }
}
  return arr; 
}
//找到第一个元素
function firstChild(obj){
  return getChilds(obj)[0];
}

//找到最后一个元素
function lastChild(obj){
  var nd=getChilds(obj)
  return nd[nd.lenght-1];
}

//找到随机一个元素  i表示要找的第几个
function randomChild(obj,i){
  var nd=getChilds(obj)
  var n=nd.length;
  if(i>0&&i<n){
    return nd[i];
  }
}

/*获得对象下一个元素节点 now表示当前对象
1.获取下一个兄弟节点，没有  false
2.有  
   判断nodeType  ！=1
    next=next.nextSibling
    next==null  false  
    重复步骤2
    nodeType==1
    return next
*/
function getNext(now,type){
  var nextN=now.nextSibling;//(初始化)获得下一个兄弟节点
  if(nextN==null){
    return false;
  }else{
    while(nextN.nodeType!==1){
      nextN=nextN.nextSibling;
      if(nextN==null){
        return false;
      }
    }
    return nextN;
  }
}




/*
  getNextE(now)
  获取下一个有意义的节点
*/
// function getNextE(now,type){
//   var nextN=now.nextSibling;//(初始化)获得下一个兄弟节点
//   if(type)
//   if(nextN==null){
//     return false;
//   }else{
//     while(!getChilds(nextN)){
//       nextN=nextN.nextSbiling;
//       if(nextN==null){
//         return false;
//       }
//     }
//     return nextN;
//   }
// }


//获得对象上一个兄弟对象 now表示当前对象

function getPrevious(now){
  var previousN=now.previousSibling;//获得上一个兄弟节点
  if(previousN==null){
    return ;
  }else{
    while(previousN.nodeType!==1){
      previousN=previousN.previousSibling;
      if(previousN==null){
        return ;
      }
    }
    return previousN;
  }
}


/*
  insertAfter(newobj,obj,type)
  将new插入到obj后面
  newobj 要插入的元素
  obj 插入位置
  type 类型
       true 元素节点
       false 元素节点和有意义的文本
  1.获取obj的下一个兄弟元素  next
  2.获取obj的父元素 parent
  3.next false
         parent.appendChild(newobj)
  4.parent.insertBefore(newobj,next)
*/
function insertAfter(newobj,obj,type){
  type=type==undefined?true:type;
  var next=getNext(newobj);//获得下一个兄弟节点
  var parent=newobj.parentNode;
  if(type){
    if(next.nodeType==1){
     return parent.insertBefore(obj,next);
    }else{
      return parent.appendChild(obj);
    }
  }else{
    if(next.nodeType==1||next.nodeType==3&&
      next.nodeValue.replace(/^\s*|\s*$/g,"")){
        return parent.insertBefore(obj,next);
    }else{
      return parent.appendChild(obj);
    }
  }
  
}


/*
  事件兼容函数
  obj  对象
  event  事件
  fun  处理程序
*/
function addEvent(obj,event,fun,type){
  if(obj.attachEvent){
    obj.attachEvent("on"+event,fun);
  }else{
    obj.addEventListener(event,fun,type);
  }
}

function delEvent(obj,event,fun){
  if(obj.detachEvent){
    obj.detachEvent("on"+event,fun);
  }else{
    obj.removeEventListener(event,fun,false);
  }
}


/*
  mouseWheel   鼠标滚轮滚动事件兼容性函数
  obj  添加mousewheel事件的对象
  up   向上滚动时的处理程序
  down 向下滚动时的处理程序
  1、辨别浏览器
     obj.attachEvent 
              true  添加滚轮事件(ie浏览器)
              flase  添加滚轮事件 （火狐  谷歌）
  2、scrollFun  事件处理程序 up down
      num==120||num==-3,向上滚
      num==-120||num==3,向下滚
*/
function mouseWheel(obj,up,down){
  if(obj.attachEvent){
    obj.attachEvent("onmousewheel",scrollFun);
  }else{
    obj.addEventListener("onmousewheel",scrollFun,false);
    obj.addEventListener("DOMMouseScroll",scrollFun,false);
  }
  function scrollFun(e){
    var e=e||window.event;
    if(e.preventDefault){   //清除浏览器默认动作
      e.preventDefault();
    }else{
      e.returnValue=false;
    }
    var num=e.wheelDelta||e.detail;
    if(num==120||num==-3){
      up.call(obj);   //改变this指针，让this指针指向obj
    }else if(num==-120||num==3){
      down.call(obj);
    }
  }
}




//15.hover
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
  if(parent.contains){
    return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
  if(getEvent(e).type=="mouseover"){
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
  }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
  }
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
  if(overfun){
    obj.onmouseover=function  (e) {
      if(checkHover(e,obj)){
        overfun.call(obj,[e]);
      }
    }
  }
  if(outfun){
    obj.onmouseout=function  (e) {
      if(checkHover(e,obj)){
        outfun.call(obj,[e]);
      }
    }
  }
}
function getEvent (e) {
  return e||window.event;
}
