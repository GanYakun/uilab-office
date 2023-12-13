sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/jxquery/test/integration/FirstJourney',
		'com/banfftech/jxquery/test/integration/pages/JXsList',
		'com/banfftech/jxquery/test/integration/pages/JXsObjectPage'
    ],
    function(JourneyRunner, opaJourney, JXsList, JXsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/jxquery') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheJXsList: JXsList,
					onTheJXsObjectPage: JXsObjectPage
                }
            },
            opaJourney.run
        );
    }
);