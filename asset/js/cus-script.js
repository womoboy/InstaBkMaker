//global variable
var input_video = document.getElementById('video');
var video_frame = document.getElementById('video-frame');
var start = document.getElementById('start');
var file_reader = new FileReader();


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
    var method = document.getElementById('method-list');
    if(method.value == 'method-1'){
        console.log("the method 1 is ready !");
    }
}

//animations 
function animation_method_01(){

}