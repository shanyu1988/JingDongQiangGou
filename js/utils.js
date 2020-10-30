
$(function(){
    var bg = chrome.extension.getBackgroundPage();
    $('#BeginBtn').click(function () {//给对象绑定事件
        console.log("点击事件")
        let huoHao =  $("#HuoHao").val();
        chrome.tabs.query({active:true, currentWindow:true}, function (tab) {//获取当前tab
            //向tab发送请求
            chrome.tabs.sendMessage(tab[0].id, { 
                name: "msg",
                huoHao: huoHao
            }, function (response) {
                console.log(response);
            });
        });
    });
})

