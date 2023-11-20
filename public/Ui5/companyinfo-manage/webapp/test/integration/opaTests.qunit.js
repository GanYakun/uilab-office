sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/banfftech/companyinfomanage/test/integration/FirstJourney',
		'com/banfftech/companyinfomanage/test/integration/pages/CompaniesList',
		'com/banfftech/companyinfomanage/test/integration/pages/CompaniesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CompaniesList, CompaniesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/banfftech/companyinfomanage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCompaniesList: CompaniesList,
					onTheCompaniesObjectPage: CompaniesObjectPage
                }
            },
            opaJourney.run
        );
    }
);