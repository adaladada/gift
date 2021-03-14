function register(){
    var BaseURL='http://8.129.238.142:8000';
    var postRequest=new XMLHttpRequest();
    postRequest.open("POST",BaseURL+'/user')
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var sex=document.getElementById('sex').value;
    var nickname=document.getElementById('nickname').value;
    var postData="username="+username+"&password="+password+"&sex="+sex+"&nickname="+nickname;
    if(username.value.length==0 || password.value.length==0 || sex.value.length==0 || nickname.value.length==0) {
        confirm("有空没填");
        return;
    }
    postRequest.setRequestHeader("Content-type","application/json")
    postRequest.send(postData)
    postRequest.onreadystatechange=function(){
        if(postRequest.readyState==4){
            if(postRequest.status==200){
                window.location.href="留言板页面.html";
            }
            else{
                confirm(postRequest.responseText)
            }
        }
    }
}
