var HuoHao="";
var interval1 = null;
var interval2 = null;
$(function(){
    HuoHao = "100015067466";
    //判断购物车里是否已添加此货号
    var allSkuIds = $("#allSkuIds").val();
    var added = allSkuIds.match([HuoHao]);
    if(added){
        console.log("购物车存在此商品："+HuoHao);
        //通过ID 找到checkbox
        //定时查看DOM
        interval1 = setInterval(()=>{
            var checkbox = $("#product_"+HuoHao).find(".cart-checkbox input[type='checkbox']");
             console.log(checkbox)
            //判断checkbox 是否存在
            if(checkbox.length>0){
                //存在此checkbox
                if(!checkbox[0].checked){
                    checkbox.click()
                    interval2 = setInterval(()=>{
                        var hasId = $("#ids").val().match([HuoHao])
                        var submitData = $(".submit-btn").attr("data-bind")
                        if(hasId&&hasId.length>0&&submitData==1){
                            $(".submit-btn")[0].click()
                            clearInterval(interval2)
                        }
                    },50)
                    clearInterval(interval1)

                }else{
                    interval2 = setInterval(()=>{
                        var hasId = $("#ids").val().match([HuoHao])
                        var submitData = $(".submit-btn").attr("data-bind")
                        if(hasId&&hasId.length>0&&submitData==1){
                            $(".submit-btn")[0].click()
                            clearInterval(interval2)
                        }
                    },50)
                }
            }else{
                //不存在
                //alert("不存在checkbox")
                clearInterval(interval1)
                location.reload()
            }
            
        },50);
    }else{
        alert("购物车不存在此货号："+HuoHao)
    }
})

