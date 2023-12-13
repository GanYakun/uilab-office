sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/jxywprojectinvestmentbasedimension2analysis/test/integration/FirstJourney',
		'com/banfftech/jxywprojectinvestmentbasedimension2analysis/test/integration/pages/JxywProjectInvestmentViewsList',
		'com/banfftech/jxywprojectinvestmentbasedimension2analysis/test/integration/pages/JxywProjectInvestmentViewsObjectPage'
    ],
    function(JourneyRunner, opaJourney, JxywProjectInvestmentViewsList, JxywProjectInvestmentViewsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/jxywprojectinvestmentbasedimension2analysis') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheJxywProjectInvestmentViewsList: JxywProjectInvestmentViewsList,
					onTheJxywProjectInvestmentViewsObjectPage: JxywProjectInvestmentViewsObjectPage
                }
            },
            opaJourney.run
        );
    }
);