window.onload=function(){
	var images=$(".background2");
	var images1=$(".background1")
	var lists=$(".lis");
	var imageBox=$(".fiveBanner")[0];
	var btnL=$(".btnL");
	var btnR=$(".btnR");
	//console.log(imageBox)
    //animate(images[0],{opacity:1})
    images[0].style.opacity=1;
    images1[0].style.opacity=1;
    //animate(images1[0],{opacity:1})
    lists[0].classList.add("hot");//注意hot优先级
	//banner轮播图
	var now=0;
    var t=setInterval(move,2000);
    function move(){
      now++;
      if(now==images.length){
        now=0;
      }
      for(var i=0;i<images.length;i++){
        //images[i].style.zIndex=5;
        animate(images[i],{opacity:0});
        animate(images1[i],{opacity:0});
        lists[i].classList.remove("hot");
      }
      lists[now].classList.add("hot");
      //images[now].style.zIndex=10;
      animate(images[now],{opacity:1});
      animate(images1[now],{opacity:1});
    }
     
    function move1(){
      now--;
      if(now<0){
        now=images.length-1;
      }
      for(var i=0;i<images.length;i++){
        //images[i].style.zIndex=5;
        animate(images[i],{opacity:0});
        animate(images1[i],{opacity:0});
        lists[i].classList.remove("hot");
      }
      lists[now].classList.add("hot");
      //images[now].style.zIndex=10;
      animate(images[now],{opacity:1});
      animate(images1[now],{opacity:1});
    }



    imageBox.onmouseover=function(){
      clearInterval(t);
    }
    imageBox.onmouseout=function(){
      t=setInterval(move,2000);
    }
    
    for(var i=0;i<lists.length;i++){
      lists[i].index=i;
      lists[i].onmouseover=function(){
        for(var i=0;i<lists.length;i++){
          //images[i].style.zIndex=5;
          animate(images[i],{opacity:0});
          animate(images1[i],{opacity:0});
          lists[i].className="lis";
        }
        lists[this.index].classList.add("hot");
        //images[this.index].style.zIndex=10;
        animate(images[this.index],{opacity:1});
        animate(images1[this.index],{opacity:1});

        now=this.index;
      }
    }

     btnR.onclick=function(){
       move();
    }
    
    btnL.onclick=function(){
      move1();
    }



/*
  银泰下面轮播图
*/
  // var fashion-contentCBox=$(".fashion-contentCBox")[0];//图片盒子
  // var imgs=$(".imgs");
  // var fashionLunbotu=$(".list",$(".fashionLunbotu"));//轮播图按钮
  
  // imgs[0].style.opacity=1;
  // var nowf=0;
  //   var tf=setInterval(movef,2000);
  //   function movef(){
  //     nowf++;
  //     if(nowf==imgs.length){
  //       nowf=0;
  //     }
  //     for(var i=0;i<imgs.length;i++){
  //       //images[i].style.zIndex=5;
  //       animate(imgs[i],{opacity:0});
  //       //lists[i].classList.remove("hot");
  //     }
  //     //lists[now].classList.add("hot");
  //     animate(imgs[nowf],{opacity:1});
  //   }



}