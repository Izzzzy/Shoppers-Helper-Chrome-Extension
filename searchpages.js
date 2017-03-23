$(function () {
    var chkReadyState = setInterval(function () {
        if (document.readyState == "complete") {
            //if ($('#s-result-count').length) {
            // clear the interval
            clearInterval(chkReadyState);
            // finally your page is loaded.
            //alert('hi');
            var bestSellerPage = false;
            var pageIdentifier = '';
            var productDivIdentifier = '';
            var productNameIdentifier = '';
            var productUpcCodeIdentifier = '';
            var productModelIdentifier = '';
            var allProductsDiv = '';
            var excText = '';
            var identifiersIdentifiers = [];


            var count = 0;
            $('body').bind("DOMSubtreeModified", function () {
                setTimeout(function () {
                    count = count + 1;

                    //$('body').on('click', '#nav-search .nav-input[value="Go"], a, #searchReset', function () {
                    //$('body #nav-search .nav-input[value="Go"], body a, body #searchReset').on('click',function () {
                    //alert('hi');
                    if (count < 2) {
                        console.log(count);

                        var chkReadyState = setInterval(function () {
                            if (document.readyState == "complete") {
                                //if ($('#s-result-count').length) {
                                // clear the interval
                                clearInterval(chkReadyState);
                                // finally your page is loaded.
                                if (!$('.calculate-button').length && !$('.calc-button').length && !$('.calcu-button').length) {


                                    //alert('hi');
                                    var bestSellerPage = false;
                                    if ($('#s-result-count').length) {
                                        //$('.a-row.a-spacing-none').has('.sx-price-fractional').append('<a href="https://sellercentral.amazon.com/fba/profitabilitycalculator/index?lang=en_US"target="_blank" class="btn btn-xs btn-primary calculate-button"> Calculate</a>');
                                        //$('.a-row.a-spacing-none').has('.sx-price-fractional').append('<button href="" class="btn btn-xs btn-primary calculate-button"> Calculate</button>');
                                        //$('.a-row.a-spacing-none').has('.sx-price-fractional').append('  <button class="a-button a-button-primary a-button-small calculate-button" style="height:18px;"><span style="font-size:12pt;>\\/</span></button>');
                                        if ($('.a-column.a-span7').length) { // amazon
                                            //$('.a-column.a-span7').prepend('  <button type="button" class="btn btn-link a-button a-button-small calculate-button"style="height:18px;width:18px;display:inline;position:absolute;margin-left:200px;"><span style="font-size:10pt;">\\/</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                            $('.a-column.a-span7').prepend('  <button type="button" class="btn btn-link calculate-button"style="display:inline;position:absolute;margin-left:300px;"><span style="font-weight: bold;font-size:20px;">. . .</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                            //$('.a-column.a-span7').prepend('  <button type="button" class="btn btn-link a-button a-button-primary a-button-small uncalculate-button"style="height:18px;width:18px;position:absolute;margin-left:200px;display:none;"><span style="font-size:10pt;">/\\</span></button>');
                                            $('.a-column.a-span7').prepend('  <button type="button" class="btn btn-xs btn-danger uncalculate-button"style="height:18px;width:18px;position:absolute;margin-left:300px;display:none;"><span style="font-size:10pt;">&times;</span></button>');

                                        } else if ($('.a-row.sx-badge-region').length) { // amazon
                                            //$('.a-row.sx-badge-region').prepend('  <button type="button" class="btn btn-link a-button a-button-small calculate-button"style="height:18px;width:18px;display:inline;position:absolute;margin-left:200px;"><span style="font-size:10pt;">\\/</span></button>');// class="glyphicon glyphicon-chevron-down"
                                            $('.a-row.sx-badge-region').prepend('  <button type="button" class="btn btn-link calculate-button"style="display:inline;position:absolute;margin-left:200px;"><span style="font-weight: bold;font-size:20px;">. . .</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                            //$('.a-row.sx-badge-region').prepend('  <button type="button" class="btn btn-link a-button a-button-primary a-button-small uncalculate-button"style="height:18px;width:18px;position:absolute;margin-left:200px;display:none;"><span style="font-size:10pt;">/\\</span></button>');
                                            $('.a-row.sx-badge-region').prepend('  <button type="button" class="btn btn-xs btn-danger uncalculate-button"style="height:18px;width:18px;position:absolute;margin-left:200px;display:none;"><span style="font-size:10pt;">&times;</span></button>');

                                        }
                                        //$('.a-column.a-span7 div:first-child .a-row.a-spacing-none:first-child').append('  <button type="button" class="btn btn-link a-button a-button-small calculate-button"style="height:18px;width:15px;display:inline;"><span style="font-size:10pt;">\\/</span></button>');
                                        //if ($('.a-row.a-spacing-none').has('.sx-price-fractional').length) {


                                        //    $('.a-row.a-spacing-none').has('.sx-price-fractional').append('  <button type="button" class="btn btn-link a-button a-button-small calculate-button"style="height:18px;width:15px;margin-left:20px;"><span style="font-size:10pt;">\\/</span></button>');
                                        //    $('.a-row.a-spacing-none').has('.sx-price-fractional').append('  <button type="button" class="btn btn-link a-button a-button-primary a-button-small uncalculate-button"style="height:18px;width:15px;margin-left:20px;display:none;"><span style="font-size:10pt;">/\\</span></button>');
                                        //}
                                    } else if ($('#zg_banner_text_wrapper:contains("Amazon Best Sellers")').length) { // amazon
                                        //alert('hi');
                                        if ($('.zg_itemImmersion').length) {
                                            //$('.a-column.a-span7').prepend('  <button type="button" class="btn btn-link a-button a-button-small calculate-button"style="height:18px;width:18px;display:inline;position:absolute;margin-left:200px;"><span style="font-size:10pt;">\\/</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                            $('.zg_itemImmersion').prepend('  <button type="button" class="btn btn-link calculate-button"style="display:inline;position:absolute;"><span style="font-weight: bold;font-size:20px;">. . .</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                            //$('.a-column.a-span7').prepend('  <button type="button" class="btn btn-link a-button a-button-primary a-button-small uncalculate-button"style="height:18px;width:18px;position:absolute;margin-left:200px;display:none;"><span style="font-size:10pt;">/\\</span></button>');
                                            $('.zg_itemImmersion').prepend('  <button type="button" class="btn btn-xs btn-danger uncalculate-button"style="height:18px;width:18px;position:absolute;margin-left:30px;display:none;"><span style="font-size:10pt;">&times;</span></button>');
                                            bestSellerPage = true;
                                        }

                                    } else if ($('.list-item ul').length) { // bestbuy
                                        //alert('bestbuy');
                                        if ($('.list-item ul').length) {
                                            //$('.list-item li.sku-id').append('  <button type="button" class="btn btn-link calc-button"style="display:inline;background-image:none;border:none;background-color:transparent;"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                            $('.col-xs-3.list-item-price-column').append('<button type="button" class="btn btn-link calc-button"style="display:inline;background-image:none;border:none;background-color:transparent;"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                            productDivIdentifier = ".list-item";
                                            productNameIdentifier = ".sku-title h4";
                                            identifiersIdentifiers.push({
                                                searchName: 'Product',
                                                searchTermIdentifier: ".sku-title h4",
                                                excludeText: ""
                                            });
                                            identifiersIdentifiers.push({
                                                searchName: 'Model#',
                                                searchTermIdentifier: ".model-number",
                                                excludeText: "Model:"
                                            });

                                            //productNameIdentifier = "hi how are you";
                                        }
                                    } else if ($('.details.details-plp').length) { // target
                                        //alert('target');
                                        //if ($('.list-item ul').length) {
                                        //$('.details.details-plp').append('<button type="button" class="btn btn-link calc-button"style="display:inline;background-image:none;border:none;background-color:transparent;"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                        $('.details.details-plp').append('<button type="button" class="btn btn-link calc-button"style=";background-image:none;border:none;background-color:transparent;position:absolute;bottom:2px;right:2px"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                        productDivIdentifier = ".details.details-plp";
                                        productNameIdentifier = ".details--title";
                                        allProductsDiv = '.products--list';
                                        excText = 'already viewed';
                                        identifiersIdentifiers.push({
                                            searchName: 'Product',
                                            searchTermIdentifier: ".details--title",
                                            excludeText: "already viewed"
                                        });
                                        //productNameIdentifier = "hi how are you";
                                        //}
                                    } else if ($('#Results').length) { // ebay
                                        //alert('target');
                                        //if ($('.list-item ul').length) {
                                        $('.sresult.lvresult.clearfix').append('  <button type="button" class="btn btn-link calcu-button"style="display:inline;background-image:none;border:none;background-color:transparent;"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                        productDivIdentifier = ".sresult.lvresult.clearfix";
                                        productNameIdentifier = ".lvtitle";
                                        //productNameIdentifier = "hi how are you";
                                        //}
                                    } else if ($('.plp-pod.plp-pod--default').length) { // home depot. popup div styling not too great
                                        $('.plp-pod.plp-pod--default .price').append('<button type="button" class="btn btn-link calc-button"style=";background-image:none;border:none;background-color:transparent;position:absolute;right:2px;top:2px;"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                        productDivIdentifier = ".plp-pod.plp-pod--default";
                                        productNameIdentifier = ".pod-plp__description";
                                        allProductsDiv = '';
                                        excText = '';
                                        identifiersIdentifiers.push({
                                            searchName: 'Product',
                                            searchTermIdentifier: ".pod-plp__description",
                                            excludeText: ""
                                        });
                                        identifiersIdentifiers.push({
                                            searchName: 'Model#',
                                            searchTermIdentifier: ".pod-plp__model",
                                            excludeText: "Model#"
                                        });
                                        //identifiersIdentifiers.push({
                                        //    searchName: '',
                                        //    searchTermIdentifier: "",
                                        //    excludeText: ""
                                        //});
                                    } else if ($('.product-container.js-product-container').length) { // lowe's
                                        $('.product-container.js-product-container').append('<button type="button" class="btn btn-link calc-button"style=";background-image:none;border:none;background-color:transparent;position:absolute;"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                        productDivIdentifier = ".product-container.js-product-container";
                                        productNameIdentifier = ".h6.product-title.js-product-title.v-spacing-small.ellipsis-three-line";
                                        allProductsDiv = '';
                                        excText = '';
                                        identifiersIdentifiers.push({
                                            searchName: 'Product',
                                            searchTermIdentifier: ".h6.product-title.js-product-title.v-spacing-small.ellipsis-three-line",
                                            excludeText: ""
                                        });
                                    } else if ($('.js-tile.js-tile-landscape.tile-landscape').length) { // walmart
                                        $('.js-tile.js-tile-landscape.tile-landscape .js-item-price-container.item-price-container').append('<button type="button" class="btn btn-link calc-button"style=";background-image:none;border:none;background-color:transparent;position:absolute;right:350px;"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                        productDivIdentifier = ".js-tile.js-tile-landscape.tile-landscape";
                                        productNameIdentifier = ".js-product-title";
                                        allProductsDiv = '';
                                        excText = '';
                                        identifiersIdentifiers.push({
                                            searchName: 'Product',
                                            searchTermIdentifier: ".js-product-title",
                                            excludeText: ""
                                        });
                                        //identifiersIdentifiers.push({
                                        //    searchName: '',
                                        //    searchTermIdentifier: "",
                                        //    excludeText: ""
                                        //});
                                        //identifiersIdentifiers.push({
                                        //    searchName: '',
                                        //    searchTermIdentifier: "",
                                        //    excludeText: ""
                                        //});
                                    } else if ($('.card-container').length) { // kmart have to figure out how to add the buttons to divs that were loaded after
                                        $('.card-container').append('<button type="button" class="btn btn-link calc-button"style=";background-image:none;border:none;background-color:transparent;position:absolute;"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                        productDivIdentifier = ".card-container";
                                        productNameIdentifier = ".card-title";
                                        allProductsDiv = '';
                                        excText = '';
                                        identifiersIdentifiers.push({
                                            searchName: 'Product',
                                            searchTermIdentifier: ".card-title",
                                            excludeText: ""
                                        });
                                        //identifiersIdentifiers.push({
                                        //    searchName: '',
                                        //    searchTermIdentifier: "",
                                        //    excludeText: ""
                                        //});
                                        //identifiersIdentifiers.push({
                                        //    searchName: '',
                                        //    searchTermIdentifier: "",
                                        //    excludeText: ""
                                        //});
                                    } else if ($('.list-products-container').length) { // jet. There's prob with first result showing up. took out of manifest cuz affecting other parts of page
                                        $('.product-tiles.block.overflow-hidden').append('<button type="button" class="btn btn-link calc-button"style=";background-image:none;border:none;background-color:transparent;position:absolute;"><span style="font-weight: bold;font-size:20px;">...</span></button>'); // class="glyphicon glyphicon-chevron-down"
                                        productDivIdentifier = ".product-tiles.block.overflow-hidden";
                                        productNameIdentifier = ".h5.text-gray-6.name";
                                        allProductsDiv = '';
                                        excText = '';
                                        identifiersIdentifiers.push({
                                            searchName: 'Product',
                                            searchTermIdentifier: ".h5.text-gray-6.name",
                                            excludeText: ""
                                        });
                                        //identifiersIdentifiers.push({
                                        //    searchName: '',
                                        //    searchTermIdentifier: "",
                                        //    excludeText: ""
                                        //});
                                        //identifiersIdentifiers.push({
                                        //    searchName: '',
                                        //    searchTermIdentifier: "",
                                        //    excludeText: ""
                                        //});
                                    }

                                    $('body .calc-button').click(function (e) {
                                        e.preventDefault();
                                        var shopText = '';
                                        var quickSearchName = '';
                                        var quickSearchText = '';
                                        var identifiers = [];
                                        var moreThanOneSearchTerm = false;
                                        if (typeof identifiersIdentifiers[0] !== "undefined") {
                                            shopText = identifiersIdentifiers[0].searchName.toUpperCase().replace('PRODUCT', 'PRODUCT NAME');
                                            identifiers.push({
                                                searchName: identifiersIdentifiers[0].searchName,
                                                searchTerm: $(this).closest(productDivIdentifier).find(identifiersIdentifiers[0].searchTermIdentifier).text().replace(identifiersIdentifiers[0].excludeText, '').trim()
                                            });
                                            quickSearchName = identifiersIdentifiers[0].searchName.toUpperCase().replace('PRODUCT', 'PRODUCT NAME');
                                            quickSearchText = $(this).closest(productDivIdentifier).find(identifiersIdentifiers[0].searchTermIdentifier).text().replace(identifiersIdentifiers[0].excludeText, '').trim();
                                        }
                                        if (typeof identifiersIdentifiers[1] !== "undefined") {
                                            shopText = identifiersIdentifiers[0].searchName.toUpperCase().replace('PRODUCT', 'PRODUCT NAME') + ' and ' + identifiersIdentifiers[1].searchName.toUpperCase();
                                            moreThanOneSearchTerm = true;
                                            qsText =
                                            identifiers.push({
                                                searchName: identifiersIdentifiers[1].searchName,
                                                searchTerm: $(this).closest(productDivIdentifier).find(identifiersIdentifiers[1].searchTermIdentifier).text().replace(identifiersIdentifiers[1].excludeText, '').trim()
                                            });
                                            quickSearchName = identifiersIdentifiers[1].searchName.toUpperCase().replace('PRODUCT', 'PRODUCT NAME');
                                            quickSearchText = $(this).closest(productDivIdentifier).find(identifiersIdentifiers[1].searchTermIdentifier).text().replace(identifiersIdentifiers[1].excludeText, '').trim();
                                        }
                                        if (typeof identifiersIdentifiers[2] !== "undefined") {
                                            shopText = identifiersIdentifiers[0].searchName.toUpperCase().replace('PRODUCT', 'PRODUCT NAME') + ', ' + identifiersIdentifiers[1].searchName.toUpperCase() + ' and ' + identifiersIdentifiers[2].searchName.toUpperCase();
                                            moreThanOneSearchTerm = true;
                                            identifiers.push({
                                                searchName: identifiersIdentifiers[2].searchName,
                                                searchTerm: $(this).closest(productDivIdentifier).find(identifiersIdentifiers[2].searchTermIdentifier).text().replace(identifiersIdentifiers[2].excludeText, '').trim()
                                            });
                                        }
                                        var searchText = $(this).closest(productDivIdentifier).find(productNameIdentifier).text().replace(excText, '').trim();
                                        if ($('body #appended-div').is(":visible")) {
                                            if ($('body #appended-div').length) {
                                                removing = true;
                                            }
                                            $('body #appended-div').remove('body #appended-div');
                                            $('body .uncalc-button').hide();
                                            $('body .calc-button').show();

                                        }
                                        if (!$('body #appended-div').length) {
                                            var prodName = $(this).closest(productDivIdentifier).find(productNameIdentifier).text().trim();
                                            $('body').append('<div id="appended-div" style="width:270px;color:black;position: absolute;top:' + ($(this).closest(productDivIdentifier).find('.calc-button').offset().top + 18) + 'px;left:' + $(this).closest(productDivIdentifier).find('.calc-button').offset().left + 'px;"><div id="sellers-helper-div" class="well" style="text-align:center;">' +
                                                //'<h4>Search this PRODUCT NAME on <a style="color:blue;" id="search-on-site" href="http://onlineshoppershelper.com" target="_blank">OnlineShoppersHelper.com</a><h4><br/>' +
                                                '<h4>Search this ' + shopText + ' on <a style="color:#085eb9;" id="search-on-site" href="http://onlineshoppershelper.com" target="_blank">OnlineShoppersHelper.com</a><h4><br/>' +
                                                '<span style="font-size:10pt; margin-top:18px;">Quick search ' + quickSearchName + ' on: ' +
                                                '<br/></span><a id="ebay-button" href="http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575226091&toolid=10001&campid=5337959871&customid=&mpre=http%3A%2F%2Fwww.ebay.com%2Fsch%2Fi.html%3F_nkw%3D' + quickSearchText + '" target="_blank" class="btn btn-danger btn-xs" style="margin-top:8px;' +
                                                ' width:55.44px;height:21.2px;color:white;background-color:rgb(201, 48, 44);border-color:rgb(172, 41, 37);text-align:center;vertical-align: middle;font-size:12px;font-weight: 700;padding:0px;">Ebay</a> <a id="amazon-button" href="https://www.amazon.com/s/?field-keywords=' + quickSearchText + '" target="_blank" class="btn btn-success btn-xs" style="margin-top:8px;' +
                                                ' width:55.44px;height:21.2px;color:white;background-color: rgb(92, 184, 92);border-color: rgb(76, 174, 76);text-align:center;font-size:12px;font-weight: 700;padding:0px;">Amazon</a><br/><button id="both-button" class="btn btn-default btn-xs" style="margin-top:8px; width:55.44px;height:21.2px;color:black;font-size:12px;font-weight: 700;padding:0px;">'+
                                                'Or Both</button><button id="x-out" class="close"style="position:absolute; top:2px; right:2px;">&times;</button></div></div>');
                                            $('#both-button').click(function () {
                                                $('#ebay-button')[0].click();
                                                $('#amazon-button')[0].click();
                                            });



                                            $('body #search-on-site').click(function () {
                                                if (moreThanOneSearchTerm) {
                                                    //alert('more');
                                                    chrome.runtime.sendMessage({ greeting: "populate-search-text", identifiers: identifiers });
                                                } else {
                                                    //alert('not');
                                                    chrome.runtime.sendMessage({ greeting: "populate-just-first-search-text", text: searchText });
                                                }

                                                $('body #appended-div').remove('body #appended-div');
                                            });
                                            $('#x-out').click(function () {
                                                $('body #appended-div').remove('body #appended-div');
                                            });
                                        }
                                    });

                                    $('body .calcu-button').click(function () {
                                        //alert('ebay');
                                        var searchText = $(this).closest(productDivIdentifier).find(productNameIdentifier).text();
                                        if ($('body #appended-div').is(":visible")) {
                                            if ($('body #appended-div').length) {
                                                removing = true;
                                            }
                                            $('body #appended-div').remove('body #appended-div');
                                            //$('body .uncalc-button').hide();
                                            $('body .calcu-button').show();

                                        }
                                        if (!$('body #appended-div').length) {
                                            var prodName = $(this).closest(productDivIdentifier).find(productNameIdentifier).text().trim();
                                            $('body').append('<div id="appended-div" style="width:270px;color:black;position: absolute;top:' + ($(this).closest(productDivIdentifier).find('.calcu-button').offset().top + 18) + 'px;left:' + $(this).closest(productDivIdentifier).find('.calcu-button').offset().left + 'px;"><div id="sellers-helper-div" class="well" style="text-align:center;">' +
                                                '<h4>Search this PRODUCT NAME on <a id="search-on-site" href="http://onlineshoppershelper.com" target="_blank">OnlineShoppersHelper.com</a><h4><br/>' +
                                                '<span style="font-size:10pt; margin-top:18px;">Quick search PRODUCT NAME on: ' +
                                                '<br/></span><a href="https://www.amazon.com/s/?field-keywords=' + prodName + '" target="_blank" class="btn btn-success btn-xs" style="margin-top:8px;' +
                                                ' width:55.44px;height:21.2px;text-align:center;color:black;font-size:12px;padding:0px;">Amazon</a><button id="x-out" class="close"style="position:absolute; top:2px; right:2px;">&times;</button></div></div>');

                                            $('body #search-on-site').click(function () {
                                                chrome.runtime.sendMessage({ greeting: "populate-just-first-search-text", text: searchText });
                                                $('body #appended-div').remove('body #appended-div');
                                            });
                                            $('#x-out').click(function () {
                                                $('body #appended-div').remove('body #appended-div');
                                            });
                                        }
                                    });

                                    $('body .calculate-button').click(function () {
                                        if (!bestSellerPage) {
                                            var asin = $(this).closest('li').attr('data-asin');
                                            var searchText = $(this).closest('.s-item-container').find('h2').text();
                                            //input = $(this).closest('.s-item-container').find('#amount-to-calculate').val();
                                            var placeholder;
                                            if ($('body #amount-to-calculate').attr('placeholder') !== '') {
                                                placeholder = $(this).closest('.s-item-container').find('#amount-to-calculate').attr('placeholder');
                                            }

                                            //var removing = false;
                                            if ($('body #appended-div').is(":visible")) {
                                                if ($(this).closest('.s-item-container').find('#appended-div').length) {
                                                    removing = true;
                                                }
                                                $('body #appended-div').remove('body #appended-div');
                                                $('body .uncalculate-button').hide();
                                                $('body .calculate-button').show();

                                            }

                                            //if (!$(this).closest('.s-item-container').find('#appended-div').length && !removing) {
                                            //if (!$(this).closest('.s-item-container').find('#appended-div').length) {
                                            if (!$('body #appended-div').length) {
                                                $(this).closest('.s-item-container').find('.calculate-button').hide();
                                                $(this).closest('.s-item-container').find('.uncalculate-button').show();
                                                var prodName = $(this).closest('.s-item-container').find('h2').text().replace('&', '%26');
                                                var prefillRegPrice;
                                                var input = 0;
                                                if ($(this).closest('.s-item-container').find('.sx-price-whole').length) {
                                                    prefillRegPrice = $(this).closest('.s-item-container').find('.sx-price-whole').text() + '.' + $(this).closest('.s-item-container').find('.sx-price-fractional').text();
                                                    //alert('hi');
                                                } else if ($(this).closest('.s-item-container').find('.a-size-base.a-color-base').length) {
                                                    prefillRegPrice = $(this).closest('.s-item-container').find('.a-size-base.a-color-base:first').text().replace('$', '');
                                                    //alert('hi');
                                                } else {
                                                    //alert('k');
                                                    prefillRegPrice = 0;
                                                }

                                                //$(this).closest('div').append('<div id="appended-div" style="width:270px;color:black;"><div id="sellers-helper-div" class="well" style="text-align:center;">' +
                                                $('body').append('<div id="appended-div" style="width:270px;color:black;position: absolute;top:' + ($(this).closest('div').offset().top + 18) + 'px;left:' + $(this).closest('.s-item-container').find('.uncalculate-button').offset().left + 'px;"><div id="sellers-helper-div" class="well" style="text-align:center;">' +
                                                    '<h4>Search this PRODUCT NAME on <a id="search-on-site" href="http://onlineshoppershelper.com" target="_blank">OnlineShoppersHelper.com</a><h4><br/>' +
                                                    '<span style="font-size:10pt; margin-top:18px;">Quick search PRODUCT NAME on: ' +
                                                    '<br/></span><a href="http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575226091&toolid=10001&campid=5337959871&customid=&mpre=http%3A%2F%2Fwww.ebay.com%2Fsch%2Fi.html%3F_nkw%3D' + prodName + '" target="_blank" class="btn btn-danger btn-xs" style="margin-top:8px;' +
                                                    ' width:55.44px;color:white;">Ebay</a></div></div>');
                                                //// .position() uses position relative to the offset parent, 
                                                //var pos = $(this).closest('.s-item-container').find('#uncalculate-button').position();
                                                //alert(pos);
                                                // //.outerWidth() takes into account border and padding.
                                                //var width = $(this).outerWidth();
                                                //$("body #appended-div").css({
                                                //    position: "absolute",
                                                //    top: pos.top + "px",
                                                //    left: (pos.left + width) + "px"
                                                //});
                                                //var asin = $(this).closest('li').attr('data-asin');
                                                //var amount = $(this).closest('.sx-price.sx-price-large').text().replace('$', '').replace('Calculate', '').trim();
                                                //chrome.runtime.sendMessage({ greeting: "open-calculator", asin: asin, action: 'reg', amount: amount });
                                            }
                                        } else {
                                            //var asin = $(this).closest('.zg_itemImmersion').find('div[data-p13n-asin-metadata]').attr('data-p13n-asin-metadata').substring($(this).closest('.zg_itemImmersion').find('div[data-p13n-asin-metadata]').attr('data-p13n-asin-metadata').lastIndexOf('"asin":') + 8, $(this).closest('.zg_itemImmersion').find('div[data-p13n-asin-metadata]').attr('data-p13n-asin-metadata').lastIndexOf('"asin":') + 18);
                                            var asin = $(this).closest('.zg_itemImmersion').find('.zg_title a').attr('href').substring($(this).closest('.zg_itemImmersion').find('.zg_title a').attr('href').lastIndexOf('/dp/') + 4, $(this).closest('.zg_itemImmersion').find('.zg_title a').attr('href').lastIndexOf('/dp/') + 14);
                                            //var searchText = $(this).closest('.zg_itemImmersion').find('div[data-p13n-asin-metadata] span[title]').attr('title');
                                            //var searchText = $(this).closest('.zg_itemImmersion').find('div[data-p13n-asin-metadata] .a-section.a-spacing-mini').text();
                                            //var searchText = $(this).closest('.zg_itemImmersion').find('div[data-p13n-asin-metadata] .a-section.a-spacing-mini img').attr('alt').replace('&', '%26');
                                            var searchText = $(this).closest('.zg_itemImmersion').find('.zg_title').text().replace('&', '%26');
                                            var placeholder;
                                            if ($('body #amount-to-calculate').attr('placeholder') !== '') {
                                                placeholder = $('body #amount-to-calculate').attr('placeholder');
                                            }

                                            //var removing = false;
                                            if ($('body #appended-div').is(":visible")) {
                                                if ($(this).closest('.zg_itemImmersion').find('#appended-div').length) {
                                                    removing = true;
                                                }
                                                $('body #appended-div').remove('body #appended-div');
                                                $('body .uncalculate-button').hide();
                                                $('body .calculate-button').show();

                                            }

                                            //if (!$(this).closest('.s-item-container').find('#appended-div').length && !removing) {
                                            //if (!$(this).closest('.s-item-container').find('#appended-div').length) {
                                            if (!$('body #appended-div').length) {
                                                $(this).closest('.zg_itemImmersion').find('.calculate-button').hide();
                                                $(this).closest('.zg_itemImmersion').find('.uncalculate-button').show();
                                                //var prodName = $(this).closest('.zg_itemImmersion').find('div[data-p13n-asin-metadata] span[title]').attr('title').replace('&', '%26');
                                                //var prodName = $(this).closest('.zg_itemImmersion').find('div[data-p13n-asin-metadata] .a-section.a-spacing-mini').text().replace('&', '%26');
                                                //var prodName = $(this).closest('.zg_itemImmersion').find('div[data-p13n-asin-metadata] .a-section.a-spacing-mini img').attr('alt').replace('&', '%26');
                                                var prodName = $(this).closest('.zg_itemImmersion').find('.zg_title').text().replace('&', '%26');
                                                var prefillRegPrice;
                                                var input = 0;
                                                //if ($(this).closest('.zg_itemImmersion').find('.p13n-sc-price').length) {
                                                if ($(this).closest('.zg_itemImmersion').find('.zg_price .price').length) {
                                                    //prefillRegPrice = $(this).closest('.zg_itemImmersion').find('.p13n-sc-price').text().replace('$', '');
                                                    prefillRegPrice = $(this).closest('.zg_itemImmersion').find('.zg_price .price').text().replace('$', '');
                                                    //alert('hi');
                                                } else {
                                                    //alert('k');
                                                    prefillRegPrice = 0;
                                                }

                                                //$(this).closest('div').append('<div id="appended-div" style="width:270px;color:black;"><div id="sellers-helper-div" class="well" style="text-align:center;">' +
                                                $('body').append('<div id="appended-div" style="width:270px;color:black;position: absolute;top:' + ($(this).closest('div').offset().top + 18) + 'px;left:' + $(this).closest('.zg_itemImmersion').find('.uncalculate-button').offset().left + 'px;"><div id="sellers-helper-div" class="well" style="text-align:center;">' +
                                                    '<h4>Search this PRODUCT NAME on <a id="search-on-site" href="http://onlineshoppershelper.com" target="_blank">OnlineShoppersHelper.com</a><h4><br/>' +
                                                    '<span style="font-size:10pt; margin-top:18px;">Quick search PRODUCT NAME on: ' +
                                                    '<br/></span><a href="http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575226091&toolid=10001&campid=5337959871&customid=&mpre=http%3A%2F%2Fwww.ebay.com%2Fsch%2Fi.html%3F_nkw%3D' + prodName + '" target="_blank" class="btn btn-danger btn-xs" style="margin-top:8px;' +
                                                    ' width:55.44px;color:white;">Ebay</a></div></div>');
                                                //// .position() uses position relative to the offset parent, 
                                                //var pos = $(this).closest('.s-item-container').find('#uncalculate-button').position();
                                                //alert(pos);
                                                // //.outerWidth() takes into account border and padding.
                                                //var width = $(this).outerWidth();
                                                //$("body #appended-div").css({
                                                //    position: "absolute",
                                                //    top: pos.top + "px",
                                                //    left: (pos.left + width) + "px"
                                                //});
                                                //var asin = $(this).closest('li').attr('data-asin');
                                                //var amount = $(this).closest('.sx-price.sx-price-large').text().replace('$', '').replace('Calculate', '').trim();
                                                //chrome.runtime.sendMessage({ greeting: "open-calculator", asin: asin, action: 'reg', amount: amount });
                                            }
                                        }
                                        if ($('#amount-to-calculate').val() === '' && $('#amount-to-calculate').attr('placeholder') !== '') {
                                            input = $('#amount-to-calculate').attr('placeholder');
                                        }

                                        //$(this).closest('.s-item-container').find('#search-on-site').click(function () {
                                        $('body #search-on-site').click(function () {
                                            //var searchText = $(this).closest('.s-item-container').find('h2').text();

                                            chrome.runtime.sendMessage({ greeting: "populate-just-first-search-text", text: searchText });
                                            $('body #appended-div').remove('body #appended-div');
                                            $('body .uncalculate-button').hide();
                                            $('body .calculate-button').show();
                                        });

                                        //$(this).closest('.s-item-container').find('#amount-to-calculate').on('input', function () {
                                        $('body #amount-to-calculate').on('input', function () {

                                            //input = $(this).closest('.s-item-container').find('#amount-to-calculate').val();
                                            input = $('#amount-to-calculate').val();
                                            input = input.replace(' ', '');
                                            var origInput = input;
                                            input = input.replace(/[^\d.]+/g, '');
                                            var sub = input.replace(/[^\.]+/g, '');

                                            if (!sub.search('..')) {
                                                input = input.slice(0, -1);
                                                sub = sub.slice(0, -1);
                                            }

                                            //$(this).closest('.s-item-container').find('#amount-to-calculate').val(input);
                                            $('body #amount-to-calculate').val(input);

                                            //if (input.length === 0 && $(this).closest('.s-item-container').find('#amount-to-calculate').attr('placeholder') !== '') {
                                            if (input.length === 0 && $('body #amount-to-calculate').attr('placeholder') !== '') {
                                                //input = $(this).closest('.s-item-container').find('#amount-to-calculate').attr('placeholder');
                                                input = $('body #amount-to-calculate').attr('placeholder');
                                            }

                                            //if ((input.length > 0 && sub.search('..') && input !== '.' && origInput.match(/^[0-9.,$]+$/)) || ($('#amount-to-calculate').val() === '' && $(this).closest('.s-item-container').find('#amount-to-calculate').attr('placeholder') !== '')) {
                                            if ((input.length > 0 && sub.search('..') && input !== '.' && origInput.match(/^[0-9.,$]+$/)) || ($('#amount-to-calculate').val() === '' && $('body #amount-to-calculate').attr('placeholder') !== '')) {

                                                $('#rev-calculate').prop('disabled', false);
                                                $('#reg-calculate').prop('disabled', false);
                                            } else {
                                                $('#rev-calculate').prop('disabled', true);
                                                $('#reg-calculate').prop('disabled', true);
                                            }
                                        });

                                        $('body #reg-calculate').click(function () {
                                            //var asin = $(this).closest('li').attr('data-asin');
                                            //var amount = $(this).closest('.sx-price.sx-price-large').text().replace('$', '').replace('Calculate', '').trim();
                                            chrome.runtime.sendMessage({ greeting: "open-calculator", asin: asin, action: 'reg', amount: input });
                                            $('body #appended-div').remove('body #appended-div');
                                            $('body .uncalculate-button').hide();
                                            $('body .calculate-button').show();
                                        });

                                    });
                                }
                                count = 0;
                            }
                        }, 2000);
                    }
                }, 500);
            });
            $(document).click(function (event) {
                //if ((!$(event.target).closest('body #appended-div').length && !$(event.target).closest('body .calculate-button').length) || $(event.target).closest('body a').length) {
                if ((!$(event.target).closest('body #appended-div').length && !$(event.target).closest('body .calculate-button').length && !$(event.target).closest('body .calc-button').length && !$(event.target).closest('body .calcu-button').length)) {
                    if ($('body #appended-div').is(":visible")) {
                        $('body #appended-div').remove('body #appended-div');
                        $('body .uncalculate-button').hide();
                        $('body .calculate-button').show();
                    }
                }
            });
            $("body").keydown(function (e) {
                if (e.keyCode === 13 && $('#amount-to-calculate').is(":focus")) {
                    $('#reg-calculate')[0].click();
                }
            });
            //$('body .calculate-button').click(function () {
            //    var asin = $(this).closest('li').attr('data-asin');
            //    var amount = $(this).closest('.sx-price.sx-price-large').text().replace('$', '').replace('Calculate', '').trim();
            //    chrome.runtime.sendMessage({ greeting: "open-calculator", asin: asin, action: 'reg', amount: amount });
            //});
        }
    });
});
