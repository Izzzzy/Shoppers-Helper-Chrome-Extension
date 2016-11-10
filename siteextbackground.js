//chrome.pageAction.show(chrome.tabs.getSelected(null, function(tab) {

//    chrome.pageAction.show(tab.id);

//}));


//chrome.tabs.onUpdated.addListener(checkForValidUrl);

//function checkForValidUrl(tabId, changeInfo, tab) {
//    var good = false;

//    if (tab.url.substr(0, 77) === "https://sellercentral.amazon.com/fba/profitabilitycalculator/index?lang=en_US") {

//        var timerId = setInterval(function () {
//            chrome.tabs.executeScript(null, { file: "content.js" });

//            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//                chrome.tabs.sendMessage(tabs[0].id, { greeting: "calculated?" }, function (response) {

//                    if (response.calculated === "true") {
//                        chrome.pageAction.show(tabId);
//                        clearInterval(timerId);

//                    }
//                });
//            });

//        }, 200);
//    };
//};

//chrome.browserAction.onClicked.addListener(function (activeTab) {
//    var newURL = "http://stackoverflow.com/";
//    chrome.tabs.create({ url: newURL });
//});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting == "open-calculator") {
            //var newURL = "https://sellercentral.amazon.com/fba/profitabilitycalculator/index?lang=en_US";
            //chrome.tabs.create({ url: newURL });
            var action = request.action;
            var asin = request.asin;
            var amount = request.amount;
            //alert(action);
            var timerId = setInterval(function () {
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

                    chrome.tabs.sendMessage(tabs[0].id, { greeting: "loaded?" }, function (response) {
                        if (response.loaded === 'true') {
                            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                                chrome.tabs.sendMessage(tabs[0].id, { greeting: "calculate", action: action, asin: asin, amountToEnter: amount });
                            });
                            clearInterval(timerId);
                        }
                    }
                    )
                })
            }, 400);

        } else if (request.greeting === 'populate-search-text') { // newpopup.js line 40

            //var searchtext = request.searchtext;
            //var upc = request.upc;
            //var modelNumber = request.modelNumber;
            var identifiers = request.identifiers;
            var productAndSiteInfo = request.productAndSiteInfo;
            //chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var tabId = tabs[0].id;
                chrome.tabs.onUpdated.addListener(function (tabId, info) {
                    if (info.status == "complete") {

                        // going to sitecontent.js line 6
                        //chrome.tabs.sendMessage(tabId, { greeting: "search-text", search: searchtext,upc:upc,modelNumber: modelNumber});
                        chrome.tabs.sendMessage(tabId, { greeting: "search-text", identifiers: request.identifiers, productAndSiteInfo: productAndSiteInfo });

                    }
                });
            });
        } else if (request.greeting === 'populate-just-first-search-text') { // newpopup.js line 40

            var searchtext = request.text;
            var upc = request.upc;
            var modelNumber = request.modelNumber;
            var productAndSiteInfo = request.productAndSiteInfo;
            //chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var tabId = tabs[0].id;
                chrome.tabs.onUpdated.addListener(function (tabId, info) {
                    if (info.status == "complete") {

                        // going to sitecontent.js line 6
                        //chrome.tabs.sendMessage(tabId, { greeting: "search-text", search: searchtext,upc:upc,modelNumber: modelNumber});
                        chrome.tabs.sendMessage(tabId, { greeting: "just-first-search-text", stext: searchtext });

                    }
                });
            });
            //} else if (request.greeting === 'Make page active') {
            //    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            //        chrome.pageAction.show(tabs[0].id);
            //    });
        } else if (request.greeting === 'change color') {
            chrome.browserAction.setIcon({ path: "orangeicon.png" });
        }

    });

//var timerId = setInterval(function() {
//    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//        chrome.tabs.sendMessage(tabs[0].id, { greeting: "site-page-loaded?" }, function(response) {
//            if (response.loaded === 'true') {
//                chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//                    chrome.tabs.sendMessage(tabs[0].id, { greeting: "search-text", search: request.searchtext });
//                });
//                clearInterval(timerId);
//            }
//        })
//    });
//}, 200);

//chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//chrome.runtime.onMessage.addListener(
//    function (request, sender, sendResponse) {
//        if (request.greeting === 'site-page-loaded') {
//            sendResponse({ searchText: searchtext });
//        }

//    }
//    //chrome.tabs.sendMessage(tabs[0].id, { greeting: "search-text", search: request.searchtext });
//);



