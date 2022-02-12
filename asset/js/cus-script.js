//global variable
var input_video = document.getElementById('video');
var video_frame = document.getElementById('video-frame');
var start = document.getElementById('start');
var file_reader = new FileReader();
var method = document.getElementById('method-list');
var header = document.getElementById('header');
var footer = document.getElementById('footer');
var no_method_txt = 'بدون افکت !';

//action when onload page
document.addEventListener("DOMContentLoaded", function(){
    header.innerText = no_method_txt;
    footer.innerText = no_method_txt;
});


// function
function upload(){
    file_reader.readAsDataURL(input_video.files[0]);
    file_reader.onload = function(){
        video_frame.src = file_reader.result;
    }
}

function action(){
    video_frame.play();
    effect_method()
}

function goMethod(){
    if(method.value == 'method-none'){
        header.innerText = no_method_txt;
        footer.innerText = no_method_txt;
    }
    if(method.value == 'method-1'){
        method_01();
    }
}

// the methods here
function method_01(){
    header.innerText = 'متد شماره ی یک';
    footer.innerText = 'متد شماره ی یک';
}

//animations 
function animation_method_01(){
    
}