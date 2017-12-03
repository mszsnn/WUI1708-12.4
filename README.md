# WUI1708-12.4 要收的周末作业

* 小米https://nyamercer.github.io/WN12.4-QJ/littemi/index
JQ
  //明星单品，推荐选项卡
    var moreleft=$(`.more-left`),
        moreright=$(`.more-right`),
        ul=$(`.mainxm>ul`),
        mleft=$(`.l1`),
        mright=$(`.r1`),
        mul=$(`.mainxmul`),
        flagl=false,
        flag2=true,
        flag1=false,
        flag22=true;
    // console.log(mleft,mright,mul)
    function huadong() {
        $(moreleft).addClass(`active`);
        $(moreright).removeClass(`active`);
        animate(ul,{left:-1226},function () {
            var t=setTimeout(function () {
                $(moreleft).removeClass(`active`);
                $(moreright).addClass(`active`);
                $(ul).animate({left:0},"slow")
            },3000)
        })
    }
    var t=setInterval(huadong,3000);
    $(ul).on("mouseover",function () {
        clearInterval(t)
    })
    $(ul).on("mouseout",function () {
        t=setInterval(huadong,3000)
    })
    $(moreleft).on("click",function (e) {
        e.preventDefault();
        if (flag1==true){
            flag1=false;
            flag2=true;
            $(moreleft).removeClass(`active`);
            $(moreright).addClass(`active`);
            $(ul).animate({left:0},"slow")
        }
    })
    $(moreright).on("click",function (e) {
        e.preventDefault();
        if (flag2==true){
            flag2=false;
            flag1=true;
            $(moreleft).addClass(`active`);
            $(moreright).removeClass(`active`);
            $(ul).animate({left:-1226},"slow")
        }
    })
    $(mleft).on("click",function () {
        if (flag1==true) {
            flag1 = false;
            flag22 = true;
            $(mleft).removeClass(`active`);
            $(mright).addClass(`active`);
            $(mul). animate({left: 0},"slow")
        }
    })
    $(mright).on("click",function () {
        if (flag22==true){
            flag22=false;
            flag1=true;
            $(mleft).addClass(`active`);
            $(mright).removeClass(`active`);
            $(mul).animate({left:-1226},"slow")
        }
    })
* 天猫https://nyamercer.github.io/WN12.4-QJ/skycat/Tmall
JQ
 var box = $(`.banner-main`)
    var lis = $(`.foucs-link`)
    var point = $(`.tg-point li`)
    var now = 0,// 当前的下标
        next = 0;//下一个的下标
    var flag = true;

    function flg() {   //控制开关
        flag = true
    }

    function le() {  //图片由右向左进行
        $(lis[now]).animate({opacity: 0},"slow", flg);
        $(lis[next]).animate( {opacity: 1},"slow", flg);
    }

    function ri() {   //图片由左向右进行
        $(lis[now]).animate( {opacity: 0},"slow",flg);
        $(lis[next]).animate({opacity: 1},"slow", flg);
    }

    function add() {  //轮播点添加变化
        point[now].classList.remove(`on`);
        point[next].classList.add(`on`);
        now = next
    }

    function move(way = `l`) {
        if (way == `l`) {
            next = now + 1;
            if (next > lis.length - 1) {
                next = 0;
            }
            le()
        } else if (way == `r`) {
            next = now - 1;
            if (next < 0) {
                next = lis.length - 1;
            }
            ri()
        }
        add()
    }

    var t = setInterval(move, 3000);
    $(box).on("mouseover" ,function () {
        clearInterval(t);
    })
    $(box).on("mouseout", function () {
        t = setInterval(move, 3000)
    });
    point.each(function (index,value) {
        $(value).on("mouseover", function () {
            if (flag) {
                flag = false;
                next = index;
                if (now < index) {
                    le();
                    add();
                } else if (now > index) {
                    ri();
                    add();
                } else {
                    flag = true;
                }
            }
        })
    })

        var a = $(`.carf`);
        var b = $(`.xxk`);
        a.each(function (index,vaule) {
            $(vaule).on("mouseover",function () {
                for (var i = 0; i < a.length; i++) {
                    $(a[i]).removeClass("active-aside");
                    $(b[i]).removeClass("active-aside");
                }
                $(this).addClass("active-aside");
                $(b[index]).addClass("active-aside");
            })
            $(vaule).on("mouseout" ,function () {
                for (var i = 0; i < a.length; i++) {
                    $(a[i]).removeClass("active-aside");
                    $(b[i]).removeClass("active-aside");
                }
            })
        })
* 新闻app https://nyamercer.github.io/WN12.4-QJ/newsapp/index

