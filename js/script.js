//document.querySelector("[clstag=pageclick|keycount|Shopcart_CheckProd|0_100015285144]")
//pageclick|keycount|Shopcart_CheckProd|0_100013699280
$(function(){
    var HuoHao="";
    console.log($("#BeginBtn"));
    $("#BeginBtn").click(()=>{
        console.log(this)
    })
    var checkbox= $(`[clstag="pageclick|keycount|Shopcart_CheckProd|0_${HuoHao}"]`);
    if(checkbox){

// setTimeOut(function(){
//     document.getElementsByClassName("price").onDOMSubtreeModified = function(){
//     console.log(123)
// }
// let it=setInterval(function(){
//     let check=document.querySelector('[clstag="pageclick|keycount|Shopcart_CheckProd|1_4382048"]');
//     if(check&&check.checked){
//         document.querySelector('.common-submit-btn').click();
//         clearInterval(it);
//     }
// },20);
// if(dom1){
//     dom1.click();
//     var submit = document.getElementsByClassName("common-submit-btn");
//     submit[0].click();
// }
// window.onload = function(){
//     console.log(document.getElementsByClassName("checkout-submit"))
// },300);

    }else{
        // location.reload();
    }
})


