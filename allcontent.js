//$(function() {
//window.addEventListener("load", myMain, false);

//function myMain(evt) {
// DO YOUR STUFF HERE.

var currentPage = url_domain(document.location.href);


var identifiers = [];
var productAndSiteInfo = {};
var quickSearchInfo = {};
quickSearchInfo.greeting = 'Regular product page';

var productName = '';
var UPCCode = '';
var modelNumber = '';

if (currentPage.indexOf('amazon.com') > -1 && $('#productTitle').length) {

    var prefillRegPrice = '0';
    var input;

    if ($('#priceblock_dealprice').length) {
        prefillRegPrice = $('#priceblock_dealprice').text();
        prefillRegPrice = prefillRegPrice.replace('$', '');

    } else if ($('#priceblock_ourprice').length) {

        prefillRegPrice = $('#priceblock_ourprice').text(); // .replace(/\$/g, '');
        prefillRegPrice = prefillRegPrice.replace('$', '');

        //did not test this one
        //also there might be more options
    } else if ($('#priceblock_saleprice').length) {
        prefillRegPrice = $('#priceblock_saleprice').text();
        //} else if ($('.olp-padding-right, .a-color-price').length) {
        //    prefillRegPrice = $('.olp-padding-right, .a-color-price').text(); // .replace(/\$/g, '');
        //    prefillRegPrice = prefillRegPrice.replace('$', '');
    }
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
    var asin = $('#ASIN').attr('value');
    $('#reg-calculate').click(function () {
        var asin = $('#ASIN').attr('value');
        //alert(asin);
        chrome.runtime.sendMessage({ greeting: "open-calculator", asin: asin, action: 'reg', amount: input });
    });

    $('#rev-calculate').click(function () {
        var asin = $('#ASIN').attr('value');
        //alert(asin);
        chrome.runtime.sendMessage({ greeting: "open-calculator", asin: asin, action: 'rev', amount: input });
    });
    quickSearchInfo.greeting = 'Amazon product page!';


    if ($('#productTitle').text().trim().length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#productTitle').text().trim()

        });
        //quickSearchInfo.searchtype= 'Product',
        //quickSearchInfo.searchterm=$('#productTitle').text().trim() 
    }
    if ($('th:contains("UPC")').length) {
        identifiers.push({
            searchName: 'UPC',
            searchTerm: $('th:contains("UPC")').next('td').text().trim()

        });
    }
    if ($('th:contains("Item model number")').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('th:contains("Item model number")').next('td').text().trim()

        });
        //quickSearchInfo.searchtype= 'Product',
        //quickSearchInfo.searchterm=$('#productTitle').text().trim() 
    } else if ($('li:contains("Item model number")').length && $('li:contains("Item model number")').text().indexOf('NA') < 0) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('li:contains("Item model number")').text().trim().replace('Item model number:', '')

        });
    }
    if (typeof identifiers[1] !== "undefined") {
        quickSearchInfo.searchtype = identifiers[1].searchName;
        quickSearchInfo.searchterm = identifiers[1].searchTerm;
    } else if (typeof identifiers[0] !== "undefined") {
        quickSearchInfo.searchtype = identifiers[0].searchName;
        quickSearchInfo.searchterm = identifiers[0].searchTerm;
    }
    var bsr = '';
    if ($('th:contains("Best Sellers Rank")').length) {
        bsr = $('th:contains("Best Sellers Rank")').next('td').text().trim()
    } else if ($('#SalesRank').length) {
        bsr = $('#SalesRank').html().replace('Amazon Best Sellers Rank:', '').trim()
    }
    chrome.runtime.sendMessage({ greeting: 'Amazon product page!', asin: asin, prefillRegPrice: prefillRegPrice, productName: $('#productTitle').text().trim(), quickSearchInfo: quickSearchInfo, bsr: bsr });
    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'amazon.com',
        url: document.location.href,
        price: '$' + prefillRegPrice
    };

    //productName = $('#productTitle').text().trim();

} else if (currentPage.indexOf('adorama.com') > -1 && $('h1[itemprop="name"]').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'adorama.com',
        url: document.location.href,
        price: $('')
        //price: $('#purchase-cluster .price-and-value .price').text()
    };

    if ($('h1[itemprop="name"]').length) {
        var brandName = '';
        if ($('h1[itemprop="name"] span[itemprop="brand"]').length) {
            brandName = $('h1[itemprop="name"] span[itemprop="brand"]').text().trim() + ' ';
        }
        identifiers.push({
            searchName: 'Product',
            searchTerm: brandName + $('h1[itemprop="name"] span[itemprop="brand"]').next('span').text().trim()
        });
    }
    if ($('i[itemprop="mpn"]').length) {
        identifiers.push({
            searchName: 'MPN',
            searchTerm: $('i[itemprop="mpn"]').text().replace('MFR:', '').trim()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('autopartswarehouse.com') > -1 && $('h1[itemprop="name"] span[data-elemname="item_name_text"]').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'autopartswarehouse.com',
        url: document.location.href,
        price: $('')
        //price: $('#purchase-cluster .price-and-value .price').text()
    };

    if ($('h1[itemprop="name"] span[data-elemname="item_name_text"]').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('h1[itemprop="name"] span[data-elemname="item_name_text"]').text()
        });
    }
    if ($('.prodnumbers strong[data-elemname="mfg_number_text"]').length) {
        identifiers.push({
            searchName: 'Part Number',
            searchTerm: $('.prodnumbers strong[data-elemname="mfg_number_text"]').text()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('bedbathandbeyond.com') > -1 && $('.productDetails').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'bedbathandbeyond.com',
        url: document.location.href,
        price: $('.priceOfProduct .isPrice .visuallyhidden').text()
    };

    if ($('#productTitle').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#productTitle').text()
        });
    }
    //if (.length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
    //if (.length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('bestbuy.com') > -1 && $('#schemaorg-offer').length) { // schemaorg-offer is the add to list button on the product page

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'bestbuy.com',
        url: document.location.href,
        price: $('#priceblock-wrapper-wrapper .item-price').text()
    };

    if ($('#sku-title h1').html().length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#sku-title h1').html()
        });
    }
    if ($('script:contains("upc_code:")').length && $('script:contains("upc_code:")').html().substring($('script:contains("upc_code:")').html().lastIndexOf('upc_code:') + 9, $('script:contains("upc_code:")').html().lastIndexOf('upc_name')).trim().replace("'", '').replace("'", '').replace(',', '').length > 0) {// .upc_code.length) {
        //if (window.webyclipParams!=="undefined"){
        identifiers.push({
            searchName: 'UPC',
            //.lastIndexOf('_spinset')
            searchTerm: $('script:contains("upc_code:")').html().substring($('script:contains("upc_code:")').html().lastIndexOf('upc_code:') + 9, $('script:contains("upc_code:")').html().lastIndexOf('upc_name')).trim().replace("'", '').replace("'", '').replace(',', '')
        });
    }
    if ($('#model-value').text().length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('#model-value').text()
        });
    }


    //productName = $('#sku-title h1').html();
    //modelNumber = $('#model-value').text();

} else if (currentPage.indexOf('bloomingdales.com') > -1 && $('#productTitle').length) { // 

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'bloomingdales.com',
        url: document.location.href,
        price: $('#PriceDisplay .cw_price_holder.priceBig').text()
        //price: $('#purchase-cluster .price-and-value .price').text()
    };

    if ($('#productTitle').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#brandNameLink').text() + ' ' + $('#productName').text()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('ebay.com') > -1) {
    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'ebay.com',
        url: document.location.href,
        price: $('#prcIsum').val().replace('US', '').trim()
    };
    if ($('#itemTitle').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#itemTitle').clone().children().remove().end().text()
        });
    }

    //productName = $('#itemTitle').clone().children().remove().end().text();
    if ($('td:contains("UPC")') && $('h2[itemprop="gtin13"]').length && $('h2[itemprop="gtin13"]').text().toUpperCase().indexOf("DOES NOT APPLY") < 0) {
        //UPCCode = $('h2[itemprop="gtin13"]').text().trim();
        identifiers.push({
            searchName: 'UPC',
            //searchTerm: $('h2[itemprop="gtin13"]').text().trim()
            searchTerm: $('td:contains("UPC")').next('td').text().trim()
        });

    }
    if ($('h2[itemprop="mpn"]').length && $('h2[itemprop="mpn"]').text().toUpperCase().indexOf("DOES NOT APPLY") < 0 && $('h2[itemprop="mpn"]').text().toUpperCase().indexOf("NOT APPLICABLE") < 0) {
        //modelNumber = $('h2[itemprop="mpn"]').text().trim();
        identifiers.push({
            searchName: 'MPN',
            searchTerm: $('h2[itemprop="mpn"]').text().trim()
        });
    }
    quickSearchInfo.greeting = 'Ebay product page';

} else if (currentPage.indexOf('gap.com') > -1 && $('#mainContent .product-title').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'gap.com',
        url: document.location.href,
        price: $('#mainContent .product-price').text().trim()
        //price: $('#purchase-cluster .price-and-value .price').text()
    };

    if ($('#mainContent .product-title').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('*[class*="_selected"]').text() + ' ' + $('#mainContent .product-title').text().trim() // + ' ' + $('.label-wrapper .label-value').text()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('groupon.com') > -1 && $('#deal-title').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'groupon.com',
        url: document.location.href,
        price: $('div[itemtype="http://schema.org/Offer"] meta[itemprop="price"]').attr('content')
        //price: $('#purchase-cluster .price-and-value .price').text()
    };

    if ($('#deal-title').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#deal-title').text().trim()
        });
    }
    //if (.length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
    //if (.length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('hdsupplysolutions.com') > -1 && $('#product_detail_h1').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'hdsupplysolutions.com',
        url: document.location.href,
        price: $('')
        //price: $('#purchase-cluster .price-and-value .price').text()
    };
    if ($('#product_detail_h1').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#product_detail_h1').text()
        });
    }

    if ($('#features tr td:contains("UPC Code")').length) {
        identifiers.push({
            searchName: 'UPC',
            searchTerm: $('#features tr td:contains("UPC Code")').next('td').text()
        });
    }

    if ($('#make tr td:contains("Manufacturer Part Number")').length) {
        identifiers.push({
            searchName: 'MPN',
            searchTerm: $('#make tr td:contains("Manufacturer Part Number")').next('td').text()
        });
    }
} else if (currentPage.indexOf('homedepot.com') > -1 && $('#productinfo_ctn').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'homedepot.com',
        url: document.location.href,
        price: $('#ajaxPrice').text()
        //price: $('#purchase-cluster .price-and-value .price').text()
    };

    if ($('#productinfo_ctn .product-title__brand[itemprop="brand"]').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#productinfo_ctn .product-title__brand[itemprop="brand"]').text().trim() + ' ' + $('#productinfo_ctn .product-title__title').text().trim()
        });
    }
    if ($('#productinfo_ctn .product-title upc').length) {
        identifiers.push({
            searchName: 'UPC',
            searchTerm: $('#productinfo_ctn .product-title upc').text()
        });
    }
    if ($('#mediaPlayerContainer .product_details.modelNo').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('#mediaPlayerContainer .product_details.modelNo').text().replace('Model #', '').trim()
        });
    }
} else if (currentPage.indexOf('jcpenney.com') > -1 && $('#regularPP').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'jcpenney.com',
        url: document.location.href,
        price: ''
        //price: $('')
    };

    if ($('#regularPP .flt_lft.pdp-title-width-fix').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#regularPP .flt_lft.pdp-title-width-fix').text()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('jet.com') > -1) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'jet.com',
        url: document.location.href,
        price: $('.price.h3.font-bold.text-black').html()
    };

    if ($('.module-product.pb1 .h3.mb0.name').length) {
        //alert('hi');
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('.module-product.pb1 .h3.mb0.name').text()
        });

    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('kmart.com') > -1 && $('.productPricePanel-page.panel.panel-wrapper').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'kmart.com',
        url: document.location.href,
        // price not pulling up
        price: $('.product-price-big span .price-wrapper').text()
    };

    if ($('.product-title.title-2').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('.product-title.title-2').text()
        });
    }
    if ($('span[itemprop="model"]').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('span[itemprop="model"]').text()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('lowes.com') > -1 && $('.pd-title.grid-100 h1.h3').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'lowes.com',
        url: document.location.href,
        price: $('')
        //price: $('#purchase-cluster .price-and-value .price').text()
    };

    if ($('.pd-title.grid-100').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('.pd-title.grid-100 h1.h3').text().trim()
        });
    }
    if ($('a[title="Product 360 View 1"] img[data-largeurl]').length) {
        identifiers.push({
            searchName: 'UPC',
            searchTerm: $('a[title="Product 360 View 1"] img').attr('data-largeurl').substring(0, $('a[title="Product 360 View 1"] img').attr('data-largeurl').lastIndexOf('_spinset'))
        });
    }
    //if ($('pd-epc-holder.grid-15.tablet-grid-20.grid-parent.hide-print img').length) {
    //    identifiers.push({
    //        searchName: 'UPC',
    //        searchTerm: $('pd-epc-holder.grid-15.tablet-grid-20.grid-parent.hide-print img').attr('src').substring('/Lowes/' + 7, '_spin')
    //    });
    //}
    if ($('p.secondary-text.small-type').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('p.secondary-text.small-type').text().substring($('p.secondary-text.small-type').text().lastIndexOf("Model #") + 7).trim()
        });
    }
} else if (currentPage.indexOf('macys.com') > -1 && $('#productHeaderBox').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'macys.com',
        url: document.location.href,
        price: '' //$('')
        //price: $('#purchase-cluster .price-and-value .price').text()
    };

    if ($('#productHeaderBox .brandNameLink').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#productHeaderBox .brandNameLink').text() + ' ' + $('#productHeaderBox .productName').text()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('newegg.com') > -1 && $('#grpDescrip_h').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'newegg.com',
        url: document.location.href,
        price: $('#landingpage-price .price-current').text()
    };

    if ($('#grpDescrip_h').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#grpDescrip_h').text().trim()
        });
    }

    //needs work
    if ($('dt:contains("Model")').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('dt:contains("Model")').next('dd').html().trim()
        });
    } 
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('officedepot.com') > -1 && $('#skuContainer').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'officedepot.com',
        url: document.location.href,
        price: $('#productPurchase .pricing_format.fleft').text().replace(' ', '')
    };

    if ($('#skuHeading').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#skuHeading').text().trim()
        });
    }
    if ($('#attributemodelkey').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('#attributemodelkey').text().trim()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('overstock.com') > -1 && $('#product-page').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'overstock.com',
        url: document.location.href,
        price: $('.price .monetary-price-value').text()
    };

    if ($('#mainContent .col-xs-6.add-to-cart-container .product-title').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#mainContent .col-xs-6.add-to-cart-container .product-title').text().trim()
        });
    }
    if ($('.description.toggle-content li:contains("Model:")').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('.description.toggle-content li:contains("Model:")').text().replace('Model:', '').replace(' ', '')
        });
    } else if ($('.content-block.lg.toggle td:contains("Model Number")').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('.content-block.lg.toggle td:contains("Model Number")').next('td').text().trim()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('quill.com') > -1 && $('.sku-details-wrap .skuName').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'quill.com',
        url: document.location.href,
        price: $('')
        //price: $('#purchase-cluster .price-and-value .price').text()
    };

    if ($('.sku-details-wrap .skuName').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('.sku-details-wrap .skuName').text()
        });
    }
    if ($('.sku-details-wrap .lblSkuModelNum').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('.sku-details-wrap .lblSkuModelNum').text().replace('Model #', '').trim()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('sears.com') > -1 && $('.productPricePanel-page.panel.panel-wrapper').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'sears.com',
        url: document.location.href,
        // price not pulling up
        price: $('.product-price-big span .price-wrapper').text()
    };

    if ($('.product-title.title-2').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('.product-title.title-2').text()
        });
    }
    if ($('span[itemprop="model"]').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('span[itemprop="model"]').text()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('staples.com') > -1 && $('h1[ng-bind-html="product.metadata.name"]').length) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'staples.com',
        url: document.location.href,
        price: $('.pricing-details .large').html()
    };

    if ($('h1[ng-bind-html="product.metadata.name"]').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('h1[ng-bind-html="product.metadata.name"]').text().trim()
        });
    }
    if ($('li:contains("Model:")').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('li:contains("Model:") span').text().trim()
        });
    }
    //if ($('').length) {
    //    identifiers.push({
    //        searchName: '',
    //        searchTerm: $('')
    //    });
    //} 
} else if (currentPage.indexOf('target.com') > -1 && $('#stickySidebar').length) {

    productAndSiteInfo = {
        siteName: 'target.com',
        url: document.location.href,
        price: $('#stickySidebar .price .h-text-lowercase').text().trim()
    };
    if ($('.title-product span[itemprop="name"]').text().trim().length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('.title-product span[itemprop="name"]').text().trim()
        });
    }
    if ($('.accordion--item li:contains("UPC:") span').text().length) {
        identifiers.push({
            searchName: 'UPC',
            searchTerm: $('.accordion--item li:contains("UPC:") span').text()
        });
    }

} else if (currentPage.indexOf('toysrus.com') > -1) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'toysrus.com',
        url: document.location.href,
        price: $('#price span').text()
    };
    if ($('#lTitle h1').html().length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('#lTitle h1').html()
        });
    }

} else if (currentPage.indexOf('walmart.com') > -1) {

    productAndSiteInfo = {};
    productAndSiteInfo = {
        siteName: 'walmart.com',
        url: document.location.href,
        price: $('.Price.Price--stylized.Price--large.hide-content.display-inline-m.price-display').text()
    };
    if ($('.prod-title-section h1 span').length) {
        identifiers.push({
            searchName: 'Product',
            searchTerm: $('.prod-title-section h1 span').text().trim()
        });
    }
    if ($('meta[property="og:upc"]').length) {
        identifiers.push({
            searchName: 'UPC',
            searchTerm: $('meta[property="og:upc"]').attr('content')
        });
    }
    if ($('tr td:contains("Model:")').length) {
        identifiers.push({
            searchName: 'Model#',
            searchTerm: $('tr td:contains("Model:")').next('td').text().trim()
        });
    }
}


if (quickSearchInfo.greeting !== 'Amazon product page!') {
    if (typeof identifiers[1] !== "undefined") {
        quickSearchInfo.searchtype = identifiers[1].searchName;
        quickSearchInfo.searchterm = identifiers[1].searchTerm;
    } else if (typeof identifiers[0] !== "undefined") {
        quickSearchInfo.searchtype = identifiers[0].searchName;
        quickSearchInfo.searchterm = identifiers[0].searchTerm;
    }
}

//not working by jet
//if (identifiers.length) {
//    chrome.runtime.sendMessage({ greeting: 'Make page active' });
//}

//if (identifiers[0]!=='undefined') {
//    chrome.runtime.sendMessage({ greeting: "change color" });
//}

// to newpopup.js line 23
//chrome.runtime.sendMessage({ greeting: 'I have info!', productName: productName, UPCCode: UPCCode, modelNumber: modelNumber });
chrome.runtime.sendMessage({ greeting: "identifiers", identifiers: identifiers, productAndSiteInfo: productAndSiteInfo, quickSearchInfo: quickSearchInfo });

function url_domain(data) {
    var a = document.createElement('a');
    a.href = data;
    return a.hostname;
}

//});
