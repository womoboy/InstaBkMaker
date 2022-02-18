//global variable
var logo_source = "asset/library/Logo_DornaGame.jpg";
var method_style = [
    "asset/style/method_01.css",
    "asset/style/method_02.css",
    "asset/style/method_03.css"
];

//inputs
var code = document.getElementById('code');
var battlePass = document.getElementById('battle-pass');
var rigen = document.getElemetnById('rigen-list');
var epicGun = document.getElementById('epic-gun');
var legendGun = document.getElementById('legend-gun');
var price = document.getElementById('price');
var method = document.getElementById('method-list');

// elements
var method_style = document.getElementById("method-style");
var input_video = document.getElementById('video');
var video_frame = document.getElementById('video-frame');
var start_btn = document.getElementById('start-btn');
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
    startInformation();
}

function startInformation(){
    video_frame.play();
}

function goMethod(){
    if(method.value == 'method-none'){
        header.innerText = no_method_txt;
        footer.innerText = no_method_txt;
    }else if(method.value == 'method-1'){
        cleanContent();
        let method = new CreateMethod(logo_source, code.value, rigen.vlaue, epicGun.value, legendGun.value, price.value, method_style[0]);
    }else if(method.value == 'method-2') {
        cleanContent();
        let method = new CreateMethod(logo_source, code.value, rigen.vlaue, epicGun.value, legendGun.value, price.value, method_style[1]);
    }else if(method.value == 'method-3') {
        cleanContent();
        let method = new CreateMethod(logo_source, code.value, rigen.vlaue, epicGun.value, legendGun.value, price.value, method_style[2]);
    }
}

function cleanContent(){
    header.innerHTML = "";
}
//classes
class CreateMethod{
    constructor($logo, $code, $battlePass, $rigen, $epicGun, $legendGun, $price, $style){
        //create logo
        this.logo = $logo;
        this.code = $code;
        this.battlePass = $battlePass;
        this.rigen = $rigen;
        this.epicGun = $epicGun;
        this.legendGun = $legendGun;
        this.proce = $price;
        this.style = $style;

        //select header element
        var header = document.getElementById('header');
        var footer = document.getElementById('footer');

        //create logo element
        //__logo frame
        var logo_frame_creator = document.createElement("div");
        logo_frame_creator.className = "logo-frame";

        //__logo image
        var logo_image_creator = document.createElement("img");
        logo_image_creator.setAttribute("id", "logo-image");
        logo_image_creator.setAttribute("src", this.logo);

        logo_frame_creator.appendChild(logo_image_creator);

        //create code element
        //__code frame
        var code_frame_creator = document.createElement("div");
        code_frame_creator.setAttribute("id", "code-frame");

        //__code text
        var code_text_creator = document.createElement("p");
        code_text_creator.setAttribute("id", "code-text");
        code_text_creator.innerText = "کد :" + " " + this.code;

        code_frame_creator.appendChild(code_text_creator);

        //create battlePass element
        //__battleFrame frame
        var battlePass_frame_creator = document.createElement("div");
        battlePass_frame_creator.setAttribute("id", "battlePass-frame");

        //__battlePass text
        var battlePass_text_creator = document.createElement("p");
        battlePass_text_creator.setAttribute("id", "battlePass-text");
        battlePass_text_creator.innerText = "بتل پس :" + " " + this.battlePass;

        battlePass_frame_creator.appendChild(battlePass_text_creator);

        //create rigen element
        //__rigen frame
        var rigen_frame_creator = document.createElement("div");
        rigen_frame_creator.setAttribute("id", "rigen-frame");

        //rigen text
        var rigen_text_creator = document.createElement("p");
        rigen_text_creator.setAttribute("id", "rigen-text");
        rigen_text_creator.innerText = "ریجن :" + " " + this.rigen;

        rigen_frame_creator.appendChild(rigen_text_creator);

        //create epicGun element
        //__epicGun frame
        var epicGun_frame_creator = document.createElement("div");
        epicGun_frame_creator.setAttribute("id", "epicGun-frame");

        //__epicGun text
        var epicGun_text_creator = document.createElement("p");
        epicGun_text_creator.setAttribute("id", "epicGun-text");
        epicGun_text_creator.innerText = "گان اپیک :" + " " + this.epicGun;

        epicGun_frame_creator.appendChild(epicGun_text_creator);

        //create legendGun element
        //__legendGun frame
        var legendGun_frame_creator = document.createElement("div");
        legendGun_frame_creator.setAttribute("id", "legendGun-frame");

        //__legendGun text
        var legendGun_text_creator = document.createElement("p");
        legendGun_text_creator.setAttribute("id", "legendGun-text");
        legendGun_text_creator.innerText = "گان لجند :" + " " + this.legendGun;

        legendGun_frame_creator.appendChild(legendGun_text_creator);

        //create price element
        //__price frame
        var price_frame_creator = document.createElement("div");
        price_frame_creator.setAttribute("id", "price-frame");

        //__price text
        var price_text_creator = document.createElement("p");
        price_text_creator.setAttribute("id", "price-text");
        price_text_creator.innerText = "قیمت :" + " " + this.price;

        price_frame_creator.appendChild(price_text_creator);

        //append to header
        header.appendChild();
        header.appendChild();
        header.appendChild();

        //append to footer
        footer.appendChild();
        footer.appendChild();
        
        //add style method
        method_style.setAttribute("href", this.style);
    }
}