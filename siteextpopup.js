// JavaScript source code
var identifiers = {};
var productAndSiteInfo = {};
//alert('hi');
document.addEventListener('DOMContentLoaded', function () {
    $('#stores-big-div').height(
        $(window).height() - $('#first-part').height() - 7
    );
    chrome.tabs.query(
        { url: '*://*/*', currentWindow: true },
    function (tabArray) {
        var myTabs = tabArray.filter(function (item) {
            return item.url.indexOf('camefromshoppershelper') > -1;
        });
        var ids = myTabs.map(function (v) {
            return v.id;
        });
        if (ids.length > 0) {
            //alert('hi');
            $('body').prepend('<button id="x-out-tabs" class="close btn btn-danger btn-xs"style="margin-right:30px;">&times;</button>');
            $('#stores-big-div').height(
                $(window).height() - $('#first-part').height() - 7
            );
        }
        $('body #x-out-tabs').click(function () {
            chrome.tabs.remove(ids, function () { });
        });
        //chrome.tabs.remove(ids, function () { });
    }
);


    //chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

    chrome.tabs.executeScript(null, { file: "allcontent.js" });
    //    chrome.tabs.executeScript(tabs[0].id, { file: "allcontent.js" });

    //});
    //    chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
    //   function (tabs) {
    //       if (url_domain(tabs[0].url).indexOf('amazon.com') > -1) {
    //           $('#search-term').val(tabs[0].url);
    //       }
    //   }
    //);

    //chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //    chrome.tabs.sendMessage(tabs[0].id, { greeting: "give product info" }, function (response) {
    //        //console.log(response.farewell);

    //    });
    //});

    // from amazoninfocontent.js line 39
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {

            if (request.greeting === 'I have info!') {

                $('#search-term').val(request.productName);
                // not sure if works

                $('#UPCCode').val(request.UPCCode);
                $('#model-number').val(request.modelNumber);

            } else if (request.greeting === 'Amazon product page!') {
                //alert('hi');
                var prefillRegPrice = request.prefillRegPrice;
                if (!$('#amount-to-calculate').length) {
                    $('#sell-div').append('<div id="sellers-helper-div" class="well" style="text-align:center;"><h4 id="sellers-helper-heading">Online Seller\'s Helper<h4><span style="font-size:10pt; margin-top:18px;">Quick search ' + request.quickSearchInfo.searchtype.replace('Product', 'Product Name').toUpperCase() +
                        ' on: <br/></span><a href="ebayLink' + request.quickSearchInfo.searchterm + '" target="_blank" class="btn btn-danger btn-xs" style="margin-top:8px;' +
                        ' width:55.44px;">Ebay</a><br/><br/><h5 style="margin-top:18px;">FBA Calculator<h5>$<input type="text"class="form-control" style="width:100px;display:inline;" id="amount-to-calculate" placeholder="' + prefillRegPrice.replace('$', '') +
                        '"> <h5><h5> <a href="https://sellercentral.amazon.com/fba/profitabilitycalculator/index?lang=en_US" target="_blank" class="btn btn-warning btn-xs"style="width:60.14px;" id="rev-calculate">Reverse</a> <a href="https://sellercentral.amazon.com/fba/profitabilitycalculator/index?lang=en_US" ' +
                        'target="_blank" class="btn btn-primary btn-xs" id="reg-calculate">Calculate</a></div>')
                }
                if (request.bsr !== '' && !$('#bsr').length) {
                    $('#sell-div .well').append('<br/><h6 id="bsr">(Best Sellers Rank<h6>' + request.bsr.replace(/ *\([^)]*\) */g, "<br/>") + ')');
                }

                //$('#sellers-helpers-well').append('</div>');

                if ($('#amount-to-calculate').val() === '' && $('#amount-to-calculate').attr('placeholder') !== '') {
                    input = $('#amount-to-calculate').attr('placeholder');
                }

                $('#amount-to-calculate').on('input', function () {

                    input = $('#amount-to-calculate').val();
                    input = input.replace(' ', '');
                    var origInput = input;
                    input = input.replace(/[^\d.]+/g, '');
                    var sub = input.replace(/[^\.]+/g, '');

                    if (!sub.search('..')) {
                        input = input.slice(0, -1);
                        sub = sub.slice(0, -1);
                    }

                    $('#amount-to-calculate').val(input);

                    if (input.length === 0 && $('#amount-to-calculate').attr('placeholder') !== '') {
                        input = $('#amount-to-calculate').attr('placeholder');
                    }

                    if ((input.length > 0 && sub.search('..') && input !== '.' && origInput.match(/^[0-9.,$]+$/)) || ($('#amount-to-calculate').val() === '' && $('#amount-to-calculate').attr('placeholder') !== '')) {

                        $('#rev-calculate').prop('disabled', false);
                        $('#reg-calculate').prop('disabled', false);
                    } else {
                        $('#rev-calculate').prop('disabled', true);
                        $('#reg-calculate').prop('disabled', true);
                    }
                });

                $('#reg-calculate').click(function () {
                    var asin = request.asin;
                    //alert(asin);
                    chrome.runtime.sendMessage({ greeting: "open-calculator", asin: asin, action: 'reg', amount: input });
                });

                $('#rev-calculate').click(function () {
                    var asin = request.asin;
                    //alert(asin);
                    chrome.runtime.sendMessage({ greeting: "open-calculator", asin: asin, action: 'rev', amount: input });
                });

                //} else if (request.greeting === 'Regular product page') {
                //    if (!$('#sellers-helper-div').length) {
                //        $('.container').append('<div id="sellers-helper-div" class="well" style="text-align:center;"><h4>Online Seller\'s Helper<h4><span style="font-size:10pt;">Quick search ' + request.searchtype.replace('Product', '') + ' on: <br/></span><a href="https://www.amazon.com/s/?field-keywords=' + request.searchterm + '" target="_blank" class="btn btn-success btn-xs">Amazon</a> <a href="http://www.ebay.com/sch/i.html?_nkw=' + request.searchterm + '" target="_blank" class="btn btn-danger btn-xs">Ebay</a></div>');
                //    }


                //}else if (request.greeting === 'Ebay product page') {
                //    if (!$('#sellers-helper-div').length) {
                //        $('.container').append('<div id="sellers-helper-div" class="well" style="text-align:center;"><h4>Online Seller\'s Helper<h4><span style="font-size:10pt;">Quick search ' + request.searchtype.replace('Product','') + ' on: <br/></span><a href="https://www.amazon.com/s/?field-keywords=' + request.searchterm + '" target="_blank" class="btn btn-success btn-xs">Amazon</a></div>');
                //    }

            } else if (request.greeting === 'identifiers') {
                //alert('hi');
                //if (!$('#sellers-helper-div').length && request.quickSearchInfo.greeting === 'Ebay product page') {
                //    $('#sell-div').append('<div id="sellers-helper-div" class="well" style="text-align:center;"><h4>Online Seller\'s Helper<h4><span style="font-size:10pt;">Quick search ' + request.quickSearchInfo.searchtype.replace('Product', 'Product Name').toUpperCase() + ' on: <br/></span><a href="https://www.amazon.com/s/?field-keywords=' + request.quickSearchInfo.searchterm + '" target="_blank" class="btn btn-success btn-xs" style="margin-top:8px;">Amazon</a></div>');
                //} else if (!$('#sellers-helper-div').length && request.quickSearchInfo.greeting === 'Regular product page') {
                //    $('#sell-div').append('<div id="sellers-helper-div" class="well" style="text-align:center;"><h4>Online Seller\'s Helper<h4><span style="font-size:10pt;">Quick search ' + request.quickSearchInfo.searchtype.replace('Product', 'Product Name').toUpperCase() + ' on: <br/></span><a id="ebay-button" href="ebayLink' + request.quickSearchInfo.searchterm + '" target="_blank" class="btn btn-danger btn-xs" style="margin-top:8px; width:55.44px;">Ebay</a> <a id="amazon-button" href="https://www.amazon.com/s/?field-keywords=' + request.quickSearchInfo.searchterm + '" target="_blank" class="btn btn-success btn-xs" style="margin-top:8px;">Amazon</a><br/><button id="both-button" class="btn btn-default btn-xs" style="margin-top:8px; width:55.44px;">Or Both</button></div>');
                //}
                identifiers = request.identifiers;
                productAndSiteInfo = request.productAndSiteInfo;
                var idText = '';

                if (identifiers[0] !== "undefined") {
                    $('#search-text').val(identifiers[0].searchTerm);
                    $('#primary-search-name').val(identifiers[0].searchName);
                    setMainLinks();
                    $('.btn-primary.btn-xs').html(identifiers[0].searchName);
                    $('.btn-primary.btn-xs.primary-search-link').show();
                }
                if (identifiers[1] !== "undefined") {
                    //alert(identifiers[1].searchName);
                    $('#upc-code').val(identifiers[1].searchTerm);
                    $('#second-search-name').val(identifiers[1].searchName);
                    setUpcLinks();
                    $('.btn-second-search.btn-warning.btn-xs').html(identifiers[1].searchName);
                    $('#second-search-div').show();
                    //alert($('#first-part').height());
                    $('#stores-big-div').height(
    $(window).height() - $('#first-part').height() - 7
);
                    $('.btn-second-search.btn-warning.btn-xs').show();
                }
                if (identifiers[2] !== "undefined") {
                    //alert(identifiers[2].searchName);
                    $('#model-number').val(identifiers[2].searchTerm);
                    $('#third-search-name').val(identifiers[2].searchName);
                    setModelNumberLinks();
                    $('.btn-third-search.btn-info.btn-xs').html(identifiers[2].searchName);
                    $('#third-search-div').show();
                    $('#stores-big-div').height(
    $(window).height() - $('#first-part').height() - 7
);
                    $('.btn-third-search.btn-info.btn-xs').show();
                }

                //if (identifiers[0] !== "undefined") {
                //    //$('#product-search-div').cssFloat("outline", "1px solid black");
                //    //alert(identifiers[0].searchName);
                //    idText = 'Search this ' + identifiers[0].searchName.toUpperCase() + ' on OnineShoppersHelper.com';
                //    if (!$('#product-search-div h4').length) {
                //        $('#product-search-div').append('<h4>' + idText.replace('PRODUCT', 'PRODUCT NAME') + '<h4>' +
                //       '<a id="search-on-site" href="http://onlineshoppershelper.com" target="_blank" class="btn btn-warning" style="margin-bottom: 15px;">Search</a>')
                //    }


                //}
                //if (identifiers[1] !== "undefined") {
                //    //alert(identifiers[1].searchName);
                //    idText = 'Search this ' + identifiers[0].searchName.toUpperCase() + ' and ' + identifiers[1].searchName.toUpperCase() + ' on OnineShoppersHelper.com';
                //    $('#product-search-div h4').remove();
                //    $('#product-search-div a').remove();
                //    $('#product-search-div').append('<h4>' + idText.replace('PRODUCT', 'PRODUCT NAME') + '<h4>' +
                //        '<a id="search-on-site" href="http://onlineshoppershelper.com" target="_blank" class="btn btn-warning" style="margin-bottom: 15px;">Search</a>')

                //}
                //if (identifiers[2] !== "undefined") {
                //    //alert(identifiers[2].searchName);
                //    idText = 'Search this ' + identifiers[0].searchName.toUpperCase() + ', ' + identifiers[1].searchName.toUpperCase() + ' and ' + identifiers[2].searchName.toUpperCase() + ' on OnineShoppersHelper.com';
                //    $('#product-search-div h4').remove();
                //    $('#product-search-div a').remove();
                //    $('#product-search-div').append('<h4>' + idText.replace('PRODUCT', 'PRODUCT NAME') + '<h4>' +
                //        '<a id="search-on-site" href="http://onlineshoppershelper.com" target="_blank" class="btn btn-warning" style="margin-bottom: 15px;">Search</a>')

                //}


                //$('#product-search-div').append('<h4>' + idText + '<h4>' +
                //    '<a id="search-on-site" href="http://www.onlineshoppershelper.com" target="_blank" class="btn btn-warning" style="margin-bottom: 15px;">Search</a>')

                //$('#search-term').val(identifiers[0].searchTerm);
                //alert(identifiers[0].searchTerm);
                // not sure if works
                //$('#UPCCode').val(request.UPCCode);
                //$('#model-number').val(request.modelNumber);
            }
        });
    $('.container').on('click', '#both-button', function () {
        $('.container #ebay-button')[0].click();
        $('.container #amazon-button')[0].click();
    });
    $('#search-term').focus();

    $("body").keydown(function (e) {
        if (e.keyCode === 13 && $("#search-term").is(":focus")) {
            $('#plain-search-on-site')[0].click();
        }
    });
    $('#product-search-div').on('click', 'a', function () {
        //alert('hi');
        var searchText = $('#search-term').val();
        var upc = $('#UPCCode').val();
        var modelNumber = $('#model-number').val();
        // to background.js line 63
        //chrome.runtime.sendMessage({ greeting: "populate-search-text", searchtext: searchText, upc: upc, modelNumber: modelNumber });
        chrome.runtime.sendMessage({ greeting: "populate-search-text", identifiers: identifiers, productAndSiteInfo: productAndSiteInfo });
    });
    $('#plain-search-on-site').click(function () {
        //alert('hi');
        var searchText = $('#search-term').val();
        //var upc = $('#UPCCode').val();
        //var modelNumber = $('#model-number').val();
        // to background.js line 63
        //chrome.runtime.sendMessage({ greeting: "populate-search-text", searchtext: searchText, upc: upc, modelNumber: modelNumber });
        chrome.runtime.sendMessage({ greeting: "populate-just-first-search-text", text: searchText });
    });
});

function url_domain(data) {
    var a = document.createElement('a');
    a.href = data;
    return a.hostname;
}

function setMainLinks() {
    if ($('#search-text').val().length) {

        $(".primary-search-link").each(function () {
            var $this = $(this);
            var _href = $this.closest('.store-div').data("search-link");
            var appendThis = '';
            if (typeof $this.closest('.store-div').data("append-to-search-link") !== 'undefined') {
                appendThis = $this.closest('.store-div').data("append-to-search-link");
            }
            if ($this.closest('.store-div').attr('id') === 'staples-div') {
                $this.attr("href", _href + $('#search-text').val().trim().replace(' ', '+').replace('&', '%26') + '/directory_' + $('#search-text').val().trim().replace(' ', '%2520'));
            } else if ($this.closest('.store-div').attr('id') === 'jcpenny-div') {
                $this.attr("href", _href + $('#search-text').val().trim().replace('&', '%26') + '?Ntt=' + $('#search-text').val().trim());
            } else {
                $this.attr("href", _href + $('#search-text').val().replace('&', '%26') + appendThis);
            }
        });

    } else {

        $('#amazon-link').attr('href', 'http://www.amazon.com');
        $('#ebay-link').attr('href', ebayLink);
        //$('#target-link').attr('href', 'http://goto.target.com/c/325851/81938/2092');
        $('#target-link').attr('href', 'http://www.target.com');
        $('#bestbuy-link').attr('href', 'http://click.linksynergy.com/fs-bin/click?id=m*/k*5ti41w&subid=&offerid=448595.1&type=10&tmpid=13128&RD_PARM1=http%3A%2F%2Fwww.bestbuy.com');
        $('#kmart-link').attr('href', 'http://www.kmart.com');
        $('#walmart-link').attr('href', 'http://www.walmart.com');
        $('#toysrus-link').attr('href', 'http://www.toysrus.com');
        $('#officedepot-link').attr('href', 'http://www.officedepot.com');
        $('#staples-link').attr('href', 'http://www.staples.com');
        $('#bedbathandbeyond-link').attr('href', 'http://www.bedbathandbeyond.com');
        $('#lowes-link').attr('href', 'http://www.lowes.com');
        $('#newegg-link').attr('href', 'http://www.newegg.com');
        $('#nordstrom-link').attr('href', 'http://www.nordstrom.com');
        $('#6pm-link').attr('href', 'http://www.6pm.com');
        $('#groupon-link').attr('href', 'http://www.groupon.com');
        $('#tigerdirect-link').attr('href', 'http://www.tigerdirect.com');
        $('#rakuten-link').attr('href', 'http://www.rakuten.com');
        $('#thinkgeek-link').attr('href', 'http://www.thinkgeek.com');
        $('#bloomingdales-link').attr('href', 'http://www.bloomingdales.com');
        $('#guess-link').attr('href', 'http://www.guess.com');
        $('#fryselectronics-link').attr('href', 'http://www.fryselectronics.com');
        $('#samsclub-link').attr('href', 'http://www.samsclub.com');
        $('#macys-link').attr('href', 'http://www.macys.com');
        $('#jcpenny-link').attr('href', 'http://www.jcpenny.com');
        $('#gap-link').attr('href', 'http://www.gap.com');
        $('#oldnavy-link').attr('href', 'http://www.oldnavy.gap.com');
        $('#overstock-link').attr('href', 'http://www.overstock.com');
        $('#sears-link').attr('href', 'http://www.sears.com');
        $('#buydig-link').attr('href', 'http://www.buydig.com');
        $('#kohls-link').attr('href', 'http://www.kohls.com');
        $('#homedepot-link').attr('href', 'http://www.homedepot.com');
        $('#hdsupplysolutions-link').attr('href', 'http://www.hdsupplysolutions.com');
        $('#advanceautoparts-link').attr('href', 'http://www.advanceautoparts.com');
        $('#autozone-link').attr('href', 'http://www.autozone.com');
        $('#wayfair-link').attr('href', 'http://www.wayfair.com');
        $('#oshkosh-link').attr('href', 'http://www.oshkosh.com');
        $('#childrensplace-link').attr('href', 'http://www.childrensplace.com');
        $('#adorama-link').attr('href', 'http://www.adorama.com');
        $('#gilt-link').attr('href', 'http://www.gilt.com');
        $('#nordstromrack-link').attr('href', 'http://www.nordstromrack.com');
        $('#neimanmarcus-link').attr('href', 'http://www.neimanmarcus.com');
        $('#lastcall-link').attr('href', 'http://www.lastcall.com');
        $('#papermart-link').attr('href', 'http://www.papermart.com');
        $('#saksfifthavenue-link').attr('href', 'http://www.saksfifthavenue.com');
        $('#saksoff5th-link').attr('href', 'http://www.saksoff5th.com');
        $('#homeclick-link').attr('href', 'http://www.homeclick.com');

    }
};

function setUpcLinks() {
    // did not validate the other way yet with else though may not be necessary
    if ($('#upc-code').val().length) {
        $(".upc-link").each(function () {
            var $this = $(this);
            var _href = $this.closest('.store-div').data("search-link");
            var appendThis = '';
            if (typeof $this.closest('.store-div').data("append-to-search-link") !== 'undefined') {
                appendThis = $this.closest('.store-div').data("append-to-search-link");
            }
            if ($this.closest('.store-div').attr('id') === 'staples-div') {
                $this.attr("href", _href + $('#upc-code').val().trim().replace(' ', '+').replace('&', '%26') + '/directory_' + $('#upc-code').val().trim().replace(' ', '%2520'));
            } else if ($this.closest('.store-div').attr('id') === 'jcpenny-div') {
                $this.attr("href", _href + $('#upc-code').val().trim().replace('&', '%26') + '?Ntt=' + $('#upc-code').val().trim());
            } else {
                $this.attr("href", _href + $('#upc-code').val().replace('&', '%26') + appendThis);
            }
        });
    }
}

function setModelNumberLinks() {
    // did not validate the other way yet with else though may not be necessary
    if ($('#model-number').val().length) {

        if ($('#model-number').val().length) {
            $(".model-link").each(function () {
                var $this = $(this);
                var _href = $this.closest('.store-div').data("search-link");
                var appendThis = '';
                if (typeof $this.closest('.store-div').data("append-to-search-link") !== 'undefined') {
                    appendThis = $this.closest('.store-div').data("append-to-search-link");
                }
                if ($this.closest('.store-div').attr('id') === 'staples-div') {
                    $this.attr("href", _href + $('#model-number').val().trim().replace(' ', '+').replace('&', '%26') + '/directory_' + $('#model-number').val().trim().replace(' ', '%2520'));
                } else if ($this.closest('.store-div').attr('id') === 'jcpenny-div') {
                    $this.attr("href", _href + $('#model-number').val().trim().replace('&', '%26') + '?Ntt=' + $('#model-number').val().trim());
                } else {
                    $this.attr("href", _href + $('#model-number').val().replace('&', '%26') + appendThis);
                }
            });

        }
    }
}