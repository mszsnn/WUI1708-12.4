jQuery(function ($) {
    let wdtbli=$(".headtop-you").find("li");
    let tbk=$("#wdtb");
    let wdscc=$("#wdsc");
    let swxx=$("#swx");
    let sjzcc=$("#sjzc");
    let wzdhh=$("#wzdh");

    wdtbli.eq(0).on('mouseover',function(){
        tbk.css('display',"block");
    })
    wdtbli.eq(0).on('mouseout',function(){
        tbk.css('display',"none");
    })
    wdtbli.eq(3).on('mouseover',function(){
        wdscc.css('display',"block");
    })
    wdtbli.eq(3).on('mouseout',function(){
        wdscc.css('display',"none");
    })
    wdtbli.eq(4).on('mouseover',function(){
        swxx.css('display',"block");
    })
    wdtbli.eq(4).on('mouseout',function(){
        swxx.css('display',"none");
    })
    wdtbli.eq(6).on('mouseover',function(){
        sjzcc.css('display',"block");
    })
    wdtbli.eq(6).on('mouseout',function(){
        sjzcc.css('display',"none");
    })
    wdtbli.eq(7).on('mouseover',function(){
        wzdhh.css('height',"180px");
        wzdhh.css('padding',"20px");
    })
    wdtbli.eq(7).on('mouseout',function(){
        wzdhh.css('height',"0px");
        wzdhh.css('padding',"0px");
    })


// =====================================
	let bannerr=$(".banner");
	let bgtu=$(".banner").find("li");
	let bgs=$(".bannerbj");
	let kuai=$(".banner-dian").find("li");
    // console.log(bannerr)


	let time=setInterval(fn, 3000);
	bannerr.on('mouseover',function(){
		clearInterval(time);
	})
	bannerr.on('mouseout',function(){
		time=setInterval(fn, 3000);
	})

	let num =0;

	function fn(){
		num++;
		if (num==bgtu.length) {
			num=0;
		}
		$.each(bgtu,function (index) {
            bgtu.eq(index).css('opacity','0');
            kuai.eq(index).css('background','');
        })

		bgtu.eq(num).css('opacity','1');
		kuai.eq(num).css('background','#fff');

        if (num==0) {
				bgs.css('background',"#E8E8E8");
			}
			else if (num==1) {
                bgs.css('background',"#E8E8E8");
			}
			else if (num==2) {
                bgs.css('background',"#FF2996");
			}
			else if (num==3) {
                bgs.css('background',"#FF5175");
			}
			else if (num==4) {
                bgs.css('background',"#FE3000");
			}
			else if (num==5) {
                bgs.css('background',"#FF4249");
			}
	}
	$.each(bgtu,function (index) {
        kuai.eq(index).on("click",function () {
            kuai.eq(num).css('background','');
            kuai.eq(index).css('background','#fff');
            bgtu.eq(num).css('opacity','0');
            bgtu.eq(index).css('opacity','1');
            num=index;
            if (num==0) {
                bgs.css('background',"#E8E8E8");
            }
            else if (num==1) {
                bgs.css('background',"#E8E8E8");
            }
            else if (num==2) {
                bgs.css('background',"#FF2996");
            }
            else if (num==3) {
                bgs.css('background',"#FF5175");
            }
            else if (num==4) {
                bgs.css('background',"#FE3000");
            }
            else if (num==5) {
                bgs.css('background',"#FF4249");
            }
        })
    })

// ======================================
 let lann=$(".aside").find("li");
 let muu=$(".lanmu");
 $.each(lann,function (index) {
     lann.eq(index).on('mouseover',function () {
         muu.eq(index).css("display","block")
     })
     lann.eq(index).on('mouseout',function () {
         muu.eq(index).css("display","none")
     })
 })



// ===================================================
let imgss=$(".xbox-hz2").find("img");
let jrfq=$(".xhz-zuo");
let lfz=$(".xhz-you");
let ztsp=$(".cswujiao").find("p");
jrfq.on('mouseover',function(){
	imgss.attr("src","img/jly.jpg");
	jrfq.css('background',"#00b262");
	lfz.css('background',"#f1f1f1");
	jrfq.css('color',"#fff");
	ztsp.html("<img src='img/cswujiaoxiaotu.png' alt=''> 丝蕴无硅水润");
})
lfz.on('mouseover',function(){
	imgss.attr("src","img/csxxy.jpg");
	lfz.css('background',"#00b262");
	jrfq.css('background',"#f1f1f1");
	jrfq.css('color',"#000");
	ztsp.html("<img src='img/cswujiaoxiaotu.png' alt=''> 福临门食用油");
})
// ==================================================================
//获取Top的框
    let tops = $(".top");
    let top2s = $("#top2");

    //点击返回顶部
    tops.on('click',function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    top2s.on('click',function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // 获取滚动条高度
    //某一个楼层距离BODY的高度 == scrollTop
    $(window).scroll (function () {
        let obj = $(window).scrollTop ? $(window) : $(document);
        let sTop = obj.scrollTop();  //滚动条高度
        //楼层跳转
        //获取楼层集合
        let lcs = $(".abb");
        //获取侧边楼层集合
        let cbl = $(".zuobian li");
        // 设置一个存储器
        let current = 0;
        //获取固定顶部
        let ding = $("#ding");
        //获取侧导航
        let cdh = $(".zuobian");
        if (obj.scrollTop() <= 1000)
        {
            $("#ding").css('height', "0px");
            $(".zuobian").css('width',"0");
            $(".zuobian").css('height',"0");
            $(".zuobian").css('display',"none");

        }
    else {
            $("#ding").css('height', "50px");
            $(".zuobian").css('width', "37px");
            $(".zuobian").css('height',"370px");
            $(".zuobian").css('display',"block");
        }
        /*$(".zuobian").animate({
            width: "37px",
            height: "370px",
            display: "block"
        }, 1000 );*/
        //楼层遍历
        $.each(lcs,function (index,f) {
            if (sTop >= f.offsetTop - 250) {
                $.each(cbl,function () {
                    $(this).css("background",'');
                })
                let arr = ["#FF0036", "#000", "#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#000", "#EA5F8D"]
                cbl.eq(index).css("background",`${arr[index]}`);
                current = index;
            }
        })

        //点击侧导航跳转

        //  遍历
        $.each(cbl,function (index) {
            cbl.on('click' ,function () {
                $('body,html').animate({scrollTop: lcs.eq($(this).index()).offset().top-100},1000);
                current=$(this).index();
                $(window).animate( {scrollTop: lcs.eq($(this).index).offset().top-100},1000);
            });
            //移入效果
            cbl.eq(index).on('mouseover', function () {
                let arr = ["#FF0036", "#000", "#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#000", "#EA5F8D"]
                $(this).css("background",`${arr[index]}`);
            });
            cbl.eq(index).on('mouseout' , function () {
                //判断存储器
                if (current != index) {
                    $(this).css("background",'');

                }
            })
        })


    });
})

































