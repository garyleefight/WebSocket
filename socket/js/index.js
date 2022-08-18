var socket = io('http://localhost:3002');
var btn = document.querySelector("[type='button']");
var span = document.querySelector("span");
var chat = document.querySelector("ul");
var content = document.querySelector("[type='text']");
var dataM = [];

btn.onclick = function (event) {
    event.preventDefault();
    if(content.value != '') {
        var date = new Date();
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        debugger;
        socket.emit('message',{data:content.value,time:time});
    }
    chat.scrollTop = chat.scrollHeight-20;
}

socket.on('back',function (data) {
    chat.innerHTML = '';
    for(var i = 0;i<data.data.length;i++){
        dataM[i] = data.data[i];
        var li = document.createElement('li');
        var a = document.createElement('a');
        li.innerHTML = data.data[i].data;
        a.href = "#";
        a.innerHTML = data.data[i].timee;
        li.appendChild(a);
        chat.appendChild(li);
    }
    span.innerHTML = data.num;
});