
window.onload=function(){
	let cenavs=document.getElementsByClassName("cenav-box")[0];
	let lis=cenavs.getElementsByTagName("li");
	let cen=document.getElementsByClassName("cenav-xxklb");

	for (let i = 0; i < lis.length; i++) {
		lis[i].onmousemove=function(){
			cen[i].className="cenav-xxklb black";
		}
		lis[i].onmouseout=function(){
			cen[i].className="cenav-xxklb none";
		}
	}

		/*for (var i = 0; i < lis.length; i++) {
		lis[i].shuxin=i;
		lis[i].onmousemove=function(){
			cen[this.shuxin].className="cenav-xxklb black";
		}
		lis[i].onmouseout=function(){
			cen[this.shuxin].className="cenav-xxklb none";
		}
	}*/
	// =======================================
	let gouwuche=document.getElementsByClassName("gouwuche")[0];
	let divs=gouwuche.getElementsByTagName("div");
	let gouwu=document.getElementsByClassName("gouwu");
	gouwuche.onmousemove=function(){
		divs[2].style.height="100px";
	}
	gouwuche.onmouseout=function(){
		divs[2].style.height="0px";
	}
	// =======================================
	let navs=document.getElementsByClassName("nav-center")[0];
	let navli=navs.getElementsByTagName("li");
	let kuan=document.getElementsByClassName("nav-xiala");
	let xlk=document.getElementsByClassName("xiala-kuan")[0];
	console.log(xlk)
	 for (let i = 0; i < navli.length; i++) {
	 	if (i!=7&&i!=8) {
		 	navli[i].onmousemove=function(){
		 		xlk.style.height="220px";
		 		kuan[i].style.overflow="";
		 		kuan[i].style.height="220px";

		 	}
		 	navli[i].onmouseout=function(){
		 		xlk.style.height="0px";
		 		kuan[i].style.overflow="hidden";
		 		kuan[i].style.height="0px";
		 	}
		 	kuan[i].onmousemove=function(){
		 		xlk.style.height="220px";
		 		kuan[i].style.overflow="";
		 		kuan[i].style.height="220px";
		 	}
		 	kuan[i].onmouseout=function(){
		 		xlk.style.height="0px";
		 		kuan[i].style.overflow="hidden";
		 		kuan[i].style.height="0px";
		 	}
		 	xlk.onmousemove=function(){
		 		xlk.style.height="220px";
		 		kuan[i].style.overflow="";
		 		kuan[i].style.height="220px";
		 	}
		 	xlk.onmouseout=function(){
		 		xlk.style.height="0px";
		 		kuan[i].style.overflow="hidden";
		 		kuan[i].style.height="0px";
		 	}
		}
	 }

	 // =======================================
	 let erji=document.getElementsByClassName("erjidh1")[0];
	 let erli=erji.getElementsByTagName("li");
	 let shu=document.getElementsByClassName("shuliefy");
	 let jdd=document.getElementsByClassName("jdd");
	 for (let i = 0; i < erli.length; i++) {
	 	erli[i].onmousemove=function(){
	 		for (let j = 0; j < erli.length; j++) {
	 			shu[j].className='shuliefy none';
	 			jdd[j].style.borderBottom="";
	 		shu[i].className='shuliefy block';
	 		jdd[i].style.borderBottom="2px solid #ff6700";
	 		}
	 	}
	 	
	 }
	
	// =======================================
let zNhezi=document.getElementsByClassName("erjidh2");
// console.log(zNhezi)
		zNhezi[0].onmouseover=zhiNeng(0);
		zNhezi[1].onmouseover=zhiNeng(1);
		zNhezi[2].onmouseover=zhiNeng(2);
		zNhezi[3].onmouseover=zhiNeng(3);
		zNhezi[4].onmouseover=zhiNeng(4);
function zhiNeng(n){
	let znlm=document.getElementsByClassName("erjidh2")[n];
	let znli=znlm.getElementsByTagName("li");
	let hzz=document.getElementsByClassName("zndahezi")[n];
	let hz=hzz.getElementsByClassName("zhineng");

	for (let i = 0; i < znli.length; i++) {
		znli[i].onmousemove=function(){
			for (let j = 0; j < znli.length; j++) {
				hz[j].className="zhineng none";
				znli[j].style.borderBottom= "";
			}
			hz[i].className="zhineng block";
			znli[i].style.borderBottom= "2px solid #ff6700";
		}
	}
}

// ======================================="
	let boxs=document.getElementsByClassName("banner-box")[0];
	let boxli=boxs.getElementsByTagName("li");
	let dian=document.getElementsByClassName("banner-dian")[0];
	let dianli=dian.getElementsByTagName("li");
	let ybs=document.getElementsByClassName("banner-you")[0];
	let zbs=document.getElementsByClassName("banner-zuo")[0];

	let t=setInterval(fn, 5000);
	boxs.onmouseover=function(){
		clearInterval(t);
	};
	boxs.onmouseout=function(){
		t=setInterval(fn, 5000);
	};

	let flag = true;
	let num=0;

	ybs.onclick=function(){
		if (flag) {
			fn();
			flag = false;
		}
	}
	zbs.onclick=function(){
		if (flag) {
			fn1();
			flag = false;
		}
	}

	function fn(){
		num++;
		if (num==boxli.length) {
			num=0;
		}
		for (let i = 0; i < boxli.length; i++) {
			boxli[i].id="";
			dianli[i].style.background="";
			flag = true;
		}
		boxli[num].id="xianshi";
		dianli[num].style.background="#f5f5f5";
	}
	function fn1(){
			num--;
			if (num==-1) {
				num=boxli.length-1;
			}
			for (let i = 0; i < boxli.length; i++) {
				boxli[i].id="";
				dianli[i].style.background="";
				flag = true;
			}
			boxli[num].id="xianshi";
			dianli[num].style.background="#f5f5f5";
		}

	for (let i = 0; i < boxli.length; i++) {
		dianli[i].onclick=function(){
			boxli[num].id="";
			boxli[i].id="xianshi";
			dianli[num].style.background='';
			dianli[i].style.background="#f5f5f5";
			num=i;
		}
	}
	// =======================================
	/*let dap=document.getElementsByClassName("dapei-box")[0];
	let dapei=dap.getElementsByTagName("ul");
	let dpbt=document.getElementsByClassName("erjidh")[0];
	let dpli=dpbt.getElementsByTagName("li");
	let dpa=document.getElementsByClassName("dpa");

	for (let i = 0; i < dpli.length; i++) {
		dpli[i].onmouseover=function(){
			for (let j = 0; j < dpli.length; j++) {
				dapei[j].className="dp-box1";
				dpa[j].style.borderBottom="";
			}
			dapei[i].className="dp-box1 chuxian";
			dpa[i].style.borderBottom= "2px solid #ff6700";
		}
	}*/



	// =======================================
	let nrk=document.getElementsByClassName("neirong-kuan");
		nrk[0].onmouseover=neirong(0);
		nrk[1].onmouseover=neirong(1);
		nrk[2].onmouseover=neirong(2);
		nrk[3].onmouseover=neirong(3);
function neirong(m){
	let zkuan=document.getElementsByClassName("neirong-kuan")[m];
	let zBox=zkuan.getElementsByClassName("neirong-xbox");
	let zDk=document.getElementsByClassName("neirong-dian")[m];
	let zDian=zDk.getElementsByTagName("li");
	let xZbs=document.getElementsByClassName("nrbs-zuo")[m];
	let xYbs=document.getElementsByClassName("nrbs-you")[m];

	xYbs.onclick = function(){
		if (flag) {
			Zfu();
			flag=false;
		}
	}
	xZbs.onclick = function(){
		if (flag) {
			Zfu1();
			flag=false;
		}
	}
	
	// console.log(zYbs)

	let xz = xyg = 0;
	let flag =true;

	// let zT=setInterval(Zfu, 3000);

	function Zfu(){
		xyg++;
		if (xyg==zBox.length) {
			xyg=0;
		}
		zBox[xyg].style.left="296px";
		animate(zBox[xz],{left:"-296"},function(){
			for (let i = 0; i < zBox.length; i++) {
				zDian[i].style.background="#b0b0b0";
				zDian[i].style.border="2px solid #ffffff";
			}
			zDian[xyg].style.background="#ffffff";
			zDian[xyg].style.border="2px solid #ff7600";
			flag = true;
		});
		animate(zBox[xyg],{left:"0"});
		xz = xyg;
	}
	function Zfu1(){
		xyg--;
		if (xyg == -1) {
			xyg = zBox.length-1;
		}
		zBox[xyg].style.left="-296px";
		animate(zBox[xz],{left:"296"},function(){
			for (let i = 0; i < zBox.length; i++) {
				zDian[i].style.background="#b0b0b0";
				zDian[i].style.border="2px solid #ffffff";
			}
			zDian[xyg].style.background="#ffffff";
			zDian[xyg].style.border="2px solid #ff7600";
			flag = true;
		});
		animate(zBox[xyg],{left:"0"});
		xz = xyg;
	}


	for (let i = 0; i < zBox.length; i++) {
		zDian[i].onclick=function(){
			if (i == xz) {
				return;
			}
			else if (i < xz) {
				animate(zBox[xz],{left:"296"});
				animate(zBox[i],{left:"0"});
				for (let j = 0; j < zBox.length; j++) {
					zDian[j].style.background="#b0b0b0";
					zDian[j].style.border="2px solid #ffffff";
				}
				zDian[i].style.background="#ffffff";
				zDian[i].style.border="2px solid #ff7600";
			}
			else if (i > xz) {
				animate(zBox[xz],{left:"-296"});
				animate(zBox[i],{left:"0"});
				for (let j = 0; j < zBox.length; j++) {
					zDian[j].style.background="#b0b0b0";
					zDian[j].style.border="2px solid #ffffff";
				}
				zDian[i].style.background="#ffffff";
				zDian[i].style.border="2px solid #ff7600";
			}
			xyg = xz = i;
		}
	}
	}




// =============================
//获取按钮【0】【1】
	let butt=document.getElementsByTagName("button");
	let btnL=butt[0];
	let btnR=butt[1];
	//获取图的框
	let kuaN=document.getElementsByClassName("gd-tuk")[0];
	//获取图的数量
	let tusu=kuaN.childElementCount;
	// 获取图的宽度
	let tukuan=kuaN.children[0].offsetWidth+parseInt(getComputedStyle(kuaN.children[0],null).marginRight);
	//获取图的总宽度
	let Zkuan=kuaN.style.width=`${tusu*tukuan}px`;





	//左边给disabled属性一个disabled属性值【禁用这个值】
	btnL.setAttribute("disabled","disabled");
	let nums = 0;
	//点击
	btnR.onclick=function(){
		if (nums==1) {
			return;
		}
		nums++;

		kuaN.style.transform=`translateX(${-1240*nums}px)`;
		btnL.style.color="#ff6700";
		btnR.style.color="#e0e0e0";
		btnL.style.background="";
		//删除左边的disabled属性【启用这个值】
		btnL.removeAttribute("disabled");
		//右边给disabled属性一个disabled属性值【禁用这个值】
		btnR.setAttribute("disabled","disabled");
	
	}

	btnL.onclick=function(){
			if (nums==0) {
				return;
			}
			nums--;

			kuaN.style.transform=`translateX(${-1240*nums}px)`;
			btnR.style.color="#ff6700";
			btnL.style.color="#e0e0e0";
			btnR.style.background="";
			//删除右边的disabled属性【启用这个值】
			btnR.removeAttribute("disabled");

	}




















}