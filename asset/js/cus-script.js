//global variable
var logo_source = "asset/library/Logo_BaranGem.jpeg";


//inputs
var code = document.getElementById('code');
var battlePass = document.getElementById('battle-pass');
var rigen = document.getElementById('rigen-list');
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
    goMethod();
    video_frame.play();
    inputAnimation();
}

function goMethod(){
    //specical arrays for method
    var method_style = [
        "asset/style/method_01.css",
        "asset/style/method_02.css",
        "asset/style/method_03.css"
    ];
    
    var vfx_video = [
        "asset/library/vfx_01.mp4",
        "asset/library/vfx_02.mp4",
        "asset/library/vfx_03.mp4"
    ];

    var topBorder_source = [
        "asset/library/border/topBorder_method_01.svg",
        "asset/library/border/topBorder_method_02.png",
        "asset/library/border/topBorder_method_03.png"
    ];

    var bottomBorder_source = [
        "asset/library/border/bottomBorder_method_01.svg",
        "asset/library/border/bottomBorder_mehtod_02.png",
        "asset/library/border/bottomBorder_method_03.png"
    ];

    if(method.value == 'method-none'){
        cleanContent();
        header.innerText = no_method_txt;
        footer.innerText = no_method_txt;
    }else if(method.value == 'method-1'){
        cleanContent();
        let method = new CreateMethod(logo_source, code.value, battlePass.value, rigen.value, epicGun.value, legendGun.value, price.value, method_style[0], vfx_video[0], topBorder_source[0], bottomBorder_source[0]);
    }else if(method.value == 'method-2') {
        cleanContent();
        let method = new CreateMethod(logo_source, code.value, battlePass.value, rigen.value, epicGun.value, legendGun.value, price.value, method_style[1], vfx_video[1], topBorder_source[1], bottomBorder_source[1]);
    }else if(method.value == 'method-3') {
        cleanContent();
        let method = new CreateMethod(logo_source, code.value, battlePass.value ,rigen.value, epicGun.value, legendGun.value, price.value, method_style[2], vfx_video[2], topBorder_source[2], bottomBorder_source[2]);
    }
}

function cleanContent(){
    var vfx_frame = document.getElementById("vfx-frame");
    header.innerHTML = "";
    footer.innerHTML = "";
    if(typeof(vfx_frame) != "undefined" && vfx_frame != null) {
        vfx_frame.remove();
    } 
}

function inputAnimation() {
    //select frame
    var code_frame = document.getElementById("code-frame");
    var rigen_frame = document.getElementById("rigen-frame");
    var legendGun_frame = document.getElementById("legendGun-frame");
    var epicGun_frame = document.getElementById("epicGun-frame");
    var battlePass_frame = document.getElementById("battlePass-frame");
    var price_frame = document.getElementById("price-frame");

    if(method.value == 'method-1') {
        var counter = 0;
        var maxTime = 10;
        // setInterval(() => {
        //     if(counter < maxTime){
        //         counter = counter + 1;

        //         //code frame animation
        //         if(counter == 2) {
        //             code_frame.classList.add("go-position-code-frame");
        //             code_frame.style.right = "15px";
        //             if(code_frame.style.right == "15px"){
        //                 code_frame.style.opacity = "1";
        //             }
        //         }

        //         //rigen frame animation
        //         if(counter == 3) {
        //             rigen_frame.classList.add("go-position-rigen-frame");
        //             rigen_frame.style.left = "15px";
        //             if(rigen_frame.style.left = "15px"){
        //                 rigen_frame.style.opacity = "1";
        //             }
        //         }
                
        //         //legendGun frame animation
        //         if(counter == 4) {
        //             legendGun_frame.classList.add("go-position-legendGun-frame");
        //             legendGun_frame.style.right = "15px";
        //             if(legendGun_frame.style.right == "15px"){
        //                 legendGun_frame.style.opacity = "1";
        //             }
        //         }

        //         //epicGun frame animation
        //         if(counter == 5) {
        //             epicGun_frame.classList.add("go-position-epicGun-frame");
        //             epicGun_frame.style.bottom = "15px";
        //             if(epicGun_frame.style.bottom = "15px"){
        //                 epicGun_frame.style.opacity = "1";
        //             }
        //         }

        //         //battlePass frame animation
        //         if(counter == 6) {
        //             battlePass_frame.classList.add("go-position-battlePass-frame");
        //             battlePass_frame.style.left = "15px";
        //             if(battlePass_frame.style.left == "15px"){
        //                 battlePass_frame.style.opacity = "1";
        //             }
        //         }

        //         //price frame animation
        //         if(counter == 7) {
        //             price_frame.classList.add("go-position-price-frame");
        //             price_frame.style.bottom = "60px";
        //             if(price_frame.style.bottom == "60px"){
        //                 price_frame.style.opacity = "1";
        //             }
        //         }

        //     } else {
        //         clearInterval();
        //     }
        // }, 1000);
    }

    if(method.value == 'method-2') {

    }

    if(method.value == 'method-3') {

    }
}

//classes
class CreateMethod{
    constructor($logo, $code, $battlePass, $rigen, $epicGun, $legendGun, $price, $style, $vfx, $topBorder, $bottomBorder){
        //create logo
        this.logo = $logo;
        this.code = $code;
        this.battlePass = $battlePass;
        this.rigen = $rigen;
        this.epicGun = $epicGun;
        this.legendGun = $legendGun;
        this.price = $price;
        this.style = $style;
        this.vfx = $vfx;
        this.topBorder = $topBorder;
        this.bottomBorder = $bottomBorder;

        //select header element
        var header = document.getElementById('header');
        var footer = document.getElementById('footer');
        var insta_frame = document.getElementById("insta-frame");

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
        code_frame_creator.className = "code-frame";

        //__code text
        var code_text_creator = document.createElement("p");
        code_text_creator.setAttribute("id", "code-text");
        if(this.code == ""){
            this.code = 0;
            code_text_creator.innerText = "کد :" + " " + this.code;
        } else {
            code_text_creator.innerText = "کد :" + " " + this.code;
        }
        

        code_frame_creator.appendChild(code_text_creator);

        //create battlePass element
        //__battleFrame frame
        var battlePass_frame_creator = document.createElement("div");
        battlePass_frame_creator.setAttribute("id", "battlePass-frame");
        battlePass_frame_creator.className = "battlePass-frame";

        //__battlePass text
        var battlePass_text_creator = document.createElement("p");
        battlePass_text_creator.setAttribute("id", "battlePass-text");
        if(this.battlePass == ""){
            this.battlePass = 0;
            battlePass_text_creator.innerText = "بتل پس :" + " " + this.battlePass;
        } else {
            battlePass_text_creator.innerText = "بتل پس :" + " " + this.battlePass;
        }
        

        battlePass_frame_creator.appendChild(battlePass_text_creator);

        //create rigen element
        //__rigen frame
        var rigen_frame_creator = document.createElement("div");
        rigen_frame_creator.setAttribute("id", "rigen-frame");
        rigen_frame_creator.className = "rigen-frame";

        //rigen text
        var rigen_text_creator = document.createElement("p");
        rigen_text_creator.setAttribute("id", "rigen-text");
        if(this.rigen == ""){
            this.rigen = 0;
            rigen_text_creator.innerText = "ریجن :" + " " + this.rigen;
        } else {
            rigen_text_creator.innerText = "ریجن :" + " " + this.rigen;
        }

        rigen_frame_creator.appendChild(rigen_text_creator);

        //create epicGun element
        //__epicGun frame
        var epicGun_frame_creator = document.createElement("div");
        epicGun_frame_creator.setAttribute("id", "epicGun-frame");
        epicGun_frame_creator.className = "epicGun-frame";

        //__epicGun text
        var epicGun_text_creator = document.createElement("p");
        epicGun_text_creator.setAttribute("id", "epicGun-text");
        if(this.epicGun == ""){
            this.epicGun = 0;
            epicGun_text_creator.innerText = "گان اپیک :" + " " + this.epicGun;
        } else {
            epicGun_text_creator.innerText = "گان اپیک :" + " " + this.epicGun;
        }

        epicGun_frame_creator.appendChild(epicGun_text_creator);

        //create legendGun element
        //__legendGun frame
        var legendGun_frame_creator = document.createElement("div");
        legendGun_frame_creator.setAttribute("id", "legendGun-frame");
        legendGun_frame_creator.className = "legendGun-frame";

        //__legendGun text
        var legendGun_text_creator = document.createElement("p");
        legendGun_text_creator.setAttribute("id", "legendGun-text");
        if(this.legendGun == ""){
            this.legendGun = 0;
            legendGun_text_creator.innerText = "گان لجند :" + " " + this.legendGun;
        } else {
            legendGun_text_creator.innerText = "گان لجند :" + " " + this.legendGun;
        }

        legendGun_frame_creator.appendChild(legendGun_text_creator);

        //create price element
        //__price frame
        var price_frame_creator = document.createElement("div");
        price_frame_creator.setAttribute("id", "price-frame");
        price_frame_creator.className = "price-frame";

        //__price text
        var price_text_creator = document.createElement("p");
        price_text_creator.setAttribute("id", "price-text");
        if(this.price == ""){
            this.price = 0;
            price_text_creator.innerText = "قیمت :" + " " + this.price + " " + "هزار تومان";
        } else {
            price_text_creator.innerText = "قیمت :" + " " + this.price + " " + "هزار تومان";
        }

        price_frame_creator.appendChild(price_text_creator);

        //create vfx element
        //__vfx frame
        var vfx_frame_creator = document.createElement("div");
        vfx_frame_creator.setAttribute("id", "vfx-frame");

        //__vfx video
        var vfx_video_creator = document.createElement("video");
        vfx_video_creator.setAttribute("id", "vfx-video");
        vfx_video_creator.setAttribute("loop", "loop");
        vfx_video_creator.setAttribute("autoplay", "autoplay");
        vfx_video_creator.src = this.vfx;

        vfx_frame_creator.appendChild(vfx_video_creator);

        //create top border
        //__topBorder frame
        var topBorder_frame_creator = document.createElement("div");
        topBorder_frame_creator.setAttribute("id", "top-border-frame");

        //__toBorder image
        var topBorder_image_creator = document.createElement("img");
        topBorder_image_creator.setAttribute("id", "top-border-image");
        topBorder_image_creator.setAttribute("src", this.topBorder);

        topBorder_frame_creator.appendChild(topBorder_image_creator);

        //create bottom border
        //__bottomBorder frame
        var bottomBorder_frame_creator = document.createElement("div");
        bottomBorder_frame_creator.setAttribute("id", "bottom-border-frame");

        //__bottomBorder image
        var bottomBorder_image_creator = document.createElement("img");
        bottomBorder_image_creator.setAttribute("id", "bottom-border-image");
        bottomBorder_image_creator.setAttribute("src", this.bottomBorder);

        bottomBorder_frame_creator.appendChild(bottomBorder_image_creator);

        //append to header
        header.appendChild(logo_frame_creator);
        header.appendChild(code_frame_creator);
        header.appendChild(rigen_frame_creator);
        header.appendChild(topBorder_frame_creator);

        //append to footer
        footer.appendChild(vfx_frame_creator);
        footer.appendChild(legendGun_frame_creator);
        footer.appendChild(epicGun_frame_creator);
        footer.appendChild(battlePass_frame_creator);
        footer.appendChild(price_frame_creator);
        footer.appendChild(bottomBorder_frame_creator);

        //append to insta frame vfx video
        insta_frame.appendChild(vfx_frame_creator);
        
        //add style method
        var style_element = document.getElementById("method-style");
        style_element.setAttribute("href", this.style);

    }
}