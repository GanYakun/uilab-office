sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/assetpickuprequestmanage/test/integration/FirstJourney',
		'com/banfftech/assetpickuprequestmanage/test/integration/pages/AssetPickUpRequestsList',
		'com/banfftech/assetpickuprequestmanage/test/integration/pages/AssetPickUpRequestsObjectPage'
    ],
    function(JourneyRunner, opaJourney, AssetPickUpRequestsList, AssetPickUpRequestsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/assetpickuprequestmanage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAssetPickUpRequestsList: AssetPickUpRequestsList,
					onTheAssetPickUpRequestsObjectPage: AssetPickUpRequestsObjectPage
                }
            },
            opaJourney.run
        );
    }
);