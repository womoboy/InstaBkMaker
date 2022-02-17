//global variable
var input_video = document.getElementById('video');
var video_frame = document.getElementById('video-frame');
var start_btn = document.getElementById('start-btn');
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
    var file_reader = new FileReader();

    file_reader.readAsDataURL(input_video.files[0]);
    file_reader.onload = function(){
        video_frame.src = file_reader.result;
    }
}

function action(){
    video_frame.play();
}

function goMethod(){
    var logo_source = "asset/library/Logo_DornaGame.jpg";
    var method_style = [
        "asset/style/method_01.css",
        "asset/style/method_02.css",
        "asset/style/method_03.css"
    ];

    if(method.value == 'method-none'){
        header.innerText = no_method_txt;
        footer.innerText = no_method_txt;
    }else if(method.value == 'method-1'){
        cleanContent();
        let logo = new CreateMehod(logo_source, method_style[0]);
    }else if(method.value == 'method-2') {
        
    }else if(method.value == 'method-3') {
        
    }
}

function cleanContent(){
    header.innerHTML = "";
}
//classes
class CreateMehod{
    constructor(logo_val, style_val){
        //create logo
        this.logo = logo_val;
        this.style = style_val;

        var method_style = document.getElementById("method-style");
        var header = document.getElementById('header');
            
        var logo_frame_creator = document.createElement("div");
        logo_frame_creator.className = "logo-frame";

        var logo_image_creator = document.createElement("img");
        logo_image_creator.setAttribute("id", "logo-image");
        logo_image_creator.setAttribute("src", this.logo);

        logo_frame_creator.appendChild(logo_image_creator);

        header.appendChild(logo_frame_creator);
        method_style.setAttribute("href", this.style);
    }
}