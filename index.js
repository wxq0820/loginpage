function $(selector) {
    return document.querySelector(selector);
}

$('header .icon').onclick = function (e) {
    e.stopPropagation();
    $('.flip-model').style.display = 'block';
};

$('.flip-model').addEventListener('click',function (e) {
    e.stopPropagation();
    if(e.target.classList.contains("login")){
        $('.flip-model').classList.add("login-ct");
        $('.flip-model').classList.remove("register-ct");
    }
    if(e.target.classList.contains("register")){
        $('.flip-model').classList.add("register-ct");
        $('.flip-model').classList.remove("login-ct");
    }
    if(e.target.parentElement.classList.contains("icon-close")){
        $('.flip-model').style.display = 'none';
    }
});

document.addEventListener('click',function () {
    $('.flip-model').style.display = 'none';
});

$('.model-login .form').addEventListener('submit',function (e) {
    e.preventDefault();
    if(!/^\w{4,8}$/.test($('.model-login .username').value)){
        $('.model-login .error-msg').innerText = "用户名需输入4-8个字符，包括字母数字下划线";
        return false;
    }
    if(!/^\w{6,10}$/.test($('.model-login .password').value)){
        $('.model-login .error-msg').innerText = "请输入正确密码";
        return false;
    }
    this.submit();
});

$('.model-register .form').addEventListener('submit',function (e) {
    e.preventDefault();
    console.log($('.model-register .username').value);
    if(!/^\w{4,8}$/.test($('.model-register .username').value)){
        $('.model-register .error-msg').innerText = "用户名需输入4-8个字符，包括字母数字下划线";
        return false;
    }
    if(!/^\w{6,10}$/.test($('.model-register .password').value)){
        $('.model-register .error-msg').innerText = "密码需输入6-10个字符，包括字母数字下划线";
        return false;
    }
    if($('.model-register .password1').value!==$('.model-register .password').value){
        $('.model-register .error-msg').innerText = "两次密码输入不符";
        return false;
    }
    this.submit();
});