<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        # variables
        $code = validateData($_POST['code']);
        $battlePass = validateData($_POST['battlePass']);
        $rigen = validateData($_POST['rigen']);
        $legendGun = validateData($_POST['legendGun']);
        $epicGun = validateData($_POST['epicGun']);
        $price = validateData($_POST['price']);
        $video = validateData($_POST['video']);

        $inputsName = array('code', 'battlePass' , 'rigen' , 'legendGun', 'epicGun', 'price', 'video');

        if($_SERVER['REQUEST_METHOD'] == 'POST' && ($code = $battlePass = $rigen = $legendGun = $epicGun = $price = $video) != ""){
            showInfo();
        } else { 
            showError();
        }


    }

    # functions
    function validateData($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    function showInfo(){
        global $inputsName;

        foreach($inputsName as $value){
            echo validateData($_POST[$value]) . "<br>";
        }
    }

    function showError(){
        global $inputsName;
        foreach($inputsName as $value){
            if($_SERVER['REQUEST_METHOD'] && validateData($_POST[$value]) == ""){
                echo $value . ' fiels is empty' . "<br>";
            }
        }
    }
?>