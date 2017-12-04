$(function(){
    function LookFor(obj){
        let val=obj.val;
        $.ajax({
            url:"https://api.jisuapi.com/news/search?keyword="+val+"&appkey=d844b0839ff12da9",
            dataType: "jsonp",
            success: function(val){
                let arr=val.result.list;
                let str="";
                arr.forEach((val)=>{
                    if(val.pic===""){
                        str+=`
                                <a href="${val.url}">
                            <li class="list" style="height: 0.5rem;">
                               
                                <div class="right noimg" style="height: 100%;">
                                     <p>
                                        ${val.title}
                                     </p>
                                     <section class="time">
                                        时间: ${val.time}
                                        来源: ${val.src}
                                     </section>
                                </div>
                            </li>
                         </a>`;
                    }else{
                        str+=`
                        <a href="${val.url}">
                            <li class="list">
                                <div class="left">
                                     <img src="${val.pic}" alt="">
                                </div>
                                <div class="right">
                                     <p>
                                        ${val.title}
                                     </p>
                                     <section class="time">
                                        时间: ${val.time}
                                        来源: ${val.src}
                                     </section>
                                </div>
                            </li>
                         </a>`;
                    }
                });
                $("ul.content").html(str);

            }
        })
    }


    $("input.lookfor").focus();


    $("header .for").on("click",function(){
        // console.log($("input.lookfor").val())]
        LookFor({
            val: $("input.lookfor").val()
        })
    })
    $("input.lookfor").keyup(function(e){
        if(e.which==13){
            LookFor({
                val: $(this).val()
            })
        }
    })

})

