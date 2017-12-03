# WUI1708-12.4 要收的周末作业

* 
//小米转换
$(function () {


    $('.bannerlist-li').mouseenter(function () {

        $(this).children().eq(-1).show()
    })
    $('.bannerlist-li').mouseleave(function () {
        $(this).children().eq(-1).hide()
    })

    //购物车
    $(".shop-box").mouseenter(function () {
        $(".navbar-right-shop").show().text("购物车中还没有商品，赶紧选购吧！")
    })
    $(".shop-box").mouseleave(function () {
        $(".navbar-right-shop").hide().text("")
    })

    //轮播图
    let bannerpic=$(".banner-pic");
    let bannerli=$("li");

    let btn=$(".banner-btn");
    let btns=$("li");

    let bannerleft=$(".banner-left");
    let bannerright=$(".banner-right");

    let banner=$(".banner");


    let time1=setInterval(fn,2000);
    let num=0;
    let flag = true;

    $(".banner").mouseenter(function () {

        clearInterval(t);

    })
    $(".banner").mouseleave(function () {
        t = setInterval(fn, 3500)
    })
    function fn() {

        num = num + 1;
        if (num == $(".bannerli").length) {
            num = 0;
        }


        $(".bannerli").css({opacity: "0", zIndex: "1300"})
        $(".dian").css({background: ""})

        $(".bannerli").eq(num).animate({opacity: 1, zIndex: 1500}, 1000, function () {
            flag = true;
        })
        $(".btns").eq(num).css({background: "white"})

    }

    $(".bannerright").click(function () {
        if (flag) {
            flag = false;
            fn();
        }


    })

    function fns() {

        num = num - 1;
        if (num < 0) {
            num = $(".bannerli").length - 1
        }

        $(".bannerli").css({opacity: "0", zIndex: "1300"})
        $(".dian").css({background: ""})

        $(".bannerli").eq(num).animate({opacity: 1, zIndex: 1500}, 1000, function () {
            flag = true;
        })
        $(".btns").eq(num).css({background: "white"})

    }

    $(".bannerleft").click(function () {
        if (flag) {
            flag = false;
            fns();
        }
    })

    $(".btns").click(function () {
        $(".bannerli").css({opacity: 0, zIndex: 1300})
        var index = ($(".btns").index(this))
        $(".btns").css({background: ""})

        $(".bannerli").eq(index).animate({opacity: 1, zIndex: 1500}, 500, function () {

        })
        $(".btns").eq(index).css({background: "white"})
        num = index;
    })





    let content=$(".content");
    let heardright=$(".head-right");
    let contentright=$(".content-right");
    let headright1=$(".head-right1");
    function xxk() {
        headright1.mouseenter(function () {
            let index = js1.index($(this))
            contentright.css({display: "none"})
            headright1.addClass("headright1")


            contentright2.eq(index).css({display: "block"})
            headright1.removeClass("hot")
            headright1.eq(index).addClass("headright1")

        })
    }

    xxk($(".jiadian"), $(".contentright1"))
    xxk($(".zhineng"), $(".contentright2"))
    xxk($(".dapei"), $(".contentright3"))
    xxk($(".zhoubian"), $(".contentright4"))



    let button = $("button");
    let btnR = button[0];
    let btnL = button[1];

    let danpin = document.getElementsByClassName("danpin")[0];
    let count = danpin.childElementCount;

    let childw = danpin.children[0].offsetWidth + parseInt(getComputedStyle(danpin.children[0], null).marginRight);

    danpin.style.width = `${count * childw}px`;

    let num1 = 0;
    $('.btnR').click(function () {
        if (nums != 1) {
            nums++;

            $('.btnL').css({color: "#e0e0e2"})
            $('.btnR').css({color: "#666"})
            $('.danpin').css("transform", "translateX(" + nums * -1240 + "px")

        }
    })
    $('.btnL').click(function () {
        if (nums != 0) {
            nums--;
            $('.btnL').css({color: "#666"})
            $('.btnR').css({color: "#e0e0e2"})
            $('.danpin').css("transform", "translateX(" + nums * 1240 + "px")
        }
    })


    function fns1() {

        if (nums != 1) {
            nums++;

            $('.btnL').css({color: "#e0e0e2"})
            $('.btnR').css({color: "#666"})
            $('.danpin').css("transform", "translateX(" + nums * -1240 + "px")

        }

    }

    function fns2() {

        if (nums != 0) {
            nums--;
            $('.btnL').css({color: "#666"})
            $('.btnR').css({color: "#e0e0e2"})
            $('.danpin').css("transform", "translateX(" + nums * 1240 + "px")
        }
    }

    setInterval(fns1, 6500)
    setInterval(fns2, 13000)
    $('.nei:first-child .ce2')




    function neirong(num) {
        let now = 0;
        let next = 0;
        c1.click(function () {
            let li = $(this).nextAll('li')
            let dian1 = $(this).nextAll().has('li').children()
            let length = $(this).nextAll('li').length
            if (flag) {
                if (next != length - 1) {
                    next++;
                    flag = false;
                    li.eq(next).css({left:"296px"})
                    li.eq(now).animate({left: "-296px"}, function () {
                        dian1.css({background: "#ccc"});
                        dian1.eq(now).css({background: "#fff"});
                        flag = true;
                    });
                    li.eq(next).animate({left: "0"})
                    now = next;
                }
            }
        })
        c2.click(function () {
            let li = $(this).nextAll('li')
            let dian1 = $(this).nextAll().has('li').children()
            let length = $(this).nextAll('li').length
            if (flag) {
                if (next != 0) {
                    next--;
                    flag = false;
                    li.eq(next).css({left:"-296px"})
                    li.eq(now).animate({left: "296px"}, function () {
                        dian1.css({background: "#ccc",border:"none"});
                        dian1.eq(now).css({background: "#fff"});
                        flag = true;
                    });
                    li.eq(next).animate({left: "0"})
                    now = next;
                }
            }
        })
        c3.click(function () {
            let li = $(this).parent().nextAll('li')
            console.log(li)
            let length = $(".quan li").length
            let index =$(this).parent().children().index($(this))
            let par=$(this).parent().children()
            console.log(index)
            if (now == index) {
                return;
            }
            else if (index < now) {
                li.eq(index).css({left: 0})
                li.eq(now).css({left: "296px"})

                par.eq(index).css({background: "white"})
                par.eq(now).css({background: "#ccc"})

            }
            else if (index > now) {
                li.eq(index).css({left: 0})
                li.eq(now).css({left: "-296px"})

                par.eq(index).css({background: "white"})
                par.eq(now).css({background: "#ccc"})

            }


            next = now = index;

        })
    }
})

neirong($('.neirong-lb:first-child .biaoyu'),$('.neirongbtn:first-child .btnlist1'))
neirong($('.neirong-lb:nth-child(2) .biaoyu'),$('.neirongbtn:nth-child(2) .btnlist1'))
neirong($('.neirong-lb:nth-child(3) .biaoyu'),$('.neirongbtn:nth-child(3) .btnlist1'))
neirong($('.neirong-lb:nth-child(4) .biaoyu'),$('.neirongbtn:nth-child(4) .btnlist1'))

//天猫转换

$(function () {


    let bannerpic = $("bannerpic");
    let bpcli = $("bntli");
    let bannerlist = $("bannerlist");
    let listli = $("listli")
    let banner = $("banner");

    let t = setInterval(fn, 2500)
    $('.banner').mouseenter(function () {
        clearInterval(t)
    })
    $('.banner').mouseleave(function () {
        clearInterval(t)
        t = setInterval(fn, 2500)
    })
    var num = 0;

    function fn() {
        num++
        if (num == $('.bntli').length) {
            num = 0;
        }
        $('.bntli').css({opacity: "0"})
        $('.listli').css({backgroundColor: "#666"})

        $('.bntli').eq(num).css({opacity: "1"})
        $('.listli').eq(num).css({backgroundColor: "white"})

    }

    $('.listli').mouseover(function () {
        $('.bntli').eq(num).css({opacity: "0"})
        $('.listli').eq(num).css({backgroundColor: "666"})

        var index = $('.listli').index($(this))

        $('.bntli').eq(index).css({opacity: "1"})
        $('.listli').eq(index).siblings().css({background: "#666"});
        $('.listli').eq(index).css({backgroundColor: "white"})

        num = index;
    })



    //楼层跳转
    let jtop=$('.jddw-top');
    let jheight=$('.pinp-box').offsetTop;
    let boxli=$('.chaoshi-box');
    let jdleft=$('.jddw-left');
    let navli=$('.jddw-left-main>a');

    let navbg=['#64C333','#ff0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#ff0036'];

    console.log($('.chaoshi-box').eq(0).offset().top)
    $(window).scroll(function () {



        let  obj= $(document.documentElement).scrollTop()==0?$(document.body).scrollTop():$(document.documentElement).scrollTop()


        if (obj > $('.chaoshi-box').eq(0).offset().top - 500) {
            if (down) {
                down = false;
                $('.jddw-left').animate({width: "35px", height: "370px"},200,function () {
                    up = true;
                })

                $('.jddw-top').animate({top:0},200,function () {
                    up = true;
                })

            }
        } else {
            if (up) {
                up = false;
                $('.jddw-left').animate({width: "0px", height: "0px"},200,function () {
                    down = true;
                })
                $('.jddw-top').animate({top:"-50"},200,function () {
                    down = true;
                })

            }
        }




        chaoshi.forEach(function (val, index) {

            if (objs > val.offsetTop - 200) {
                for (let i = 0; i < leftbox.length; i++) {
                    leftbox[i].style.background = "";
                }
                leftbox[index].style.background = arr[index];
                nn = index;
            }
            leftbox.each(function (index,val) {

                leftbox.eq(index).click(function () {
                    console.log(1)
                    $(document.documentElement).animate({scrollTop:$('.chaoshi-box').eq(index).offset().top-70},300,function () {
                        $(document.documentElement).stop(true,true)
                    })
                    $(document.body).animate({scrollTop:$('.chaoshi-box').eq(index).offset().top-70},300,function () {
                        $(document.documentElement).stop(true,true)
                    })

                })
            })



        })
        $('.pinp-box').click(function () {
            $(document.documentElement).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
            $(document.body).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
        })


    })
})








