sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/assetentrymanage/test/integration/FirstJourney',
		'com/banfftech/assetentrymanage/test/integration/pages/AssetEntriesList',
		'com/banfftech/assetentrymanage/test/integration/pages/AssetEntriesObjectPage'
    ],
    function(JourneyRunner, opaJourney, AssetEntriesList, AssetEntriesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/assetentrymanage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAssetEntriesList: AssetEntriesList,
					onTheAssetEntriesObjectPage: AssetEntriesObjectPage
                }
            },
            opaJourney.run
        );
    }
);