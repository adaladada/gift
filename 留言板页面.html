function login(){
    var BaseURL='http://8.129.238.142:8000';
    var postRequest=new XMLHttpRequest();
    postRequest.open("POST",BaseURL+'/login')
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var postData="username="+username+"&password="+password;
    if(username.value.length==0 || password.value.length==0) {
        confirm("参数缺少");
        return;
    }
    postRequest.setRequestHeader("Content-type","application/json")
    postRequest.send(postData)
    postRequest.onreadystatechange=function(){
        if(postRequest.readyState==4){
            if(postRequest.status==200){
                if(postRequest.responseText=='true'){//如果用户名密码正确,则登陆.
                    console.log(postData.message);
                    document.forms["loginForm"].submit();
                    var text = document.querySelector('textarea');
                    var btn = document.querySelector('button');
                    var ul = document.querySelector('ul');
                    var uname = document.getElementById('username');
                    var today = new Date();
                    btn.onclick = function () {
                    var li = document.createElement('li');
                    if (text.value == '') {
                        alert('您没有输入内容')
                    } 
                    else {
                            li.innerHTML = today.getFullYear() + '/' 
                            + today.getMonth() + '/' + today.getUTCDay() + '  '
                            + today.getHours() + ':' + today.getMinutes() 
                            + '<br>' + uname + ':' + text.value + '   ' + '<a href="javascript:;">删除</a>' + '<br>';
                            ul.insertBefore(li, ul.children[0]); 
                            var removeBtn = document.querySelectorAll('a');
                            for (var i = 0; i < removeBtn.length; i++) {
                            removeBtn[i].onclick = function () {
                               ul.removeChild(this.parentNode);
                    }
                }
                    }
    }
                    }else if(postData.code==0){
                            alert(data.message);
                        }else{
                            //用户实例不为空,但用户名不等于该查询的用户名 (几率微乎其微)
                            alert("网络错误,请稍后再试");
                            //发送BUG信息到管理员
                            /* return false; */
                        }
                        
            }
            else{
                confirm(postRequest.responseText)
            }
        }
    }
}
