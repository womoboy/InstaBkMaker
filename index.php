<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InstaBkMaker</title>

    <link rel="stylesheet" href="asset/style/index.css">
    
    <!--add Method styels-->
    <link rel="stylesheet" id="method-style">
</head>
<body>
    <section>
        <div class="container form-frame">
            <div>
                <label for="code">کد :</label>
                <input type="number" id="code" name="code">
            </div>
            <div>
                <label for="battle-pass">بتل پس :</label>
                <input type="number" id="battle-pass" name="battle-pass">
            </div>
            <div>
                <label for="rigen-list">ریجن :</label>
                <select id="rigen-list">
                    <option value="ایران">ایران</option>
                    <option value="هند">هند</option>
                    <option value="اروپا">اروپا</option>
                </select>
            </div>
            <div>
                <label for="epic-gun">گان اپیک :</label>
                <input type="number" id="epic-gun">
            </div>
            <div>
                <label for="legend-gun">گان لجند :</label>
                <input type="number" id="legend-gun">
            </div>
            <div>
                <label for="price">قیمت :</label>
                <input type="number" id="price">
            </div>
            <div>
                <label for="method">افکت :</label>
                <select id="method-list" onchange="goMethod()">
                    <option value="method-none">بدون متد</option>
                    <option value="method-1">متد-1</option>
                    <option value="method-2">متد-2</option>
                    <option value="method-3">متد-3</option>
                </select>
            </div>
            <div class="solo">
                <label id="video-label" for="video">ویدیو را انتخاب کنید</label>
                <input type="file" id="video" accept="video/*" onchange="upload();">
            </div>
            <div class="solo">
                <button id="start-btn" onclick="action();">اجرا</button>
            </div>
        </div> 
    </section>

    <section>
        <div class="container insta-frame">
            <header id="header">

            </header>
            <video id="video-frame"></video>
            <footer id="footer">
                
            </footer>
        </div>
    </section>

    <section>
        <div class="log-box"></div>
    </section>

    <script src="asset/js/jquery-3.6.0.min.js"></script>
    <script src="asset/js/cus-script.js"></script>
</body>
</html>