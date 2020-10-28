$(function(){
    var bg = chrome.extension.getBackgroundPage();
    $('#BeginBtn').click(function () {//给对象绑定事件
        chrome.tabs.query({active:true, currentWindow:true}, function (tab) {//获取当前tab
            console.log(tab)
            //向tab发送请求
            chrome.tabs.sendMessage(tab[0].id, { 
                action: "send",
                huoHao: "8025804"
            }, function (response) {
                console.log(response);
            });
        });
    });
})

