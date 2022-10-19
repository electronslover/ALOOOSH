 function chkName() {
       var myName = document.getElementById("name1");
       var pos = myName.value.search(
       /^[A-Z][a-z]/);
       if (pos != 0) {
           alert("المعلومات  التي ادخلتها (" + myName.value +
       ") غير صالح . \n" +
      
       "الرجاء الادخال  باللغة الانكليزية مع مراعاة الحرف الاول كبير");
           myName.focus();
           myName.select();
           return false;
       } else
          
           return true;
   }
function chkPhone() {
    var myPhone = document.getElementById("phon");
    var pos = myPhone.value.search(/09-\d{4}-\d{4}/);
    if (pos != 0) {
        alert("الرقم الذي ادخلته (" + myPhone.value +
        ") لا يطابق تنسيق رقم موبايل. \n" +
        "التنسق الصحيح : 09-nnnn-nnnn \n" +
        "الرجاء ادخال تنسيق رقم موبايل صحيح");
        myPhone.focus();
        myPhone.select();

        return false;
    } else
        return true;
}
function chkDate() {
    var mydate = document.getElementById("date");
    var pos = mydate.value.search(/^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/);
    if (pos != 0) {
        alert("التاريخ الذي ادخلته (" + mydate.value +
") غير صحيح. \n" +
"تنسيق التاريخ الواجب ادخاله: dd/mm/yyyy \n" +
"الرجاء ادخال تنسيق تاريخ صحيح");
        mydate.focus();
        mydate.select();
        return false;
    } else   
        return true;    
}
function chkNumber() {
    var mynum = document.getElementById("num");
    var pos = mynum.value.search(/[11]?\d\d{10}/);
    if (pos != 0) {
        alert("الرقم الذي ادخلته (" + mynum.value +
") رقم وطني غير صالح. \n" +
"التنسيق الصحيح للرقم الوطني: nnnnnnnnnnn \n" +
"يرجى ادخال رقم وطني صالح");
        mynum.focus();
        mynum.select();
        return false;
    } else
        return true;
}

function ValidateEmail() {
    var email = document.getElementById("eml");
    var pos = email.value.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pos != 0) {
        alert("ادخلت عنوان ايميل غير صالح!");
       
        email.focus();
        email.select();
        return false;
    } else
        return true;
     
    }

    //Created / Generates the captcha function    
    function DrawCaptcha() {
        var a = Math.ceil(Math.random() * 10) + '';
        var b = Math.ceil(Math.random() * 10) + '';
        var c = Math.ceil(Math.random() * 10) + '';
        var d = Math.ceil(Math.random() * 10) + '';
        var e = Math.ceil(Math.random() * 10) + '';
        var f = Math.ceil(Math.random() * 10) + '';
        var g = Math.ceil(Math.random() * 10) + '';
        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
        document.getElementById("txtCaptcha").value = code
    }

    // Validate the Entered input aganist the generated security code function   
    function ValidCaptcha() {
        var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
        var str2 = removeSpaces(document.getElementById('txtInput').value);
        if (str1 == str2) return true;
        return false;

    }

    // Remove the spaces from the entered and generated code
    function removeSpaces(string) {
        return string.split(' ').join('');
    }

    function getParams()  {
        var idx = document.URL.indexOf('?'); 
        var params = new Array(); 
        if (idx != -1)  
        {var pairs = document.URL.substring(idx+1, document.URL.length).split('&'); 
            for (var i=0; i<pairs.length; i++){nameVal = pairs[i].split('='); 
                params[nameVal[0]] = nameVal[1];}} 
       
        return params;}params = getParams(); 
        fname = unescape(params["ta1"]);
        mname = unescape(params["tb1"]);
        lname = unescape(params["tc1"]);
     num = unescape(params["t2"]);
     birth = unescape(params["birth"]);
     phone = unescape(params["phon"]);
     email = unescape(params["email"]);
     num1 = unescape(params["num1"]);
     SelectFlag1 = unescape(params["SelectFlag1"]);
     SelectFlag2 = unescape(params["SelectFlag2"]);
     SelectFlag3 = unescape(params["SelectFlag3"]);
   
        



   document.getElementById("name1").onchange = chkName;
   document.getElementById("name2").onchange = chkName;
   document.getElementById("name3").onchange = chkName;
    document.getElementById("phon").onchange = chkPhone;
    document.getElementById("date").onchange = chkeDate;
    document.getElementById("num").onchange = chkeNumber;
    document.getElementById("eml").onchange = ValidateEmail;

    function alertonclick() {
        alert("يعد حساب التوفير الأساسي مجرد مكان للاحتفاظ بالمال، ويمكن الإيداع في الحساب بالقدر المرغوب به، وكسب الفائدة، وأخذ الأموال عند الحاجة إليه");
    }
    function alertonclick1() {
        alert("هو حساب مصرفي من دون فوائد يتيحُ للعميل القيام بالعديد من العمليات المصرفيّة التقليدية كالإيداع والسحب من أجهزة الصراف الآلي من خلال بطاقة السحب التي يمكن استخدامها أيضاً لدفع قيمة المشتريات لدى نقاط البيع في أيّ وقت وذلك بحدود الرصيد المتوفر في الحساب، كما يمكن من خلاله تحرير الشيكات للدفع بواسطتها أو تحصيلها، وكذلك دفع فواتير الخدمات من الحساب الجاري مباشرةً عن طريق الخدمة المصرفيّة الهاتفية أو عبر الإنترنت.");
    }
    function alertonclick2() {
        alert("القرض التعليمي موجه لجميع أفراد المجتمع الراغبين بالحصول على القرض لغاية تعليمية، وتكون المبالغ الممنوحة بحد أدنى 250,000 ل.س ولغاية 18,000,000 ل.س بسعر فائدة 10% سنوياً ولمدة زمنية تتراوح من 6 أشهر ولغاية 60 شهراً للمبالغ دون 5 ملايين ليرة سورية ولغاية 96 شهراً للمبالغ التي تزيد عن 5 ملايين ليرة سورية");
    }
    function alertonclick3() {
        alert(" هو قرض يمنحه البنك بهدف شراء منزل حيث يتم استخدام المنزل أو العقار الذي تشتريه كشكل من أشكال ضمان القرض في حال عدم قدرتك على السداد سيحتفظ البنك بسند الملكية الخاص بك إلى أن يتم سداد القرض بالكامل");
    }
    function alertonclick5() {
        alert("تمنح المؤسسة القروض للمشاريع الزراعية المنتجة , وبخاصه ما يهدف منها الى احياء الاراضي الزراعيه وشرائها واصلاحها , كالتجدير والحراثة العميقة, والقلابة, ومشاريع الري والصرف وغرس الاشجار وزراعة الخضار ومحاصيل العلف والحبوب والمحاصيل الصناعية وتربية الحيوانات المنتجة والدواجن , والنحل والاسماك وكل ما يؤول الى زيادة الثروة الحيوانية والتوسع الزراعي");
    }
    function alertonclick6() {
        alert("يهدف هذه البرنامج إلى تمويل شراء وسائط النقل ( تاكسي، سرفيس، قلاب، صهاريج، الاليات الانشائية المرخصة) ضمن شروط ومعايير تتعلق بالمركبات العمومية");
    }
    function alertonclick7() {
        alert("يستهدف قرض الطموح الأفراد الذين بحاجة إلى تمويل أعمالهم الخاصة بما في ذلك الشركات المرخصة وغير المرخصة، والمشاريع المنزلية المرخصة وغير المرخصة بالإضافة المشاريع الناشئة بإمكان الأفراد/العملاء من ذوي الإعاقة الاستفادة من كافة الخدمات والمنتجات المقدمة من قبل شركة الأهلي وبما يتماشى مع السياسات الداخلية");
    }
    function alertonclick4() {
        alert("إن القرض التجاري هو عادة ما يكون قرض يغطي الاحتياجات التمويلية لسلسلة التوريد ابتداءً من وقت شراء البضائع حتى بيعها. وهذا النوع من القروض مثالي للشركات التي تستورد السلع، المواد الخام الأخرى والأجزاء التي يتم تعديلها وبيعها للمشترين المؤكدين، ولكن ليست لديها السيولة لرصد مبلغ كافٍ لمجمل العملية التجارية. و يمكن استخدام هذا التمويل في الحالات التي تحتاج فيها المؤسسات إلى الوقت لبيع البضائع التي استوردتها.");
    }