sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/projectquery/test/integration/FirstJourney',
		'com/banfftech/projectquery/test/integration/pages/GssContentDimensionsList',
		'com/banfftech/projectquery/test/integration/pages/GssContentDimensionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, GssContentDimensionsList, GssContentDimensionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/projectquery') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheGssContentDimensionsList: GssContentDimensionsList,
					onTheGssContentDimensionsObjectPage: GssContentDimensionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);