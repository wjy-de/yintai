$(document).ready(function(){
	/*导航选项卡*/
	$(".oneL li").eq(0).on({
		mouseover:function(){
		$(".img1").css("background-position-y","-27px")
		},
		mouseout:function(){
		$(".img1").css("background-position-y","0px")
		}
	})
	$(".oneL li").eq(2).on({
		mouseover:function(){
		$(".tu1").show();
		$(this).nextAll().css("z-index","0");
		$(".img2").css("background-position-y","-87px")
		$(".j1").css("background-position-y","-128px")
		},
		mouseout:function(){
		$(".tu1").hide()
		$(this).nextAll().css("z-index","100");
		$(".img2").css("background-position-y","-57px")
		$(".j1").css("background-position-y","-111px")
		}
	})
    $(".oneL li").eq(4).on({
    	mouseover:function(){
    	$(".tu2").show()
    	$(".img3").css("background-position-y","-20px")
    	$(".j2").css("background-position-y","-128px")
    	},
    	mouseout:function(){
    	$(".tu2").hide()
    	$(".img3").css("background-position-y","1px")
    	$(".j2").css("background-position-y","-111px")
    	}
    })
	$(".yin").on({
		mouseover:function(){
		$(".tu3").show();
		$(".j3").css("background-position-y","-128px")
		},
		mouseout:function(){
		$(".tu3").hide();
		$(".j3").css("background-position-y","-111px")
		}
	})
/*导航选项卡*/

/*购物车选项卡*/
	$(".three4").on({
		mouseover:function(){$(".three-xxk").show()},
		mouseout:function(){$(".three-xxk").hide()}
	})
/*购物车选项卡*/

/*banner下面选项卡*/
	
	$(".sixLB").eq(0).css("display","block");
	$(".six .spand").eq(0).css("display","block");
    $(".sixLTl").eq(0).css("border-bottom","5px solid #e5004f");
    $(".sixLTl").each(function(index,obj){
    	$(this).on("mouseover",function(){
    		$(".sixLB").each(function(index1,obj1){
    			$(this).css("display","none");
    		})
    		$(".six .spand").each(function(index2,obj1){
    			$(this).css("display","none");
    		})
    		$(".sixLTl").each(function(index2,obj1){
    			$(this).css("borderBottom","5px solid #333");
    		})
    		$(".sixLB").eq(index).css("display","block");
    		$(".six .spand").eq(index).css("display","block");
    		$(".sixLTl").eq(index).css("borderBottom","5px solid #e5004f");
    	})
    })
 /*banner下面选项卡*/

/*银泰百货选项卡*/
	$(".sevenContent").find(".spand").eq(0).css("display","block");
	$(".sevenBox").eq(0).css("display","block");
	$(".sevenContentRTL").eq(0).css({"height":"35px","borderBottom":"3px solid #e5004f"})
	$(".sevenContentRTL").eq(1).css({"height":"35px","borderBottom":"3px solid #000"})
	$(".sevenContentRTL").each(function(index,obj){
		$(this).on("mouseover",function(){
			$(".sevenContent").find(".spand").each(function(index1,obj1){
				$(this).css("display","none");
			})
			$(".sevenContentRTL").each(function(index2,obj2){
				$(this).css({"height":"35px","borderBottom":"3px solid #000"});
			})
			$(".sevenBox").each(function(index3,obj3){
				$(this).css("display","none");
			})
			$(".sevenBox").eq(index).css("display","block");
			$(".sevenContent").find(".spand").eq(index).css("display","block");
			$(this).css({"height":"35px","borderBottom":"3px solid #e5004f"})
		})
	})
/*银泰百货选项卡*/

/*banner轮波图*/
    $(".background2").eq(0).css("opacity","1");
    $(".background1").eq(0).css("opacity","1");
    $(".lis").eq(0).addClass("hot");//注意hot优先级
 	var now=0;
	var t=setInterval(move,2000);
	var index=$(".background2").index();
	var flagB=true;
	function move(){
		now++;
		if(now==$(".background2").length){
			now=0;
		}
		$(".background2").each(function(index,obj){$(this).css("opacity","0")})
		$(".background1").each(function(index,obj){$(this).css("opacity","0")})
		$(".lis").each(function(index,obj){$(this).removeClass("hot")})
		animate($(".background2")[now],{"opacity":"1"},function(){flagB=true;});
		animate($(".background1")[now],{"opacity":"1"},function(){flagB=true;});
      	$(".lis").eq(now).addClass("hot");
	}  
	function move1(){
		now--;
		if(now<0){
			now=$(".background2").length-1;
		}
		$(".background2").each(function(index,obj){$(this).css("opacity","0")})
		$(".background1").each(function(index,obj){$(this).css("opacity","0")})
		$(".lis").each(function(index,obj){$(this).removeClass("hot")})
		animate($(".background2")[now],{"opacity":"1"},function(){flagB=true;});
		animate($(".background1")[now],{"opacity":"1"},function(){flagB=true;});
      	$(".lis").eq(now).addClass("hot");
	} 
	$(".fiveBanner").on({
		mouseover:function(){
			clearInterval(t);
			$(".btnL").css("left",210)
			$(".btnR").css("right",207)
		},
		mouseout:function(){
			t=setInterval(move,2000);
			$(".btnL").css("left",180)
			$(".btnR").css("right",177)
		}
	})
	$(".lis").each(function(index,obj){
		$(this).on("mouseover click",function(){
			var index_lis=$(this).index();
			$(".background2").each(function(index,obj){$(this).css("opacity","0")})
			$(".background1").each(function(index,obj){$(this).css("opacity","0")})
			$(".lis").each(function(index,obj){$(this).removeClass("hot")})
			animate($(".background2")[index_lis],{"opacity":"1"});
			animate($(".background1")[index_lis],{"opacity":"1"});
	      	$(".lis").eq(index_lis).addClass("hot");
		})
		
	})

    $(".btnL").click(function(){
    	if(flagB){
    		move1();
    		flagB=false;
    	}
       
    })
	$(".btnR").click(function(){
		if(flagB){
			move();
			flagB=false;
		}
       
    })

/*banner轮波图*/

/*下面轮播图*/
	$(".fashion-contentC").each(function(index,obj){
		if(index!=1||index!=2||index!=8){
			var imgs=$(this).find(".imgs");
			var fashionLunbotu=$(this).find(".list");
			var nowf=0;//开始图片的下标
			var nextf=0;//后面图片的下标
			var fw=$(this).width();
			var btnLB=$(this).find(".btnLB");
			var btnRB=$(this).find(".btnRB");
			imgs.each(function(index1,obj1){
				if(index1!=0){
					$(this).css("left",fw+'px');
				}
			})
			fashionLunbotu.eq(0).addClass("flun");
			var flag=true;
			function moveFs(){
			  nextf++;
			  if(nextf==imgs.length){
			    nextf=0;
			  }
			  imgs.eq(nextf).css("left",fw+'px');
			  imgs.eq(nowf).animate({left:-fw});
			  imgs.eq(nextf).animate({left:0},function(){
			  	flag=true;
			  });
			  fashionLunbotu.eq(nowf).removeClass("flun");
			  fashionLunbotu.eq(nextf).addClass("flun");
			  nowf=nextf;
			}
			function moveFsL(){
			  nextf--;
			  if(nextf<0){
			    nextf=imgs.length-1;
			  }
			  imgs.eq(nextf).css("left",-fw+'px');
			  imgs.eq(nowf).animate({left:fw});
			  imgs.eq(nextf).animate({left:0},function(){
			  	flag=true;
			  });
			  fashionLunbotu.eq(nowf).removeClass("flun");
			  fashionLunbotu.eq(nextf).addClass("flun");
			  nowf=nextf;
			}
			$(this).on({
				mouseover:function(){
					btnLB.css("left",0);
					btnRB.css("right",0);
				},
				mouseout:function(){
					btnLB.css("left","-30px");
					btnRB.css("right","-30px");
				}
			})
			fashionLunbotu.each(function(index2,obj2){
				$(this).on("click",function(){
					if(nowf>index2){
						imgs.eq(index2).css("left",fw+'px');
						imgs.eq(nowf).animate({left:-fw});
						imgs.eq(index2).animate({left:0});
					}else if(nowf<index2){
						imgs.eq(index2).css("left",-fw+'px');
						imgs.eq(nowf).animate({left:fw});
						imgs.eq(index2).animate({left:0});
					}
					fashionLunbotu.eq(nowf).removeClass("flun");
			  		fashionLunbotu.eq(index2).addClass("flun");
			  		nowf=index2;
			  		nextf=nowf;
				})
			})
			btnLB.click(function(){
				if(flag){
					moveFsL();
					flag=false;
				}	
			})
			btnRB.click(function(){
				if(flag){
					moveFs();
					flag=false;
				}
				
			})
		}	
	})
/*下面轮播图*/

/*banner左边选项卡*/
	$(".fiveBannerL .fiveBannerList").on({
		mouseover:function(){
			$(this).children(".bLTab").show();
			$(this).children(".a1").css("background-position-y","-128px")
		},
		mouseout:function(){
			$(this).children(".bLTab").hide()
			$(this).children(".a1").css("background-position-y","-110px")
		}
	})
/*banner左边选项卡*/

/*下左轮播图*/
	$(".fBox").each(function(index,obj){
		var fashionLBox=$(this).find(".fashionLBox");
		var fashion1s=$(this).find(".fashion1");
		var fashion2s=$(this).find(".fashion2");
		var fashionLImgs=$(this).find(".fashionLImg");
		var nowfs=0;
		var nextfs=0;
		var wfs=fashionLImgs.eq(0).width();
		fashionLImgs.each(function(index1,obj1){
			if(index1!=0){
				$(this).css("left",wfs+'px');
			}
		})
		var flag=true;
		function moveFR(){
		  nextfs++;
		  if(nextfs==fashionLImgs.length){
		    nextfs=0;
		  }	  
		  fashionLImgs.eq(nextfs).css("left",wfs+'px');
		  fashionLImgs.eq(nowfs).animate({left:-wfs})
		  fashionLImgs.eq(nextfs).animate({left:0},function(){
		  	flag=true;
		  })
		  nowfs=nextfs;
		}
		function moveFL(){
		  nextfs--;
		  if(nextfs<0){
		    nextfs=fashionLImgs.length-1;
		  }
		  fashionLImgs.eq(nextfs).css("left",-wfs+'px');
		  fashionLImgs.eq(nowfs).animate({left:wfs})
		  fashionLImgs.eq(nextfs).animate({left:0},function(){
		  	flag=true;
		  })
		  nowfs=nextfs;
		}
		fashion1s.click(function(){
			if(flag){
				moveFL();
				flag=false;
			}
		})
		fashion2s.click(function(){
			if(flag){
				moveFR();
				flag=false;
			}
		})
	})

	/*框*/
	$(".border-box").each(function(index,obj){
		var border_left=$(".border-left",$(this))[0];
		var border_right=$(".border-right",$(this))[0];
		var border_top=$(".border-top",$(this))[0];
		var border_bottom=$(".border-bottom",$(this))[0];
	$(this).on({
			mouseover:function(){
				animate(border_left,{height:$(this).height()},300);
				animate(border_right,{height:$(this).height()},300);
				animate(border_top,{width:$(this).width()},300);
				animate(border_bottom,{width:$(this).width()},300);
			},
		    mouseout:function(){
				animate(border_left,{height:0},300);
				animate(border_right,{height:0},300);
				animate(border_top,{width:0},300);
				animate(border_bottom,{width:0},300);
		    }
	    })
	})
	/*框*/


	/*固定定位*/
	var floor=$(".fashion");
	var floor_nav=$(".fix");
	var nav_lilsts=$(".fixBox",floor_nav);
	var as1=$(".fixBox-a1",floor_nav);
	var as2=$(".fixBox-a2",floor_nav);
	// var nowFix;
	var floor_flag=true;
	floor.each(function(index,obj1){
		if(floor_flag){
			$(window).scroll(function(){
			var top=$(document).scrollTop();
			if(top>=floor.eq(0).offset().top-1000){
		        floor_nav.show();
		      }else if(top<floor.eq(0).offset().top-300){
		        floor_nav.hide();
		      }
	    
	      	if(top>floor.eq(index).offset().top-100){
		        nav_lilsts.each(function(index2,obj2){
		        	as1.eq(index2).css("display","block");
		          	as2.eq(index2).css("display","none");
		        })
		        as1.eq(index).css("display","none");
		        as2.eq(index).css("display","block");
		        as2.eq(index).css("background","#c81623");
		        // nowFix=index;
		    }    
	   }) 
		}
			   
	})
	nav_lilsts.each(function(index3,obj3){
		$(this).click(function(e){
			floor_flag=false;
			if(index3!=9){
				$("body,html").animate({scrollTop:floor.eq(index3).offset().top},400,function(){floor_flag=true;})
			}else{
				$("body,html").animate({scrollTop:0},400,function(){floor_flag=true;})
			}

			$(this).css("background","#C81623");
			// nowFix=$(this).index();
		})
		
		$(this).on({
			mouseover:function(){
				as1.eq(index3).css("display","none");
		        as2.eq(index3).css("display","block");
		        as2.eq(index3).css("background","#c81623");
		        nowFix=$(this).index();
			},
			mouseout:function(){
				as1.eq(index3).css("display","block");
		        as2.eq(index3).css("display","none");
	//	        as2.eq(index3).css("background","#c81623");
			}
		})
	})
	/*固定定位*/

	/*图片懒加载*/
	$(".lazy").lazyload({
			effect:"fadeIn",
			skip_invisible:false
		})

	/*图片懒加载*/

})