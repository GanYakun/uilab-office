sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/productmanage/test/integration/FirstJourney',
		'com/banfftech/productmanage/test/integration/pages/ProductsList',
		'com/banfftech/productmanage/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/productmanage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);