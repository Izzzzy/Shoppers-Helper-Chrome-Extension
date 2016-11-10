$(function () {

    var stores = [
       {
           categoryClasses: 'electronics-and-office',
           //took out
           //not sure but took out
           //not sure but left in
           divId: 'adorama-div',
           dataSearchLink: 'http://www.adorama.com/searchsite/default.aspx?searchinfo=',
           dataAppendToSearchLink: '',
           linkId: 'adorama-link',
           nameForButton: 'ADORAMA',
           href: 'http://www.adorama.com',
           upcAId: 'upc-adorama-link',
           modelAId: 'model-number-adorama-link'
       },
       {
           categoryClasses: 'auto',
           //took out
           //not sure but took out
           //not sure but left in
           divId: 'advanceautoparts-div',
           dataSearchLink: 'http://shop.advanceautoparts.com/web/PartSearchCmd?storeId=10151&catalogId=10051&pageId=partTypeList&suggestion=&actionSrc=Form&langId=-1&vehicleIdSearch=-1&searchTerm=',
           dataAppendToSearchLink: '&searchedFrom=header',
           linkId: 'advanceautoparts-link',
           nameForButton: 'ADVANCE AUTO PARTS',
           href: 'https://www.advanceautoparts.com',
           upcAId: 'upc-advanceautoparts-link',
           modelAId: 'model-number-advanceautoparts-link'
       },
       {
           categoryClasses: 'auto baby-toddler books cell-phones-accessories clothing computers department-stores electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath outlet photo sports-outdoors tools-hardware',
           //took out
           //not sure but took out
           //not sure but left in
           divId: 'amazon-div',
           dataSearchLink: 'https://www.amazon.com/s/?field-keywords=',
           dataAppendToSearchLink: '',
           linkId: 'amazon-link',
           nameForButton: 'AMAZON',
           href: 'https://www.amazon.com',
           upcAId: 'upc-amazon-link',
           modelAId: 'model-number-amazon-link'
       },
       {
           categoryClasses: 'auto',
           //took out
           //not sure but took out
           //not sure but left in
           divId: 'autozone-div',
           dataSearchLink: 'http://www.autozone.com/searchresult?searchText=',
           dataAppendToSearchLink: '',
           linkId: 'autozone-link',
           nameForButton: 'AUTO ZONE',
           href: 'https://www.autozone.com',
           upcAId: 'upc-autozone-link',
           modelAId: 'model-number-autozone-link'
       },
       {
           categoryClasses: 'health-beauty home-garden kids kitchen-bath ',
           //took out auto cell-phones-accessories computers department-stores electronics-and-office jewelry-watches outlet photo books  groceries tools-hardware
           //not sure but took out baby-toddler furniture-and-decor sports-outdoors clothing
           //not sure but left in health-beauty home-garden kids
           divId: 'bedbathandbeyond-div',
           dataSearchLink: 'https://www.bedbathandbeyond.com/store/s/',
           dataAppendToSearchLink: '',
           linkId: 'bedbathandbeyond-link',
           nameForButton: 'BED BATH & BEYOND',
           href: 'https://www.bedbathandbeyond.com',
           upcAId: 'upc-bedbathandbeyond-link',
           modelAId: 'model-number-bedbathandbeyond-link'
       },
       {
           categoryClasses: 'cell-phones-accessories computers electronics-and-office',
           //took out auto baby-toddler books  clothing department-stores groceries health-beauty home-garden jewelry-watches  kitchen-bath sports-outdoors tools-hardware
           //not sure but took out furniture-and-decor kids outlet photo
           //not sure but left in
           divId: 'bestbuy-div',
           dataSearchLink: 'http://click.linksynergy.com/fs-bin/click?id=m*/k*5ti41w&subid=&offerid=448595.1&type=10&tmpid=13127&RD_PARM1=http%253A%252F%252Fwww.bestbuy.com%252Fsite%252Fsearchpage.jsp%253Fst%253D',
           dataAppendToSearchLink: '%2526_dyncharset%253DUTF-8%2526id%253Dpcat17071%2526type%253Dpage%2526sc%253DGlobal%2526cp%253D1%2526nrp%253D%2526sp%253D%2526qp%253D%2526list%253Dn%2526af%253Dtrue%2526iht%253Dy%2526usc%253DAll%252BCategories%2526ks%253D960%2526keys%253Dkeys',
           linkId: 'bestbuy-link',
           nameForButton: 'BEST BUY',
           href: 'http://click.linksynergy.com/fs-bin/click?id=m*/k*5ti41w&subid=&offerid=448595.1&type=10&tmpid=13128&RD_PARM1=http%3A%2F%2Fwww.bestbuy.com',
           upcAId: 'upc-bestbuy-link',
           modelAId: 'model-number-bestbuy-link'
       },
       {
           categoryClasses: 'clothing',
           //took out auto cell-phones-accessories computers electronics-and-office furniture-and-decor groceries home-garden kitchen-bath photo sports-outdoors tools-hardware
           //not sure but took out  baby-toddler books department-stores health-beauty jewelry-watches kids outlet
           //not sure but left in
           divId: 'bloomingdales-div',
           dataSearchLink: 'http://www1.bloomingdales.com/shop/search?keyword=',
           dataAppendToSearchLink: '',
           linkId: 'bloomingdales-link',
           nameForButton: "BLOOMINGDALE'S",
           href: 'https://www.bloomingdales.com',
           upcAId: 'upc-bloomingdales-link',
           modelAId: 'model-number-bloomingdales-link'
       },
       {
           categoryClasses: ' cell-phones-accessories computers electronics-and-office',
           //took out baby-toddler books clothing department-stores furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath sports-outdoors tools-hardware
           //not sure but took out auto outlet photo
           //not sure but left in
           divId: 'buydig-div',
           dataSearchLink: 'http://www.buydig.com/shop/list/keyword/',
           dataAppendToSearchLink: '',
           linkId: 'buydig-link',
           nameForButton: 'BUYDIG',
           href: 'https://www.buydig.com',
           upcAId: 'upc-buydig-link',
           modelAId: 'model-number-buydig-link'
       },
       {
           categoryClasses: 'baby-toddler kids',
           //took out  books clothing department-stores furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath sports-outdoors tools-hardware
           //not sure but took out auto outlet photo
           //not sure but left in
           divId: 'childrensplace-div',
           dataSearchLink: 'http://www.childrensplace.com/shop/SearchDisplay?storeId=10151&catalogId=10551&langId=-1&pageSize=100&beginIndex=0&searchSource=Q&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&pageView=image&custSrch=search&searchTerm=',
           dataAppendToSearchLink: '',
           linkId: 'childrensplace-link',
           nameForButton: "THE CHILDREN'S PLACE",
           href: 'https://www.childrensplace.com',
           upcAId: 'upc-childrensplace-link',
           modelAId: 'model-number-childrensplace-link'
       },
       {
           categoryClasses: 'auto baby-toddler books cell-phones-accessories clothing computers department-stores electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath outlet photo sports-outdoors tools-hardware',
           //took out
           //not sure but took out
           //not sure but left in
           divId: 'ebay-div',
           dataSearchLink: 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575226091&toolid=10001&campid=5337959871&customid=&mpre=http%3A%2F%2Fwww.ebay.com%2Fsch%2Fi.html%3F_nkw%3D',
           dataAppendToSearchLink: '',
           linkId: 'ebay-link',
           nameForButton: 'EBAY',
           href: 'http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575226091&toolid=10001&campid=5337959871&customid=&mpre=http%3A%2F%2Fwww.ebay.com',
           upcAId: 'upc-ebay-link',
           modelAId: 'model-number-ebay-link'
       },
       {
           categoryClasses: 'cell-phones-accessories computers electronics-and-office',
           //took out auto baby-toddler books  clothing department-stores furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath outlet photo sports-outdoors tools-hardware
           //not sure but took out 
           //not sure but left in
           divId: 'fryselectronics-div',
           dataSearchLink: 'http://frys.com/search?search_type=regular&sqxts=1&cat=&query_string=',
           dataAppendToSearchLink: '',
           linkId: 'fryselectronics-link',
           nameForButton: "FRY'S ELECTRONICS",
           href: 'https://www.fryselectronics.com',
           upcAId: 'upc-fryselectronics-link',
           modelAId: 'model-number-fryselectronics-link'
       },
       {
           categoryClasses: 'baby-toddler clothing',
           //took out auto cell-phones-accessories computers electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kitchen-bath photo sports-outdoors tools-hardware
           //not sure but took out books department-stores outlet kids
           //not sure but left in
           divId: 'gap-div',
           dataSearchLink: 'http://www.gap.com/browse/search.do?searchText=',
           dataAppendToSearchLink: '',
           linkId: 'gap-link',
           nameForButton: 'GAP',
           href: 'https://www.gap.com',
           upcAId: 'upc-gap-link',
           modelAId: 'model-number-gap-link'
       },
        {
            categoryClasses: 'baby-toddler clothing computers health-beauty home-garden jewelry-watches kids kitchen-bath',
            //took out auto  books cell-phones-accessories electronics-and-office furniture-and-decor groceries photo tools-hardware
            //not sure but took out department-stores outlet sports-outdoors
            //not sure but left in
            divId: 'gilt-div',
            dataSearchLink: 'https://www.gilt.com/search?q.query=',
            dataAppendToSearchLink: '',
            linkId: 'gilt-link',
            nameForButton: 'GILT',
            href: 'https://www.gilt.com',
            upcAId: 'upc-gilt-link',
            modelAId: 'model-number-gilt-link'
        },
       {
           categoryClasses: 'baby-toddler books cell-phones-accessories clothing computers electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath outlet photo sports-outdoors tools-hardware',
           //took out
           //not sure but took out department-stores auto
           //not sure but left in 
           divId: 'groupon-div',
           dataSearchLink: 'https://www.groupon.com/browse/?query=',
           dataAppendToSearchLink: '&locale=en_US',
           linkId: 'groupon-link',
           nameForButton: 'GROUPON',
           href: 'https://www.groupon.com',
           upcAId: 'upc-groupon-link',
           modelAId: 'model-number-groupon-link'
       },
       {
           categoryClasses: ' clothing',
           //took out auto baby-toddler books cell-phones-accessories computers electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kitchen-bath photo sports-outdoors tools-hardware
           //not sure but took out department-stores kids outlet
           //not sure but left in
           divId: 'guess-div',
           dataSearchLink: 'http://shop.guess.com/en/Catalog/Search/?criteria=',
           dataAppendToSearchLink: '',
           linkId: 'guess-link',
           nameForButton: 'GUESS',
           href: 'https://www.guess.com',
           upcAId: 'upc-guess-link',
           modelAId: 'model-number-guess-link'
       },
       {
           categoryClasses: 'furniture-and-decor home-garden kitchen-bath sports-outdoors tools-hardware',
           //took out baby-toddler books cell-phones-accessories clothing computers electronics-and-office groceries jewelry-watches kids photo
           //not sure but took out auto department-stores health-beauty outlet 
           //not sure but left in furniture-and-decor sports-outdoors
           divId: 'hdsupplysolutions-div',
           dataSearchLink: 'http://hdsupplysolutions.com/shop/SearchDisplay?storeId=10051&catalogId=10054&langId=-1&pageSize=24&beginIndex=0&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&searchType=1002&searchTerm=',
           dataAppendToSearchLink: '',
           linkId: 'hdsupplysolutions-link',
           nameForButton: "HD SUPPLY SOLUTIONS",
           href: 'http://www.hdsupplysolutions.com',
           upcAId: 'upc-hdsupplysolutions-link',
           modelAId: 'model-number-hdsupplysolutions-link'
       },
       {
           categoryClasses: 'furniture-and-decor home-garden kitchen-bath sports-outdoors tools-hardware',
           //took out baby-toddler books cell-phones-accessories clothing computers electronics-and-office groceries jewelry-watches kids photo
           //not sure but took out auto department-stores health-beauty outlet 
           //not sure but left in furniture-and-decor sports-outdoors
           divId: 'homedepot-div',
           dataSearchLink: 'http://www.homedepot.com/s/',
           dataAppendToSearchLink: '',
           linkId: 'homedepot-link',
           nameForButton: "HOME DEPOT",
           href: 'http://www.homedepot.com',
           upcAId: 'upc-homedepot-link',
           modelAId: 'model-number-homedepot-link'
       },
       {
           categoryClasses: ' baby-toddler clothing furniture-and-decor health-beauty home-garden jewelry-watches kids kitchen-bath photo',
           //took out auto books cell-phones-accessories computers electronics-and-office groceries
           //not sure but took out  department-stores outlet sports-outdoors tools-hardware
           //not sure but left in
           divId: 'jcpenny-div',
           dataSearchLink: 'http://www.jcpenney.com/s/',
           dataAppendToSearchLink: '',
           linkId: 'jcpenny-link',
           nameForButton: 'JCPENNY',
           href: 'https://www.jcpenny.com',
           upcAId: 'upc-jcpenny-link',
           modelAId: 'model-number-jcpenny-link'
       },
{
    categoryClasses: 'auto baby-toddler books cell-phones-accessories clothing computers department-stores electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath outlet photo sports-outdoors tools-hardware',
    //took out
    //not sure but took out
    //not sure but left in
    divId: 'jet-div',
    dataSearchLink: 'https://jet.com/search?term=',
    dataAppendToSearchLink: '',
    linkId: 'jet-link',
    nameForButton: 'JET',
    href: 'https://www.jet.com',
    upcAId: 'upc-jet-link',
    modelAId: 'model-number-jet-link'
},
       {
           categoryClasses: 'baby-toddler cell-phones-accessories clothing computers department-stores electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath photo sports-outdoors tools-hardware',
           //took out auto
           //not sure but took out books outlet
           //not sure but left in
           divId: 'kmart-div',
           dataSearchLink: 'http://www.kmart.com/search=',
           dataAppendToSearchLink: '',
           linkId: 'kmart-link',
           nameForButton: 'KMART',
           href: 'https://www.kmart.com',
           upcAId: 'upc-kmart-link',
           modelAId: 'model-number-kmart-link'
       },
       {
           categoryClasses: 'baby-toddler clothing jewelry-watches kids kitchen-bath',
           //took out auto  cell-phones-accessories computers electronics-and-office furniture-and-decor groceries home-garden photo sports-outdoors tools-hardware
           //not sure but took out books department-stores health-beauty outlet
           //not sure but left in kitchen-bath

           divId: 'kohls-div',
           dataSearchLink: 'http://www.kohls.com/search.jsp?search=',
           dataAppendToSearchLink: '',
           linkId: 'kohls-link',
           nameForButton: "KOHL'S",
           href: 'https://www.kohls.com',
           upcAId: 'upc-kohls-link',
           modelAId: 'model-number-kohls-link'
       },
       {
           categoryClasses: 'furniture-and-decor home-garden kitchen-bath sports-outdoors tools-hardware',
           //took out baby-toddler books cell-phones-accessories clothing computers electronics-and-office groceries jewelry-watches kids photo
           //not sure but took out auto department-stores health-beauty outlet 
           //not sure but left in furniture-and-decor sports-outdoors
           divId: 'lowes-div',
           dataSearchLink: 'https://www.lowes.com/search?searchTerm=',
           dataAppendToSearchLink: '',
           linkId: 'lowes-link',
           nameForButton: "LOWE'S",
           href: 'https://www.lowes.com',
           upcAId: 'upc-lowes-link',
           modelAId: 'model-number-lowes-link'
       },
       {
           categoryClasses: 'clothing ',
           //took out auto books cell-phones-accessories computers electronics-and-office groceriesphoto sports-outdoors tools-hardware
           //not sure but took out baby-toddler department-stores furniture-and-decor health-beauty home-garden jewelry-watches kids kitchen-bath outlet
           //not sure but left in
           divId: 'macys-div',
           dataSearchLink: 'http://www1.macys.com/shop/featured/',
           dataAppendToSearchLink: '',
           linkId: 'macys-link',
           nameForButton: "MACY'S",
           href: 'https://www.macys.com',
           upcAId: 'upc-macys-link',
           modelAId: 'model-number-macys-link'
       },
       {
           categoryClasses: 'cell-phones-accessories computers electronics-and-office photo',
           //took out auto baby-toddler books clothing  groceries health-beauty home-garden jewelry-watches kids kitchen-bath sports-outdoors tools-hardware
           //not sure but took out department-stores furniture-and-decor outlet
           //not sure but left in photo
           divId: 'newegg-div',
           dataSearchLink: 'http://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=',
           dataAppendToSearchLink: '',
           linkId: 'newegg-link',
           nameForButton: 'NEWEGG',
           href: 'https://www.newegg.com',
           upcAId: 'upc-newegg-link',
           modelAId: 'model-number-newegg-link'
       },
       {
           categoryClasses: 'clothing ',
           //took out auto books cell-phones-accessories computers electronics-and-office groceriesphoto sports-outdoors tools-hardware
           //not sure but took out baby-toddler department-stores furniture-and-decor health-beauty home-garden jewelry-watches kids kitchen-bath outlet
           //not sure but left in
           divId: 'nordstrom-div',
           dataSearchLink: 'http://shop.nordstrom.com/sr?origin=keywordsearch&contextualcategoryid=0&keyword=',
           dataAppendToSearchLink: '',
           linkId: 'nordstrom-link',
           nameForButton: 'NORDSTROM',
           href: 'https://www.nordstrom.com',
           upcAId: 'upc-nordstrom-link',
           modelAId: 'model-number-nordstrom-link'
       },
       {
           categoryClasses: ' cell-phones-accessories computers electronics-and-office furniture-and-decor photo',
           //took ou tauto baby-toddler books clothing groceries health-beauty home-garden jewelry-watches kids kitchen-bath sports-outdoors tools-hardware
           //not sure but took out department-stores outlet
           //not sure but left in furniture-and-decor photo
           divId: 'officedepot-div',
           dataSearchLink: 'http://www.officedepot.com/catalog/search.do?Ntt=',
           dataAppendToSearchLink: '',
           linkId: 'officedepot-link',
           nameForButton: 'OFFICE DEPOT',
           href: 'https://www.officedepot.com',
           upcAId: 'upc-officedepot-link',
           modelAId: 'model-number-officedepot-link'
       },
       {
           categoryClasses: 'baby-toddler clothing',
           //took out auto cell-phones-accessories computers electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kitchen-bath photo sports-outdoors tools-hardware
           //not sure but took out books department-stores outlet kids
           //not sure but left in
           divId: 'oldnavy-div',
           dataSearchLink: 'http://oldnavy.gap.com/browse/search.do?searchText=',
           dataAppendToSearchLink: '',
           linkId: 'oldnavy-link',
           nameForButton: 'OLD NAVY',
           href: 'https://www.oldnavy.com',
           upcAId: 'upc-oldnavy-link',
           modelAId: 'model-number-oldnavy-link'
       },
       {
           categoryClasses: 'baby-toddler clothing',
           //took out auto books cell-phones-accessories clothing computers electronics-and-office groceries health-beauty tools-hardware
           //not sure but took out department-stores photo
           //not sure but left in
           divId: 'oshkosh-div',
           dataSearchLink: 'http://www.oshkosh.com/on/demandware.store/Sites-Carters-Site/default/Search-Show?q=',
           dataAppendToSearchLink: '',
           linkId: 'oshkosh-link',
           nameForButton: "OSH KOSH B'GOSH",
           href: 'https://www.oshkosh.com',
           upcAId: 'upc-oshkosh-link',
           modelAId: 'model-number-oshkosh-link'
       },
       {
           categoryClasses: 'baby-toddler furniture-and-decor home-garden jewelry-watches kids kitchen-bath outlet sports-outdoors',
           //took out auto books cell-phones-accessories clothing computers electronics-and-office groceries health-beauty tools-hardware
           //not sure but took out department-stores photo
           //not sure but left in
           divId: 'overstock-div',
           dataSearchLink: 'https://www.overstock.com/search?keywords=',
           dataAppendToSearchLink: '',
           linkId: 'overstock-link',
           nameForButton: 'OVERSTOCK',
           href: 'https://www.overstock.com',
           upcAId: 'upc-overstock-link',
           modelAId: 'model-number-overstock-link'
       },
       {
           categoryClasses: 'baby-toddler clothing books cell-phones-accessories computers electronics-and-office health-beauty home-garden jewelry-watches kids kitchen-bath outlet photo sports-outdoors tools-hardware',
           //took out auto groceries
           //not sure but took out department-stores furniture-and-decor
           //not sure but left in photo
           divId: 'rakuten-div',
           dataSearchLink: 'http://www.rakuten.com/sr/searchresults#qu=',
           dataAppendToSearchLink: '',
           linkId: 'rakuten-link',
           nameForButton: 'RAKUTEN',
           href: 'https://www.rakuten.com',
           upcAId: 'upc-rakuten-link',
           modelAId: 'model-number-rakuten-link'
       },
       {
           categoryClasses: 'auto baby-toddler books cell-phones-accessories clothing computers department-stores electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath outlet photo sports-outdoors tools-hardware',
           //took out
           //not sure but took out
           //not sure but left in department-stores
           divId: 'samsclub-div',
           dataSearchLink: 'http://www.samsclub.com/sams/search/searchResults.jsp?searchCategoryId=all&searchTerm=',
           dataAppendToSearchLink: '',
           linkId: 'samsclub-link',
           nameForButton: "SAM'S CLUB",
           href: 'https://www.samsclub.com',
           upcAId: 'upc-samsclub-link',
           modelAId: 'model-number-samsclub-link'
       },
       {
           categoryClasses: 'auto baby-toddler books cell-phones-accessories clothing computers department-stores electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath outlet photo sports-outdoors tools-hardware',
           //took out
           //not sure but took out
           //not sure but left in department-stores
           divId: 'sears-div',
           dataSearchLink: 'http://www.sears.com/search=',
           dataAppendToSearchLink: '',
           linkId: 'sears-link',
           nameForButton: 'SEARS',
           href: 'https://www.sears.com',
           upcAId: 'upc-sears-link',
           modelAId: 'model-number-sears-link'
       },
       {
           categoryClasses: 'cell-phones-accessories computers electronics-and-office',
           //took out auto baby-toddler clothing groceries health-beauty home-garden jewelry-watches kids kitchen-bath
           //not sure but took out books department-stores furniture-and-decor outlet photo sports-outdoors tools-hardware
           //not sure but left in
           divId: 'staples-div',
           dataSearchLink: 'http://www.staples.com/',
           dataAppendToSearchLink: '',
           linkId: 'staples-link',
           nameForButton: 'STAPLES',
           href: 'https://www.staples.com',
           upcAId: 'upc-staples-link',
           modelAId: 'model-number-staples-link'
       },
       {
           categoryClasses: 'baby-toddler cell-phones-accessories clothing computers department-stores electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath photo sports-outdoors tools-hardware',
           //took out auto books
           //not sure but took out outlet
           //not sure but left in
           divId: 'target-div',
           dataSearchLink: 'http://goto.target.com/c/325851/81938/2092?u=http%3A%2F%2Fwww.target.com%2Fs%3FsearchTerm%3D',
           dataAppendToSearchLink: '',
           linkId: 'target-link',
           nameForButton: 'TARGET',
           href: 'http://goto.target.com/c/325851/81938/2092',
           upcAId: 'upc-target-link',
           modelAId: 'model-number-target-link'
       },
       {
           categoryClasses: 'clothing computers electronics-and-office home-garden jewelry-watches kids kitchen-bath sports-outdoors',
           //took out auto baby-toddler books cell-phones-accessories
           //not sure but took out department-stores furniture-and-decor groceries health-beauty  outlet photo tools-hardware
           //not sure but left in clothing home-garden jewelry-watches kitchen-bath
           divId: 'thinkgeek-div',
           dataSearchLink: 'https://www.thinkgeek.com/brain/whereisit.cgi?t=',
           dataAppendToSearchLink: '',
           linkId: 'thinkgeek-link',
           nameForButton: 'THINKGEEK',
           href: 'https://www.thinkgeek.com',
           upcAId: 'upc-thinkgeek-link',
           modelAId: 'model-number-thinkgeek-link'
       },
       {
           categoryClasses: 'cell-phones-accessories computers electronics-and-office',
           //took out auto baby-toddler books clothing department-stores furniture-and-decor groceries health-beauty home-garden jewelry-watches kitchen-bath sports-outdoors tools-hardware
           //not sure but took out kids outlet photo
           //not sure but left in cell-phones-accessories
           divId: 'tigerdirect-div',
           dataSearchLink: 'https://www.tigerdirect.com/applications/SearchTools/search.asp?keywords=',
           dataAppendToSearchLink: '',
           linkId: 'tigerdirect-link',
           nameForButton: 'TIGERDIRECT',
           href: 'https://www.tigerdirect.com',
           upcAId: 'upc-tigerdirect-link',
           modelAId: 'model-number-tigerdirect-link'
       },
       {
           categoryClasses: 'baby-toddler electronics-and-office kids sports-outdoors',
           //took out auto books cell-phones-accessories clothing computers furniture-and-decor groceries health-beauty home-garden jewelry-watches kitchen-bath tools-hardware
           //not sure but took out department-stores outlet photo
           //not sure but left in
           divId: 'toysrus-div',
           dataSearchLink: 'http://www.toysrus.com/search/controller.jsp?kw=',
           dataAppendToSearchLink: '',
           linkId: 'toysrus-link',
           nameForButton: 'TOYS R US',
           href: 'https://www.toysrus.com',
           upcAId: 'upc-toysrus-link',
           modelAId: 'model-number-toysrus-link'
       },
       {
           categoryClasses: 'furniture-and-decor',
           //took out
           //not sure but took out
           //not sure but left in
           divId: 'wayfair-div',
           dataSearchLink: 'https://www.wayfair.com/keyword.php?keyword=',
           dataAppendToSearchLink: '',
           linkId: 'wayfair-link',
           nameForButton: 'WAYFAIR',
           href: 'https://www.wayfair.com',
           upcAId: 'upc-wayfair-link',
           modelAId: 'model-number-wayfair-link'
       },
       {
           categoryClasses: 'auto baby-toddler books cell-phones-accessories clothing computers department-stores electronics-and-office furniture-and-decor groceries health-beauty home-garden jewelry-watches kids kitchen-bath outlet photo sports-outdoors tools-hardware',
           //took out
           //not sure but took out
           //not sure but left in
           divId: 'walmart-div',
           dataSearchLink: 'https://www.walmart.com/search/?query=',
           dataAppendToSearchLink: '',
           linkId: 'walmart-link',
           nameForButton: 'WALMART',
           href: 'https://www.walmart.com',
           upcAId: 'upc-walmart-link',
           modelAId: 'model-number-walmart-link'
       },
       {
           categoryClasses: 'baby-toddler clothing jewelry-watches',
           //took out auto books cell-phones-accessories computers electronics-and-office furniture-and-decor groceries health-beauty home-garden photo sports-outdoors tools-hardware
           //not sure but took out department-stores kitchen-bath outlet kids
           //not sure but left in baby-toddler
           divId: '6pm-div',
           dataSearchLink: 'http://6pm.com/',
           dataAppendToSearchLink: '',
           linkId: '6pm-link',
           nameForButton: '6pm.com',
           href: 'https://www.6pm.com',
           upcAId: 'upc-6pm-link',
           modelAId: 'model-number-6pm-link'
       }
];

//$('#upc-code').value='';//('');
//$('#model-number').val('');

for (var i = 0; i < stores.length; i++) {
    $('#stores-table').append('<tr id="' + stores[i].divId + '"class="store-div ' + stores[i].categoryClasses + '" data-search-link="' + stores[i].dataSearchLink +
        '" data-append-to-search-link="' + stores[i].dataAppendToSearchLink + '"><td><input id="' + stores[i].divId + '-checkbox" type="checkbox" class="checkboxed"> <a id="' + stores[i].linkId +
        '" class="store-link" target="_blank" href="' + stores[i].href + '"><span style="font-size:12pt;margin:auto">' + stores[i].nameForButton +
        '</span></a></td><td><a id="'
        + stores[i].modelAId + '" class="btn btn-primary btn-xs primary-search-link"style="width:60px;height:22px;" target="_blank" href="' + stores[i].href + '">SEARCH</a></td><td><a id="' +
        stores[i].upcAId + '" class="btn btn-second-search btn-warning btn-xs upc-link"style="width:60px;height:22px;" target="_blank" href="' + stores[i].href + '">2nd Search</a></td><td><a id="'
        + stores[i].modelAId + '" class="btn btn-third-search btn-info btn-xs model-link"style="width:60px;height:22px;" target="_blank" href="' + stores[i].href + '">3rd Search</a></td></tr>');
}

$('#primary-group-search').click(function () {
    for (var i = 0; i < stores.length; i++) {
        if ($('#stores-table #' + stores[i].divId + '-checkbox').is(':checked')) {
            //alert(stores[i].divId);
            //setTimeout(function () {        
            $('#stores-table #' + stores[i].divId + ' .primary-search-link')[0].click();
            //$('#stores-table #' + stores[i].divId + ' .primary-search-link')[0].trigger('click');
            //},200);
        }
    }
});
$('#second-group-search').click(function () {
    for (var i = 0; i < stores.length; i++) {
        if ($('#stores-table #' + stores[i].divId + '-checkbox').is(':checked')) {
            //alert(stores[i].divId);
            $('#stores-table #' + stores[i].divId + ' .upc-link')[0].click();
            //$('#stores-table #' + stores[i].upcAId)[0].click();
        }
    }
});
$('#third-group-search').click(function () {
    for (var i = 0; i < stores.length; i++) {
        if ($('#stores-table #' + stores[i].divId + '-checkbox').is(':checked')) {
            //alert(stores[i].divId);
            $('#stores-table #' + stores[i].divId + ' .model-link')[0].click();
        }
    }
});

$("body").keydown(function (e) {
    if (e.keyCode === 13) {
        if ($("#search-text").is(":focus") && $("#search-text").val().length > 0) {
            $('#primary-group-search').click();
        } else if ($("#upc-code").is(":focus") && $("#upc-code").val().length > 0) {
            $('#second-group-search').click();
        } else if ($("#model-number").is(":focus") && $("#model-number").val().length > 0) {
            $('#third-group-search').click();
        }
    }
});

$('#stores-table .checkboxed').change(function () {
    //alert('che');
    var checkedStores = '';
    for (var i = 0; i < stores.length; i++) {
        if ($('#stores-table #' + stores[i].divId + '-checkbox').is(':checked')) {
            checkedStores += stores[i].divId + ',';
        }
    }
    document.cookie = "onlineshoppershelper-" + $('#sort-selectbox').val() + '=' + checkedStores;// + "; expires=Wed, 31 Dec 2025 12:00:00 UTC";
});

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

if (readCookie('last category') !== null) {
    $('#sort-selectbox').val(readCookie('last category'));
    changeCategory();
}
if (readCookie('onlineshoppershelper-' + $('#sort-selectbox').val()) !== null) {
    var chosenStores = readCookie('onlineshoppershelper-' + $('#sort-selectbox').val());
    for (var i = 0; i < stores.length; i++) {
        if (chosenStores.indexOf(stores[i].divId) > -1) {
            $('#stores-table #' + stores[i].divId + '-checkbox').prop('checked', true);
        }
    }
}

$('#sort-selectbox').on('change', function () {
    //alert(this.value); // or $(this).val()

    document.cookie = "last category" + '=' + $('#sort-selectbox').val();

    changeCategory();
});



$('#search-text').focus();
$('#add-model-number').hide();

//window.onload(function(){
if ($('#upc-code').val() === '' && $('#model-number').val() !== '') {
    $('#upc-code').val($('#model-number').val());
    $('#model-number').val('');
}
if ($('#search-text').val() === '' && $('#upc-code').val() !== '') {
    $('#search-text').val($('#upc-code').val());
    $('#upc-code').val('');
}
if ($('#upc-code').val() === '' && $('#model-number').val() !== '') {
    $('#upc-code').val($('#model-number').val());
    $('#model-number').val('');
}

$(document).ready(function () {

    if ($('#search-text').val().length) {
        $('.btn-primary.btn-xs.primary-search-link').show();
    } else {
        $('.btn-primary.btn-xs.primary-search-link').hide();
    }

    if (!$('#upc-code').val().length) {
        $('#second-search-div').hide();
        $('.btn-second-search.btn-warning.btn-xs').hide();
    } else {
        $('#second-search-div').show();
        $('.btn-second-search.btn-warning.btn-xs').show();
        $('#add-upc').hide();
        $('#add-model-number').show();
    }
});

if ($('#model-number').val() === '') {
    $('#third-search-div').hide();
    $('.btn-third-search.btn-info.btn-xs').hide();
} else {
    $('#third-search-div').show();
    $('.btn-third-search.btn-info.btn-xs').show();
    $('#add-model-number').hide();
}



//});


setMainLinks();

setUpcLinks();
setModelNumberLinks();


$('#add-upc').click(function () {
    $('#add-upc').hide();
    $('#second-search-div').show();
    $('#upc-code').focus();
    $('#add-model-number').show();
});

$('#add-model-number').click(function () {
    $('#add-model-number').hide();
    $('#third-search-div').show();
    $('#model-number').focus();
});



$('#search-text').on('input', function () {
    setMainLinks();
    if ($('#search-text').val().length) {
        $('.btn-primary.btn-xs.primary-search-link').show();
    } else {
        $('.btn-primary.btn-xs.primary-search-link').hide();
    }


});

$('#primary-search-name').on('input', function () {
    var text = $('#primary-search-name').val();
    if ($('#primary-search-name').val().length > 10) {
        $('#primary-search-name').val(text.substring(0, 10));
    }

    if ($('#primary-search-name').val().length) {

        $('.btn-primary.btn-xs').html($('#primary-search-name').val());
    } else {
        $('.btn-primary.btn-xs').html('PRIMARY');
    }
});

$('#upc-code').on('input', function () {
    setUpcLinks();
    if ($('#upc-code').val().length) {
        $('.btn-second-search.btn-warning.btn-xs').show();
    } else {
        $('.btn-second-search.btn-warning.btn-xs').hide();
    }
});
$('#second-search-name').on('input', function () {
    var text = $('#second-search-name').val();
    if ($('#second-search-name').val().length > 10) {
        $('#second-search-name').val(text.substring(0, 10));
    }

    if ($('#second-search-name').val().length) {

        $('.btn-second-search.btn-warning.btn-xs').html($('#second-search-name').val());
    } else {
        $('.btn-second-search.btn-warning.btn-xs').html('2nd Search');
    }
});

$('#model-number').on('input', function () {
    setModelNumberLinks();
    if ($('#model-number').val().length) {
        $('.btn-third-search.btn-info.btn-xs').show();
    } else {
        $('.btn-third-search.btn-info.btn-xs').hide();
    }
});
$('#third-search-name').on('input', function () {
    var text = $('#third-search-name').val();
    if ($('#third-search-name').val().length > 10) {
        $('#third-search-name').val(text.substring(0, 10));
    }
    if ($('#third-search-name').val().length) {
        $('.btn-third-search.btn-info.btn-xs').html($('#third-search-name').val());
    } else {
        $('.btn-third-search.btn-info.btn-xs').html('3rd Search');
    }
});


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
        $('#target-link').attr('href', 'http://goto.target.com/c/325851/81938/2092');
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
    }
};

function changeCategory() {
    $('#stores-table .checkboxed').prop('checked', false);

    if (readCookie('onlineshoppershelper-' + $('#sort-selectbox').val()) !== null) {
        var chosenStores = readCookie('onlineshoppershelper-' + $('#sort-selectbox').val());
        for (var i = 0; i < stores.length; i++) {
            if (chosenStores.indexOf(stores[i].divId) > -1) {
                $('#stores-table #' + stores[i].divId + '-checkbox').prop('checked', true);
            }
        }
    }
    if ($('#sort-selectbox').val() === 'auto') {

        $('.store-div').hide();
        $('.auto').show();
    } else if ($('#sort-selectbox').val() === 'bed-bath') {
        $('.store-div').hide();
        $('.kitchen-bath').show();
    } else if ($('#sort-selectbox').val() === 'clothing') {
        $('.store-div').hide();
        $('.clothing').show();
    } else if ($('#sort-selectbox').val() === 'electronics') {
        $('.store-div').hide();
        $('.electronics-and-office').show();
    } else if ($('#sort-selectbox').val() === 'furniture') {
        $('.store-div').hide();
        $('.furniture-and-decor').show();
    } else if ($('#sort-selectbox').val() === 'home-garden') {
        $('.store-div').hide();
        $('.home-garden').show();
    } else if ($('#sort-selectbox').val() === 'sports-outdoors') {
        $('.store-div').hide();
        $('.sports-outdoors').show();
    } else if ($('#sort-selectbox').val() === 'tools') {
        $('.store-div').hide();
        $('.tools-hardware').show();
    } else if ($('#sort-selectbox').val() === 'toys') {
        $('.store-div').hide();
        $('.kids').show();
    } else if ($('#sort-selectbox').val() === 'all') {

        $('.store-div').show();
    }
}

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
$('#bottom-container').append('<span>Disclosure: This site receives compensation from some of the companies whose sites are linked to on this site.</span>');
});
