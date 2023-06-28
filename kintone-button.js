(function() {
    'use strict';
    kintone.events.on('app.record.detail.show', function(event) {
        new kintone.Promise(function(resolve, reject) {
            let button = new kintoneUIComponent.Button({text: '印刷画面へ'});
            let elPrintButton = kintone.app.record.getSpaceElement('printButton');
            elPrintButton.appendChild(button.render());
            resolve(button);
            return;
        })
        .then(function (UiButton) {
            let url = kintone.api.url('/k/v1/records', true);
            let reg = /http(s)?:\/\/([\w-]+\.)+([\w-]+)+\/([\w-]+)/;
            console.log(url.match(reg));
            let appId = kintone.app.getId();
            console.log(appId);
            let body = {'id': appId};
            kintone.api(kintone.api.url('/k/v1/app', true), 'GET', body, function(resp) {
                // success
                console.log(resp);
                let printURL = url.match(reg)[0] + '/' + resp.appId + '/print?record=' + event.recordId;
                console.log(printURL);
                UiButton.on('click', function(event) {
                    window.open(printURL, null);
                });
            });
        });
    });
})();