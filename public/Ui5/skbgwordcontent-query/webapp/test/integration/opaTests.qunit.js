sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/skbgwordcontentquery/test/integration/FirstJourney',
		'com/banfftech/skbgwordcontentquery/test/integration/pages/SkbgContentDimensionsList',
		'com/banfftech/skbgwordcontentquery/test/integration/pages/SkbgContentDimensionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, SkbgContentDimensionsList, SkbgContentDimensionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/skbgwordcontentquery') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSkbgContentDimensionsList: SkbgContentDimensionsList,
					onTheSkbgContentDimensionsObjectPage: SkbgContentDimensionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);