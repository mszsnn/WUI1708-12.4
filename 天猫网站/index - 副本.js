
window.onload=function(){

	let wdtbb=document.getElementsByClassName("headtop-you")[0];
	let wdtbli=wdtbb.getElementsByTagName("li");
	let tbk=document.getElementById("wdtb");
	let wdscc=document.getElementById("wdsc");
	let swxx=document.getElementById("swx");
	let sjzcc=document.getElementById("sjzc");
	let wzdhh=document.getElementById("wzdh");

	wdtbli[0].onmouseover=function(){
		tbk.style.display="block";
	}
	wdtbli[0].onmouseout=function(){
		tbk.style.display="none";
	}

	wdtbli[3].onmouseover=function(){
		wdscc.style.display="block";
	}
	wdtbli[3].onmouseout=function(){
		wdscc.style.display="none";
	}

	wdtbli[4].onmouseover=function(){
		swxx.style.display="block";
	}
	wdtbli[4].onmouseout=function(){
		swxx.style.display="none";
	}

	wdtbli[6].onmouseover=function(){
		sjzcc.style.display="block";
	}
	wdtbli[6].onmouseout=function(){
		sjzcc.style.display="none";
	}

	wdtbli[7].onmouseover=function(){
		// wzdhh.style.opacity="1";
		wzdhh.style.height="180px";
		wzdhh.style.padding="20px";

	}
	wdtbli[7].onmouseout=function(){
		// wzdhh.style.opacity="0";
		wzdhh.style.height="0px";
		wzdhh.style.padding="0px";
	}

// =====================================
	let bannerr=document.getElementsByClassName("banner")[0];
	let bgtu=bannerr.getElementsByTagName("li");
	let bgs=document.getElementsByClassName("bannerbj")[0];
	let fang=document.getElementsByClassName("banner-dian")[0];
	let kuai=fang.getElementsByTagName("li");


	let time=setInterval(fn, 3000);
	bannerr.onmouseover=function(){
		clearInterval(time);
	}
	bannerr.onmouseout=function(){
		time=setInterval(fn, 3000);
	}

	let num =0;

	function fn(){
		num++;
		if (num==bgtu.length) {
			num=0;
		}
		for (let i = 0; i < bgtu.length; i++) {
			bgtu[i].style.opacity="0";
			kuai[i].style.background="";
		}
		bgtu[num].style.opacity="1";
		kuai[num].style.background="#fff";
			if (num==0) {
				bgs.style.background="#E8E8E8";
			}
			else if (num==1) {
				bgs.style.background="#E8E8E8";
			}
			else if (num==2) {
				bgs.style.background="#FF2996";
			}
			else if (num==3) {
				bgs.style.background="#FF5175";
			}
			else if (num==4) {
				bgs.style.background="#FE3000";
			}
			else if (num==5) {
				bgs.style.background="#FF4249";
			}
	}
	for (let i = 0; i < bgtu.length; i++) {
		kuai[i].onclick=function(){
			kuai[num].style.background="";
			kuai[i].style.background="#fff";
			bgtu[num].style.opacity="0";
			bgtu[i].style.opacity="1";
			num=i;
			if (num==0) {
				bgs.style.background="#E8E8E8";
			}
			else if (num==1) {
				bgs.style.background="#E8E8E8";
			}
			else if (num==2) {
				bgs.style.background="#FF2996";
			}
			else if (num==3) {
				bgs.style.background="#FF5175";
			}
			else if (num==4) {
				bgs.style.background="#FE3000";
			}
			else if (num==5) {
				bgs.style.background="#FF4249";
			}
		}
	}

// ======================================
 let asii=document.getElementsByClassName("aside")[0];
 let lann=asii.getElementsByTagName("li");
 let muu=document.getElementsByClassName("lanmu");
 	for (let i = 0; i < lann.length; i++) {
 		lann[i].onmouseover=function(){
 			muu[i].style.display="block";
 		}
 		lann[i].onmouseout=function(){
 			muu[i].style.display="none";
 		}
 	}



// ===================================================
let chuu=document.getElementsByClassName("xbox-hz2")[0];
let imgss=chuu.getElementsByTagName("img")[0];
let jrfq=document.getElementsByClassName("xhz-zuo")[0];
let lfz=document.getElementsByClassName("xhz-you")[0];
let ztztzt=document.getElementsByClassName("cswujiao")[0];
let ztsp=ztztzt.getElementsByTagName("p")[0];
jrfq.onmouseover=function(){
	imgss.setAttribute("src","img/jly.jpg");
	jrfq.style.background="#00b262";
	lfz.style.background="#f1f1f1";
	jrfq.style.color="#fff";
	ztsp.innerHTML="<img src='img/cswujiaoxiaotu.png' alt=''> 丝蕴无硅水润";
}
lfz.onmouseover=function(){
	imgss.setAttribute("src","img/csxxy.jpg");
	lfz.style.background="#00b262";
	jrfq.style.background="#f1f1f1";
	jrfq.style.color="#000";
	ztsp.innerHTML="<img src='img/cswujiaoxiaotu.png' alt=''> 福临门食用油";
}
// ==================================================================
//获取Top的框
    let tops = document.querySelector(".top");

    //点击返回顶部
    tops.onclick = function () {
        animate(document.body, {scrollTop: 0});
        animate(document.documentElement, {scrollTop: 0});
    };

    // 获取滚动条高度
    //某一个楼层距离BODY的高度 == scrollTop
    window.onscroll = function () {
        let obj = document.body.scrollTop ? document.body : document.documentElement;
        let sTop = obj.scrollTop;  //滚动条高度


        //楼层跳转
        //获取楼层集合
        let lcs = document.querySelectorAll(".abb");
        //获取侧边楼层集合
        let cbl = document.querySelectorAll(".zuobian li");
        // 设置一个存储器
        let current = 0;
        //获取固定顶部
        let ding = document.querySelector("#ding");
        //获取侧导航
        let cdh = document.querySelector(".zuobian");

        if(sTop >= 800){
            animate(ding,{top:0});
            animate(cdh,{width:37,height:370,display:"block"});
        }else{
            animate(ding,{top:-50});
            animate(cdh,{width:0,height:0,display:"none"});

        }

        //楼层遍历
        lcs.forEach(function (f, index) {
            if (sTop >= f.offsetTop - 200) {
                cbl.forEach(function (n) {
                    n.classList.remove("cr");
                });
                cbl[index].classList.add("cr");
                current = index;
            }

        });
        //点击侧导航跳转
        //  遍历
        cbl.forEach(function (n, index) {
            n.onclick = function () {
                animate(document.body, {scrollTop: lcs[index].offsetTop});
                animate(document.documentElement, {scrollTop: lcs[index].offsetTop});
            };
            //移入效果
            n.onmouseover = function () {
                this.classList.add("cr");
            };
            n.onmouseout = function () {
                //判断存储器
                if (current != index) {
                    this.classList.remove("cr");
                }
            }
        });

    };

}
































