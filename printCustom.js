(function () {
    "use strict";
    // 印刷画面が表示されたときに動作
    kintone.events.on('app.record.print.show', function(event) {
        $('.row-gaia , .subtable-row-gaia').css('display', 'none');
        let year = new Date().getFullYear();
        //罫線の非表示('control-hr-field-gaia ')
       
        const fields = 
        ['公演タイプ',
        '学校名',
        '人数',
        '電話番号',
        'FAX番号',
        '担当',
        '団体種類',
        ];
        const fieldsKey =
        ['stageType',
        'schoolName',
        'numberOfPeople',
        'phoneNumber',
        'faxNumber',
        'personInCharge',
        'groupType',
        ];

        let objFields = {};
        for (let i = 0; i < fields.length; i++) {
            let field = fields[i];
            objFields[fieldsKey[i]] = field;
        }

        console.log(objFields);

        const fields2 = 
        [
        '郵便番号',
        '進行状況',
        '営業担当',
        '営業担当',
        '住所',
        '町名番地',
        'ビル名など'
        ];
        $('#record-gaia').append("<div class='print-wrapper'></div>");
        $('.print-wrapper').append("<div class='inner'></div>");
        $('.print-wrapper').prepend(`<h1 class='print-title'>${year}年 問い合わせ情報</h1>`);
        $('.inner').append("<div class='left-box'></div>");
        $('.inner').append("<div class='right-box'></div>");
        $('.left-box').append("<div class='box1'></div>");
        for (let i = 0; i < objFields.length; i++) {
            let field = objFields[i].value;
            let el = kintone.app.record.getFieldElement(field);
            let elText = el.innerText;
            $('.box1').append(`<div class="field field-${objFields[i].key}"><span class="field-name">${field}</span><span class="field-value">${elText}</span></div>`);
        }
        $('.left-box').append("<div class='box2'></div>");
        for (let i = 0; i < fields2.length; i++) {
            let field = fields2[i];
            let el = kintone.app.record.getFieldElement(field);
            let elText = el.innerText;
            $('.box2').append(`<div class="field field-${i}"><span class="field-name">${field}</span>${elText}</div>`);
        }
    });
})();
