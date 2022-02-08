<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ajax sended data</title>
    <link rel="stylesheet" href="style/general.css">
</head>
<body>
    <form action="action.php" method="post">
        <div>
            <label for="code">کد :</label>
            <input id="code" type="number" name="code">
        </div>
        <div>
            <label for="battle-pass">بتل پس :</label>
            <input id="battle-pass" type="number" name="battlePass">    
        </div>
        <div>
            <label for="rigen">ریجن :</label>
            <select id="rigen" name="rigen">
                <option value="ایران" id="">ایران</option>
                <option value="هند" id="">هند</option>
                <option value="اروپا" id="">اروپا</option>
            </select>
        </div>
        <div>
            <label for="legend-gun">گان لجند :</label>
            <input id="legend-gun" type="number" name="legendGun">
        </div>
        <div>
            <label for="epic-gun">گان اپیک :</label>
            <input id="epic-gun" type="number" name="epicGun">
        </div>
        <div>
            <label for="price">قیمت :</label>
            <input id="price" type="number" name="price">
        </div>
        <div>
            <input id="video" type="file" name="video">
        </div>
        <div>
            <input id="submit" type="submit" name="submit" value="ارسال">
        </div>
    </form>
</body>
    <script type="text/javascript">
        
    </script>

</html>