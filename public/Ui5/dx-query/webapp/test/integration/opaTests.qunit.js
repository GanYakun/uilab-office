sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/dxquery/test/integration/FirstJourney',
		'com/banfftech/dxquery/test/integration/pages/DXsList',
		'com/banfftech/dxquery/test/integration/pages/DXsObjectPage'
    ],
    function(JourneyRunner, opaJourney, DXsList, DXsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/dxquery') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheDXsList: DXsList,
					onTheDXsObjectPage: DXsObjectPage
                }
            },
            opaJourney.run
        );
    }
);