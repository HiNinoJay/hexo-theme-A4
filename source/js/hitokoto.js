fetch('https://v1.hitokoto.cn/?c=k') // 具体接口信息：https://developer.hitokoto.cn/sentence/
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        var hitokoto = document.getElementById('quote')
        hitokoto.innerText = data.hitokoto;
    })
    .catch(function (err) {
        console.error(err);
    })



