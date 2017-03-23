
chrome.runtime.sendMessage({ greeting: "site-page-loaded" }, function (response) {
    $('#search-text').val(response.searchText);
});



chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting === 'search-text') { // from background.js line 75
            //sendResponse({ loaded: 'true' })
            //if (typeof request.productAndSiteInfo !== "undefined" && request.productAndSiteInfo.price !== '') {
            //    //alert('hi');
            //    //$('.box2 #coming-from-link').remove();
            //    if ($('#coming-from-link').length) {
            //        //alert('hi');
            //        $('#coming-from-link').remove();
            //    }
            //    $('.box2').prepend('<a id="coming-from-link" href="' + request.productAndSiteInfo.url + '"><span>On ' + request.productAndSiteInfo.siteName + ' for ' + request.productAndSiteInfo.price + '</span></a>')
            //} else if (typeof request.productAndSiteInfo !== "undefined" && (request.productAndSiteInfo.price === ''||request.productAndSiteInfo.price === 'undefined')) {
            //    $('.box2').prepend('<a id="coming-from-link" href="' + request.productAndSiteInfo.url + '"><span>On ' + request.productAndSiteInfo.siteName + '</span></a>');
            //}
            if (typeof request.identifiers[0] !== "undefined") {
                $('#search-text').val(request.identifiers[0].searchTerm);
                $('#primary-search-name').val(request.identifiers[0].searchName);
                setMainLinks();
                $('.btn-primary.btn-xs').html(request.identifiers[0].searchName);
                $('.btn-primary.btn-xs.primary-search-link').show();
            } else {
                $('#search-text').val('');
                $('#primary-search-name').val('PRIMARY');
            }
            if (typeof request.identifiers[1] !== "undefined") {
                $('#upc-code').val(request.identifiers[1].searchTerm);
                $('#second-search-name').val(request.identifiers[1].searchName);
                setUpcLinks();
                $('.btn-second-search.btn-warning.btn-xs').html(request.identifiers[1].searchName);
            } else {
                $('#upc-code').val('');
                $('#second-search-name').val('2nd Search');
            }
            if (typeof request.identifiers[2] !== "undefined") {
                $('#model-number').val(request.identifiers[2].searchTerm);
                $('#third-search-name').val(request.identifiers[2].searchName);
                setModelNumberLinks();
                $('.btn-third-search.btn-info.btn-xs').html(request.identifiers[2].searchName);
            } else {
                $('#model-number').val('');
                $('#third-search-name').val('3rd Search');
            }



            //alert('hi');
            if ($('#upc-code').val() === '') {
                //alert('hi');
                $('#second-search-div').hide();
                $('.btn-second-search.btn-warning.btn-xs').hide();
                $('#add-upc').show();
            } else {
                //alert('hi');
                $('#second-search-div').show();
                $('.btn-second-search.btn-warning.btn-xs').show();
                $('#add-upc').hide();
                $('#add-model-number').show();
            }


            if ($('#model-number').val() === '') {
                //alert('hi');
                $('#third-search-div').hide();
                $('.btn-third-search.btn-info.btn-xs').hide();
            } else {
                //alert('hi');
                $('#third-search-div').show();
                $('.btn-third-search.btn-info.btn-xs').show();
                $('#add-model-number').hide();
            }

        } else if (request.greeting === 'just-first-search-text') {
            //alert('hi');
            if ($('#coming-from-link').length) {
                $('#coming-from-link').remove();
            }
            $('#search-text').val(request.stext);
            $('#upc-code').val('');
            $('#model-number').val('');
            setMainLinks();
           // $('.btn-primary.btn-xs').html(request.identifiers[0].searchName);
            $('.btn-primary.btn-xs.primary-search-link').show();
        }
    }
    );
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
            } else {
                $this.attr("href", _href + $('#search-text').val().replace('&', '%26') + appendThis);
            }
        });

    } else {

        $('#amazon-link').attr('href', 'http://www.amazon.com');
        $('#ebay-link').attr('href', 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575226091&toolid=10001&campid=5337959871&customid=&mpre=http%3A%2F%2Fwww.ebay.com');
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
                } else {
                    $this.attr("href", _href + $('#model-number').val().replace('&', '%26') + appendThis);
                }
            });

        }
    }
}