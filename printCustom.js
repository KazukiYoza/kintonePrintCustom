(function () {
    "use strict";
    // 印刷画面が表示されたときに動作
    kintone.events.on('app.record.print.show', function(event) {
        $('.row-gaia , .subtable-row-gaia').css('display', 'none');
        let year = new Date().getFullYear();
        //罫線の非表示('control-hr-field-gaia ')
       
        // const fields =[
        //     'stageType',
        //     'schoolName',
        //     'numberOfPeople',
        //     'phoneNumber',
        //     'faxNumber',
        //     'personInCharge',
        //     'groupType',
        // ];

        // const fieldsKana = 
        // ['公演タイプ',
        // '学校名',
        // '人数',
        // '電話番号',
        // 'FAX番号',
        // '担当',
        // '団体種類',
        // ];

        // const fields2 =
        // [
        // 'zipCode',
        // 'progress',
        // 'salesPerson',
        // 'address1',
        // 'address2',
        // 'address3'
        // ];

        // const fields2Kana = 
        // [
        // '郵便番号',
        // '進行状況',
        // '営業担当',
        // '住所',
        // '町名番地',
        // 'ビル名など'
        // ];

        

        // const fields3 =
        // [
        // 'performanceStartDate',
        // 'performanceEndDate',
        // 'performanceWork',
        // "performanceEnterTime",
        // "performanceStartTime1",
        // "performanceStartTime2",
        // "performanceStartTime3",
        // "venueName",
        // "venueAddress",
        // "venuePhoneNumber",
        // "venueFaxNumber",
        // "venueZipCode",
        // "venueCapacity",
        // "venueWidth",
        // "venueDepth",
        // "venueHeight",
        // "venueStartTime",
        // "venueEndTime",
        // "venueInformation",
        // "venueMap",
        // "venueSeat",
        // "venueLighting",
        // "venueSound",
        // "venuePiano",
        // "venueTimeTable"
        // ];

        // const fields3Kana =
        // [
        // '公演開始日',
        // '公演終了日',
        // '公演作品',
        // "入時間",
        // "開演時間1",
        // "開演時間2",
        // "開演時間3",
        // "会場名",
        // "会場住所",
        // "会場電話番号",
        // "会場FAX番号",
        // "会場郵便番号",
        // "キャパシティ",
        // "間口",
        // "奥行き",
        // "高さ",
        // "開始時間",
        // "終了時間",
        // "会場情報",
        // "会場図面",
        // "座席表",
        // "照明設備",
        // "音響設備",
        // "ピアノ調律",
        // "タイムテーブル"
        // ];

        // const fields4 =
        // [
        // "proposedBudget",
        // "decidedProposedBudget",
        // "profit",
        // "performanceFee1st",
        // "unitPrice",
        // "performanceInformation",
        // "contract",
        // "confirmation",
        // "performanceConditionRemarks"
        // ];

        // const fields4Kana =
        // [
        // "提示予算",
        // "決定提示予算",
        // "利益",
        // "公演料金1st",
        // "一人単価",
        // "公演情報送付",
        // "契約",
        // "確認",
        // "公演条件備考"
        // ];

        // const fields5 =
        // [
        //     "受付",
        //     "特記事項"
        // ];

        // const fields5Kana =
        // [
        //     "receptionSpecialNotes",
        //     "specialNotes"
        // ];
        
        // let obj = {};
        // for (let i = 0; i < fields.length; i++) {
        //     let field = fields[i];
        //     obj[field] = fieldsKana[i];
        // }

        const appID = 50; // アプリのID
        const params = { app: appID };
        kintone.api(kintone.api.url('/k/v1/preview/app/form/fields'), 'GET', params, function(response) {
        // レスポンスの処理
        const fields = response.properties;
    
    
        let objects = [];
        for (const fieldCode in fields) {
            if (fields.hasOwnProperty(fieldCode)) {
                let obj = {};
                const field = fields[fieldCode];
                const fieldName = field.label;
                obj[fieldCode] = fieldName;
                objects.push(obj);
            }
        }
        // console.log(objects);
    
        const fieldCodes = [
            'stageType',
            'schoolName',
            'numberOfPeople',
            'phoneNumber',
            'faxNumber',
            'personInCharge',
            'groupType', 
        ];
    
        const fieldCodes2 =
            [
            'zipCode',
            'progress',
            'salesPerson',
            'address1',
            'address2',
            'address3'
            ];
    
            const fieldCodes3 =
            [
            'performanceStartDate',
            'performanceEndDate',
            'performanceWork',
            "performanceEnterTime",
            "performanceStartTime1",
            "performanceStartTime2",
            "performanceStartTime3",
            "venueName",
            "venueAddress",
            "venuePhoneNumber",
            "venueFaxNumber",
            "venueZipCode",
            "venueCapacity",
            "venueWidth",
            "venueDepth",
            "venueHeight",
            "venueStartTime",
            "venueEndTime",
            "venueInformation",
            "venueMap",
            "venueSeat",
            "venueLighting",
            "venueSound",
            "venuePiano",
            "venueTimeTable"
            ];
    
            const fieldCodes4 =
            [
            "proposedBudget",
            "decidedProposedBudget",
            "profit",
            "performanceFee1st",
            "unitPrice",
            "performanceInformation",
            "contract",
            "confirmation",
            "performanceConditionRemarks"
            ];
    
            const fieldCodes5 =
            [
                "receptionSpecialNotes",
                "specialNotes"
            ];
        
        // obj1の中にfieldCodesにあるフィールドコードが含まれているオブジェクトを抽出
        const obj1 = objects.filter(obj => {
            return fieldCodes.some(key => key in obj);
        });
        // console.log(obj1);
        // obj1の中のオブジェクトをfieldCodesの順番に並び替え
        obj1.sort((a, b) => {
            return fieldCodes.indexOf(Object.keys(a)[0]) - fieldCodes.indexOf(Object.keys(b)[0]);
        });
        console.log(obj1);
        // obj2の中にfieldCodes2にあるフィールドコードが含まれているオブジェクトを抽出
        const obj2 = objects.filter(obj => {
            return fieldCodes2.some(key => key in obj);
        });
        // console.log(obj2);
        // obj2の中のオブジェクトをfieldCodes2の順番に並び替え
        obj2.sort((a, b) => {
            return fieldCodes2.indexOf(Object.keys(a)[0]) - fieldCodes2.indexOf(Object.keys(b)[0]);
        });
        console.log(obj2);
        const obj3 = objects.filter(obj => {
            return fieldCodes3.some(key => key in obj);
        });
        const obj4 = objects.filter(obj => {
            return fieldCodes4.some(key => key in obj);
        });
        const obj5 = objects.filter(obj => {
            return fieldCodes5.some(key => key in obj);
        }); 


        $('#record-gaia').append("<div class='print-wrapper'></div>");
        $('.print-wrapper').append("<div class='inner'></div>");
        $('.print-wrapper').prepend(`<h1 class='print-title'>${year}年 問い合わせ情報</h1>`);
        $('.inner').append("<div class='left-box'></div>");
        $('.inner').append("<div class='right-box'></div>");
        $('.left-box').append("<div class='box1'></div>");
        $('.left-box').append("<div class='box2'></div>");
        
        // for(let k in obj1){
        //     let field = Object.keys(obj1[k])[0];
        //     let fieldKana = obj1[k][field];
        //     let el = kintone.app.record.getFieldElement(field);
        //     let elText = el.innerText;
        //     $('.box1').append(`<div class="field field-${field}"><span class="field-name">${fieldKana}</span><span class="field-value">${elText}</span></>`);
        // }
        // for(let k in obj2){
        //     let field = Object.keys(obj2[k])[0];
        //     let fieldKana = obj2[k][field];
        //     let el = kintone.app.record.getFieldElement(field);
        //     let elText = el.innerText;
        //     $('.box2').append(`<div class="field field-${field}"><span class="field-name">${fieldKana}</span><span class="field-value">${elText}</span></>`);
        // }

        const appendFieldData = (obj, boxClass) => {
            for (let k in obj) {
              let field = Object.keys(obj[k])[0];
              let fieldKana = obj[k][field];
              let elText = kintone.app.record.getFieldElement(field).innerText;
              $(`.${boxClass}`).append(`<div class="field field-${field}"><p class="field-name">${fieldKana}</p><p class="field-value">${elText}</p></div>`);
            }
          };

        appendFieldData(obj1, 'box1');
        appendFieldData(obj2, 'box2');        
    });


    

});
})();

