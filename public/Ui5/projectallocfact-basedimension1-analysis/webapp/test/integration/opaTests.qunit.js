sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/projectallocfactbasedimension1analysis/test/integration/FirstJourney',
		'com/banfftech/projectallocfactbasedimension1analysis/test/integration/pages/ProjectAllocFactViewsList',
		'com/banfftech/projectallocfactbasedimension1analysis/test/integration/pages/ProjectAllocFactViewsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProjectAllocFactViewsList, ProjectAllocFactViewsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/projectallocfactbasedimension1analysis') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProjectAllocFactViewsList: ProjectAllocFactViewsList,
					onTheProjectAllocFactViewsObjectPage: ProjectAllocFactViewsObjectPage
                }
            },
            opaJourney.run
        );
    }
);